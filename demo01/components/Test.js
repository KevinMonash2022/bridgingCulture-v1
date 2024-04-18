import { useEffect } from 'react';

function YouGlishComponent() {
    useEffect(() => {

        const tag = document.createElement('script');
        tag.src = "https://youglish.com/public/emb/widget.js";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouglishAPIReady = function () {
            const widget = new window.YG.Widget("widget-1", {
                width: 640,
                components: 9,
                events: {
                    'onFetchDone': onFetchDone,
                    'onVideoChange': onVideoChange,
                    'onCaptionConsumed': onCaptionConsumed
                }
            });


            widget.fetch("courage", "english", "aus");
        };

        function onFetchDone(event) {
            if (event.totalResult === 0) alert("No result found");
        }

        function onVideoChange(event) {
            console.log("Video changed to track number: ", event.trackNumber);
        }

        function onCaptionConsumed(event) {
            console.log("Caption consumed: ", event);
        }


        return () => {
            window.onYouglishAPIReady = null;
        };
    }, []);

    return <div id="widget-1">Loading YouGlish player...</div>;
}

export default YouGlishComponent;
