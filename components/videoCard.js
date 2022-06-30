import { useState } from "react";
import Video from "./video";
import QuestionModal from "./questionModal";

export default function VideoCard({ item }) {
    const [open, setOpen] = useState(false);
    const [mute, setMute] = useState(true);
    const [playing, setPlaying] = useState(true);
    const [currentVid, setCurrentVid] = useState(
        item.acf.featuredVideo.mediaItemUrl
    );

    return (
        <>
            <div key={item.id} className={"video-card " + item.slug}>
                <div className="video-box">
                    <Video
                        url={currentVid}
                        mute={mute}
                        setMute={setMute}
                        loop={
                            currentVid === item.acf.featuredVideo.mediaItemUrl
                        }
                        currentVid={currentVid}
                        setCurrentVid={setCurrentVid}
                        featured={item.acf.featuredVideo.mediaItemUrl}
                        playing={playing}
                        setPlaying={setPlaying}
                    />
                    <div className="hide-video-line"></div>
                </div>
                <QuestionModal
                    questions={item.videos.questions}
                    currentVid={currentVid}
                    setCurrentVid={setCurrentVid}
                    item={item}
                />
            </div>
        </>
    );
}
