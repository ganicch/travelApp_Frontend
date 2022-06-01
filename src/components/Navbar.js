import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'


function Navbar({ theme, setTheme }) {
    return (
        <>
            <Nav>
                <h1 style={{ color: "#fff" }}>Travel.io</h1>
                <NavMenu>
                    <NavLink to='/' activeStyle>Home</NavLink>
                    <NavLink to='/my-travels' activeStyle>My Travels</NavLink>
                    <NavLink to='/planned-trips' activeStyle>Planned trips</NavLink>
                    <NavLink to='/add-a-trip' activeStyle>Add a trip</NavLink>
                    <NavLink to='/settings' activeStyle>Settings</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Sign Out</NavBtnLink>
                    {theme ? <FontAwesomeIcon style={{ color: "#fff", cursor: "pointer" }} onClick={() => { setTheme(!theme) }} icon={faMoon} />
                        :
                        <FontAwesomeIcon style={{ color: "#fff", cursor: "pointer" }} onClick={() => { setTheme(!theme) }} icon={faSun} />
                    }

                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    background: #000;
    justify-content: space-between;
    height: 80px;
    padding: 0 2rem;
    z-index: 10;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`
export const NavMenu = styled.nav`
    display: flex;
    align-items: center;
    margin-right: -24px;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    gap: 20px;
`
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: #fff;
        color: #010606;
    }
`