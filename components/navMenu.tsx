import Image from 'next/image';
import { useState } from 'react';
import { Collapse, Container, Nav, Navbar } from 'react-bootstrap';

const menu = [
    { label: 'Forsiden', href: 'https://velgskog.no/' },
    { label: 'Studiesteder', href: 'https://velgskog.no/studiesteder/' },
    { label: 'Jobbmuligheter', href: 'https://velgskog.no/jobbmuligheter/' },
    {
        label: 'Ledige stillinger',
        href: 'https://velgskog.no/ledige-stillinger/',
    },
    { label: 'Om Velg Skog', href: 'https://velgskog.no/om-velg-skog/' },
    { label: 'Ressursside', href: 'https://velgskog.no/ressursside/' },
    { label: 'Nettbutikk', href: 'https://www.supportershoppen.no/velg-skog/' },
];

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
                            {menu.map((item, index) => (
                                <a
                                    key={index}
                                    className="menu-link"
                                    href={item.href}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavMenu;
