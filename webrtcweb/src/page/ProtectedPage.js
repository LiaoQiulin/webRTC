import React, { useRef, useMemo } from "react";
import { Link } from "react-router-dom";

const constraints = window.constraints = {
    audio: false,
    videoRef: true
};

export default function (props) {

    const videoRef = useRef(null);



    return <>
        <div id="container">
            <h1><a href="//webrtc.github.io/samples/" title="WebRTC samples homepage">WebRTC samples</a>
                <span>getUserMedia</span></h1>

            <video ref={videoRef} id="gum-local" autoPlay playsInline></video>
            <button id="showVideoRef" onClick={async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia(constraints);
                    const videoRefTracks = stream.getVideoRefTracks();
                    console.log('Got stream with constraints:', constraints);
                    console.log(`Using videoRef device: ${videoRefTracks[0].label}`);
                    window.stream = stream; // make variable available to browser console
                    videoRef.srcObject = stream;
                } catch (e) {
                    console.log('e', e)
                }

            }}>Open camera</button>

            <div id="errorMsg"></div>

            <p className="warning"><strong>Warning:</strong> if you're not using headphones, pressing play will cause feedback.</p>

            <p>Display the videoRef stream from <code>getUserMedia()</code> in a videoRef element.</p>

            <p>The <code>MediaStream</code> object <code>stream</code> passed to the <code>getUserMedia()</code> callback is in
                global scope, so you can inspect it from the console.</p>

            <a href="https://github.com/webrtc/samples/tree/gh-pages/src/content/getusermedia/gum"
                title="View source for this page on GitHub" id="viewSource">View source on GitHub</a>
        </div>
        <Link to="/a">NoMatch</Link>
    </>
}
