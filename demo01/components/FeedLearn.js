import React from 'react'
export default function FeedLearn() {
    return (
        <>
            <div className=" justify-center items-center min-h-screen">
                <div className="flex justify-center items-center">
                    <div className="mb-4 text-center flex flex-col w-3/5 items-center text-2xl bg-[#ef7b7b] text-white p-2 rounded-2xl">
                        {"Replace the word 'Aussie' with the term you'd like to learn."}
                    </div>
                </div>

                <div>

                    <div dangerouslySetInnerHTML={{
                        __html: `
          <a id="yg-widget-0" class="youglish-widget" data-query="Aussie" data-lang="english" data-accent="aus" data-zones="all,us,uk,aus" data-components="8413" width="640" data-auto-start="0" data-bkg-color="theme_light"  rel="nofollow" href="https://youglish.com">Visit YouGlish.com</a>
          <script async src="https://youglish.com/public/emb/widget.js" charset="utf-8"></script>
        `
                    }} />
                </div>
            </div>

        </>
    )
}
