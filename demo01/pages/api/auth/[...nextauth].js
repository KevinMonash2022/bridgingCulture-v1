import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Updated login logic
        // Check if the credentials match the new required username and password
        if (credentials.username === "admin" && credentials.password === "16") {
          // Return a user object if authentication is successful
          return { id: 1, name: "Admin User", email: "admin@example.com" }
        }
        // Return null if authentication fails
        return null
      },
    }),
  ],
  // Add more configuration here
  debug: process.env.NODE_ENV === 'development',
})