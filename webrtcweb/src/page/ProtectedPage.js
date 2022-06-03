import React, { useRef, useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const constraints = window.constraints = {
    audio: false,
    video: true
};

export default function (props) {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        console.log("ws", process.env.REACT_APP_websocket)
        setSocket(new WebSocket(process.env.REACT_APP_websocket))

        return () => {
            if (socket !== null) {
                socket.close()
            }
        }
    }, [])


    if (socket !== null) {
        console.log('s not empty.')

        socket.onopen = () => {
            console.log('open')
            socket.send('hello')
        }

        socket.onmessage = (msg) => {
            console.log('msg', msg.data, msg)
        }
        setSocket.onerror = (err) => {
            console.log('err', err)
        }
        setSocket.onclose = () => {
            console.log('close')
        }
    }



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
        <div style={{ heght: "200px" }}>

        </div>
        <video ref={videoRef} autoPlay playsInline style={{ height: "200px" }}></video>
        <button id="showVideo" onClick={(e) => openCamara(e)}>Open camera</button>

        <Link to="/a">NoMatch</Link>
    </>
}
