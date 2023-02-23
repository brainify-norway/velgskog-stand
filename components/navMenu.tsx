import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Collapse, Container, Nav, Navbar } from 'react-bootstrap';

const NavMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="https://www.nhomd.no/velgskog">
                        <Image
                            src="/logo.png"
                            alt="Picture of the author"
                            width={125}
                            height={60}
                        />
                    </Navbar.Brand>

                    <div
                        className={
                            open
                                ? 'hamburger-dropdown close'
                                : 'hamburger-dropdown  open'
                        }
                        onClick={() => setOpen(!open)}
                    ></div>
                    <Collapse className={open ? 'show' : 'hide'}>
                        <Nav id="nav-menu">
                            <Link
                                className="menu-link"
                                href="https://velgskog.no/"
                            >
                                Forsiden
                            </Link>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavMenu;
