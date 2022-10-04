import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className="main-footer">
                <Container>
                    <button>
                        tilbake til forsiden
                        <span className="arrow">
                            <BsArrowRight />
                        </span>
                    </button>
                </Container>
            </div>
        </>
    );
};

export default Footer;
