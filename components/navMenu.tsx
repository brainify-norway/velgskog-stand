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
                    <Navbar.Brand href="https://www.rornorge.no">
                        <Image
                            src="/logo-skog.svg"
                            alt="Picture of the author"
                            width={100}
                            height={50}
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
