import React, { useEffect } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
    AppBar,
    Stack,
    ThemeProvider,
    Toolbar,
    createTheme,
    Link,
    Button,
    IconButton,
    Divider,
    Box,
} from "@mui/material"

import {
    Language,
    Search,
    Person2Outlined
} from '@mui/icons-material'
import logo from '../logo.png'
import { Outlet } from 'react-router-dom';

const pages = [{
        title: "Home",
        link: "/"
    },
    {
        title: "About Us",
        link: "/about-us"
    },
    {
        title: "Products",
        link: "/products"
    },
    {
        title: "Services",
        link: "/services"
    },
    {
        title: "Contact Us",
        link: "/contact-us"
    }
]

function Layout() {
    useEffect(() => {
        const header = document.querySelector(".header");
        const toggleClass = "is-sticky";

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 150) {
                header.classList.add(toggleClass);
            } else {
                header.classList.remove(toggleClass);
            }
        });
    })

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
                background: '#00000088',
                position: 'relative',
                zIndex: '100',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Box className="logo" sx={{
                    padding: "0rem 2rem"
                }}>
                    <img src={logo} alt="" srcset="" style={{width: '8rem'}} />
                </Box>
                <Stack component='nav' direction='row'>
                    <nav>
                        {pages.map((page) => {
                            return (
                                <Link component={Button} disableElevation disableFocusRipple href={page.link} sx={{
                                    color: "white",
                                    textDecoration: "none",
                                    fontSize: '0.8rem',
                                    padding: '0',
                                    "&:hover": {
                                        background: "none"
                                    }
                                }}>{page.title}</Link>
                            )
                        })}
                    </nav>
                    <Stack className='sideBtn' direction='row' spacing={1} sx={{
                        padding: "0rem 1rem 0rem 1rem",
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
                    </Stack>
                </Stack>
            </AppBar>
        </ThemeProvider>
        <Outlet />
        </>
    )
}

export default Layout
