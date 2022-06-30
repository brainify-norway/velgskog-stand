import { useRef } from "react";
import { BiPlay } from "react-icons/bi";
export default function Video({
    url,
    loop,
    currentVid,
    setCurrentVid,
    featured,
    playing,
    setPlaying,
    mute,
    setMute
}) {
    const vidRef = useRef(null);
    function play() {
        vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause();
        setPlaying(!vidRef.current.paused);
    }
    function muting() {
        vidRef.current.muted === true
            ? (vidRef.current.muted = false)
            : (vidRef.current.muted = true);
        setMute(!vidRef.current.muted);
    }
    return (
        <>
            <span
                className={
                    currentVid !== featured
                        ? "button showBtn"
                        : "button hideBtn"
                }
            >
                <button
                    onClick={play}
                    className={playing ? "pause " : "play "}
                ></button>
                <button
                    onClick={muting}
                    className={mute ? "unmuted " : "muted "}
                ></button>
            </span>
            <video
                ref={vidRef}
                key={url}
                style={{
                    width: "100%",
                    height: "500px"
                }}
                autoPlay
                loop={loop}
                onEnded={() => setCurrentVid(featured)}
            >
                <source src={url} />
            </video>
        </>
    );
}
