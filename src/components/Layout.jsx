import React, { useEffect, useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
    AppBar,
    Stack,
    ThemeProvider,
    createTheme,
    Link,
    Button,
    IconButton,
    Box,
} from "@mui/material"

import {
    Language,
    Search,
    Person2Outlined,
    Menu,
    Home,
    People,
    Shop,
    DesignServices,
    ContactPage
} from '@mui/icons-material'
import logo from '../logo.png'
import { Outlet } from 'react-router-dom';

const pages = [{
        title: "Home",
        link: "/",
        icon: `${<Home />}`
    },
    {
        title: "About Us",
        link: "/about-us",
        icon: `${<People />}`
    },
    {
        title: "Products",
        link: "/products",
        icon: `${<Shop />}`
    },
    {
        title: "Services",
        link: "/services",
        icon: `<DesignServices />`
    },
    {
        title: "Contact Us",
        link: "/contact-us",
        icon: `${<ContactPage />}`
    }
]

function Layout() {
    const [navBar, setNavBar] = useState(false);

    const toggleNav = () => {
        setNavBar(!navBar);
    }
    
    useEffect(() => {
        const header = document.querySelector("header");
        const toggleClass = "is-sticky";
        const menuItem = document.querySelectorAll('nav a');
        const menuIcon = document.querySelectorAll('nav svg');

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 150) {
                header.classList.add(toggleClass);
            } else {
                header.classList.remove(toggleClass);
            }
        });

        if(window.location.pathname === '/'){
            header.style.background = 'white';
            for (let i = 0; i < menuItem.length; i++) {
                menuItem[i].style.color = "white";
            }
            for (let i = 0; i < menuIcon.length; i++) {
                menuIcon[i].style.fill = "#3A3A8D";
            }
        }
    });

    const theme = createTheme({
        palette: {
            primary: {
                main: "#3A3A8D",
                dark: "#2E2877",
                light: "#828AC7",
                lighter: "#E9EBF5"
            },
            secondary: {
                main: "#E52027",
                dark: "#B8000B",
                light: "F19493",
                lighter: "#FFEAED"
            },
            white: "#ffffff"
        }
    })

    return (
        <>
        <ThemeProvider theme={theme}>
            <AppBar className='header' window sx={{
                background: 'white',
                position: 'relative',
                zIndex: '100',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Box className="logo" sx={{
                    padding: "0rem 2rem",
                    background: 'white'
                }}>
                    <img src={logo} alt="" srcset="" style={{width: '8rem'}} />
                </Box>
                <Stack component='nav' direction='row'>
                    <nav className={navBar ? 'showNav' : ''}>
                        {pages.map((page) => {
                            return (
                                <Link component={Button} disableElevation disableFocusRipple href={page.link} sx={{
                                    color: "black",
                                    textDecoration: "none",
                                    fontSize: '0.8rem',
                                    padding: '0',
                                    "&:hover": {
                                        background: "none"
                                    }
                                }}>{page.icon}{page.title}</Link>
                            )
                        })}
                    </nav>
                    <Stack className='sideBtn' direction='row' spacing={1} sx={{
                        padding: "0rem 1rem 0rem 1rem",
                        background: 'black'
                    }}>
                        <IconButton>
                            <Search sx={{
                                color: 'white'
                            }} />
                        </IconButton>
                        <IconButton>
                            <Person2Outlined sx={{
                                color: 'white'
                            }} />
                        </IconButton>
                        <IconButton>
                            <Language sx={{
                                color: 'white'
                            }} />
                        </IconButton>
                        <IconButton id='navIcon' onClick={toggleNav} sx={{
                            display: 'none'
                        }}>
                            <Menu sx={{
                                color: 'white',
                            }} />
                        </IconButton>
                    </Stack>
                </Stack>
            </AppBar>
        </ThemeProvider>
        <Outlet />
        </>
    )
}

export default Layout
