import { Container } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Footer = ({ data }) => {
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
