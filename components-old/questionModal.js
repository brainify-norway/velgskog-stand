import { useState } from "react";
// import { IoMdCloseCircle } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function QuestionModal({
    questions,
    setCurrentVid,
    setMute,
    // questions,
    // currentVid,
    // setCurrentVid,
    item
}) {
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
            <div className="openModal" onClick={handleClick}>
                <div className="card-info" key={item.title}>
                    <h3>
                        {item.title} ({item.ambassadorAcf.age})
                    </h3>
                    <div>
                        {item.ambassadorAcf.speciality},{" "}
                        {item.ambassadorAcf.arbeidsgiver}
                    </div>
                    <div className="text">
                        <button>Still meg et spørsmål</button>
                    </div>
                </div>
            </div>

            {open && (
                <div className="questionModal">
                    <span className="button-wrapper">
                        <button className="close">
                            <IoMdClose onClick={handleClick} />
                        </button>
                    </span>
                    {questions.map((question, i) => {
                        return (
                            <div key={i} className="question-wrapper">
                                <div
                                    onClick={() =>
                                        setVid(question.video.mediaItemUrl)
                                    }
                                    className="question"
                                >
                                    <p>{question.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
