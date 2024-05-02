import React from 'react';

function YouGlishWidget() {
    return (
        <div>
            {/* 使用dangerouslySetInnerHTML插入HTML代码 */}
            <div dangerouslySetInnerHTML={{
                __html: `
          <a id="yg-widget-0" class="youglish-widget" data-query="Aussie" data-lang="english" data-accent="aus" data-zones="all,us,uk,aus" data-components="8413" width="960" data-auto-start="0" data-bkg-color="theme_light"  rel="nofollow" href="https://youglish.com">Visit YouGlish.com</a>
          <script async src="https://youglish.com/public/emb/widget.js" charset="utf-8"></script>
        `
            }} />
        </div>
    );
}

export default YouGlishWidget;
