import { Carousel, Container, Spinner } from "react-bootstrap";
import VideoCard from "../components/videoCard";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { useEffect, useState } from "react";
import Image from "next/image";

const Layout = ({ data, ambassadorer }) => {
    // function for mobile slider here
    const [current, setCurrent] = useState(0);
    const [open, setOpen] = useState(false);
    const length = ambassadorer.length;

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    // console.log(current);

    return (
        <>
            {/* Video carousel for mobile version */}
            <section className="slider mobile">
                <div className="left-arrow">
                    <CgChevronLeft className="left-icon" onClick={prevSlide} />
                </div>
                <div className="right-arrow">
                    <CgChevronRight
                        className="right-icon"
                        onClick={nextSlide}
                    />
                </div>

                <div className="card-grid container">
                    {loading ? (
                        ambassadorer.map(({ node }, index) => {
                            return (
                                <div
                                    className={
                                        index === current
                                            ? "slide active"
                                            : "slide"
                                    }
                                    key={index}
                                >
                                    {index === current && (
                                        <VideoCard
                                            key={node.id}
                                            item={node}
                                            open={open}
                                            setOpen={setOpen}
                                        />
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <div className="spinner-wrapper" key="spinner">
                            <Spinner
                                animation="border"
                                role="status"
                                className="loading"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </Spinner>
                        </div>
                    )}
                </div>
            </section>

            <div className="__inner bg desktop">
                <div className="background-img">
                    <Image
                        src="/bkg.jpg"
                        alt="Picture of the author"
                        width={979}
                        height={580}
                    />
                </div>
                <div className="card-grid container">
                    {loading ? (
                        ambassadorer.map(({ node }) => {
                            return (
                                <>
                                    <VideoCard
                                        key={node.id}
                                        item={node}
                                        open={open}
                                        setOpen={setOpen}
                                    />
                                </>
                            );
                        })
                    ) : (
                        <>
                            <div className="spinner-wrapper">
                                <Spinner
                                    animation="border"
                                    role="status"
                                    className="loading"
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </Spinner>
                            </div>
                            <div className="spinner-wrapper">
                                <Spinner
                                    animation="border"
                                    role="status"
                                    className="loading"
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </Spinner>
                            </div>
                            <div className="spinner-wrapper">
                                <Spinner
                                    animation="border"
                                    role="status"
                                    className="loading"
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </Spinner>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Layout;
