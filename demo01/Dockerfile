# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# libc6-compat is sometimes needed for Node.js on Alpine, more info:
# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then \
    yarn --frozen-lockfile; \
    yarn add sharp; \
    elif [ -f package-lock.json ]; then \
    npm ci; \
    npm install sharp; \
    elif [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && pnpm i --frozen-lockfile; \
    pnpm add sharp; \
    else \
    echo "Lockfile not found." && exit 1; \
    fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Uncomment the next line to disable Next.js telemetry during the build
# ENV NEXT_TELEMETRY_DISABLED 1

RUN \
    if [ -f yarn.lock ]; then \
    yarn run build; \
    elif [ -f package-lock.json ]; then \
    npm run build; \
    elif [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && pnpm run build; \
    else \
    echo "Lockfile not found." && exit 1; \
    fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the next line to disable Next.js telemetry during runtime
# ENV NEXT_TELEMETRY_DISABLED 1

# Setup the user and group
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Setup the correct permission for prerender cache and other directories
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the build output to run the app
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Run everything after as non-privileged user.
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Set the environment variable for the port (used in express, etc.)
ENV PORT 3000

# Start the Next.js app
CMD HOSTNAME="0.0.0.0" node server.js
