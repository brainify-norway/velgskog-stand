import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function QuestionModal({
    questions,
    currentVid,
    setCurrentVid,
    item
}) {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open);
    }

    function setVid(url) {
        setCurrentVid(url);
        setOpen(!open);
    }

    return (
        <>
            <div className="openModal" onClick={handleClick}>
                <div className="card-info" key={item.title}>
                    <h3>
                        {item.title} ({item.acf.age})
                    </h3>
                    <div>
                        {item.acf.speciality}, {item.acf.arbeidsgiver}
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
                    {questions.map((question) => {
                        return (
                            <div
                                key={question.question}
                                className="question-wrapper"
                            >
                                <div
                                    onClick={() => setVid(question.videoUrl)}
                                    className="question"
                                >
                                    <p>{question.question}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
