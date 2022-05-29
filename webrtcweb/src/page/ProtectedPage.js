import React, { useRef, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const constraints = window.constraints = {
    audio: false,
    video: true
};

export default function (props) {
    const videoRef = useRef(null);

    const constraints = window.constraints = {
        audio: false,
        video: true
    };


    async function openCamara(e) {
        console.log('click')
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            console.log(videoRef)
            // const video = document.querySelector('video');
            const videoTracks = stream.getVideoTracks();
            console.log('Got stream with constraints:', constraints);
            console.log(`Using video device: ${videoTracks[0].label}`);
            window.stream = stream; // make variable available to browser console
            videoRef.current.srcObject = stream;
            e.target.disabled = true;
        } catch (error) {
            console.error(error);
        }
    }

    return <>
        <video ref={videoRef} autoPlay playsInline ></video>
        <button id="showVideo" onClick={(e) => openCamara(e)}>Open camera</button>

        <Link to="/a">NoMatch</Link>
    </>
}
