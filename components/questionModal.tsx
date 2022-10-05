import { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

type Props = {
    questions: Array<any>;
    setCurrentVid: Function;
    setMute: Function;
};

export default function QuestionModal({
    questions,
    setCurrentVid,
    setMute,
}: Props) {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open);
    }

    function setVid(url) {
        setCurrentVid(url);
        setOpen(!open);
        setMute(false);
    }

    return (
        <>
            <div className="btn" onClick={handleClick}>
                <span className="text">Still meg et spørsmål</span>
            </div>

            {open && (
                <div className="questionModal">
                    <span className="button-wrapper">
                        <button className="close">
                            <IoMdCloseCircle onClick={handleClick} />
                        </button>
                    </span>
                    {questions.map((question, i) => {
                        return (
                            <div key={i} className="question-wrapper">
                                <span
                                    onClick={() =>
                                        setVid(question.video.mediaItemUrl)
                                    }
                                    className="question"
                                >
                                    {question.text}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
