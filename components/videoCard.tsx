import { useState } from 'react';
import QuestionModal from './questionModal';
import Video from './video';

type Props = {
    item: any;
};

export default function VideoCard({ item }: Props) {
    const [mute, setMute] = useState(true);
    const [playing, setPlaying] = useState(true);
    const [currentVid, setCurrentVid] = useState(
        item.ambassadorAcf.featuredVideo.mediaItemUrl
    );

    return (
        <>
            <div key={item.id} className={'video-card ' + item.slug}>
                <div className="video-box">
                    <Video
                        url={currentVid}
                        mute={mute}
                        setMute={setMute}
                        loop={
                            currentVid ===
                            item.ambassadorAcf.featuredVideo.mediaItemUrl
                        }
                        currentVid={currentVid}
                        setCurrentVid={setCurrentVid}
                        featured={item.ambassadorAcf.featuredVideo.mediaItemUrl}
                        playing={playing}
                        setPlaying={setPlaying}
                    />
                </div>
                <div className="openModal">
                    <h3 className="text">{item.title}</h3>
                    <span>{item.ambassadorAcf.speciality}</span>
                    <QuestionModal
                        questions={item.ambassadorAcf.questions}
                        setCurrentVid={setCurrentVid}
                        setMute={setMute}
                    />
                </div>
            </div>
        </>
    );
}
