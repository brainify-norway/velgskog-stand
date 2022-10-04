import Image from 'next/image';
import { Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaSnapchat } from 'react-icons/fa';

type Props = {
    data: any;
};

const Footer = ({ data }: Props) => {
    return (
        <>
            <div className="main-footer">
                <Container>
                    <Row>
                        {/*Column 1*/}
                        <div className="col">
                            <div className="icons">
                                <Image
                                    src="/logo-blir-rorlegger.svg"
                                    alt="Picture of the author"
                                    width={70}
                                    height={70}
                                />

                                <Image
                                    src="/rorentreprenor.svg"
                                    alt="Picture of the author"
                                    width={70}
                                    height={70}
                                />
                                <div className="some">
                                    <div className="text">
                                        <p>Følg oss</p>
                                    </div>
                                    <div className="social-icons">
                                        <a
                                            className="icon"
                                            href={
                                                data.socialMediaLinks[0]
                                                    .socialMediaLink
                                            }
                                        >
                                            <FaSnapchat />
                                        </a>
                                        <a
                                            className="icon"
                                            href={
                                                data.socialMediaLinks[1]
                                                    .socialMediaLink
                                            }
                                        >
                                            <FaInstagram />
                                        </a>
                                        <a
                                            className="icon"
                                            href={
                                                data.socialMediaLinks[2]
                                                    .socialMediaLink
                                            }
                                        >
                                            <FaFacebook />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-text">
                                <p>{data.description}</p>
                            </div>
                        </div>

                        {/*Column 2*/}
                        <div className="col">
                            <ul className="list-unstyled footer-navigation">
                                <li>
                                    <a href={data.menuLinks[0].menuLink}>
                                        {data.menuLinks[0].menuName}
                                    </a>
                                </li>
                                <li>
                                    <a href={data.menuLinks[1].menuLink}>
                                        {data.menuLinks[1].menuName}
                                    </a>
                                </li>
                                <li>
                                    <a href={data.menuLinks[2].menuLink}>
                                        {data.menuLinks[2].menuName}
                                    </a>
                                </li>
                                <li>
                                    <a href={data.menuLinks[3].menuLink}>
                                        {data.menuLinks[3].menuName}
                                    </a>
                                </li>
                                <li>
                                    <a href={data.menuLinks[4].menuLink}>
                                        {data.menuLinks[4].menuName}
                                    </a>
                                </li>
                                <li>
                                    <a href={data.menuLinks[5].menuLink}>
                                        {data.menuLinks[5].menuName}
                                    </a>
                                </li>
                                <li>
                                    <a href={data.menuLinks[6].menuLink}>
                                        {data.menuLinks[6].menuName}
                                    </a>
                                </li>
                                <li>
                                    <a href={data.menuLinks[7].menuLink}>
                                        {data.menuLinks[7].menuName}
                                    </a>
                                </li>
                            </ul>

                            <ul className="list-unstyled footer-secondary-links">
                                <p>Nyttige Lenker</p>
                                <li>
                                    <a href={data.partnersLinks[0].partnerLink}>
                                        {data.partnersLinks[0].partnerName}
                                    </a>
                                </li>
                                <li>
                                    <a href={data.partnersLinks[1].partnerLink}>
                                        {data.partnersLinks[1].partnerName}
                                    </a>
                                </li>
                                <li>
                                    <a href={data.partnersLinks[2].partnerLink}>
                                        {data.partnersLinks[2].partnerName}
                                    </a>
                                </li>
                                <li>
                                    <a href={data.partnersLinks[3].partnerLink}>
                                        {data.partnersLinks[3].partnerName}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Footer;
