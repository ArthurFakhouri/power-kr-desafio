import { FaGears } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 20vw;
    height: 100vh;
    background-color: #00438c;

    padding: 1rem 2rem;

    display: flex;
    flex-direction: column;
    gap: 4rem;
`

export const Logo = styled.img`
    width: 50%;
    object-fit: contain;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #efefef;
`

export const NavItem = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: bold;

    color: white;
    text-decoration: none;
    transition: transform 0.2s, filter .2s;

    &:hover {
        transform: translate(3px, -3px);
        filter: brightness(80%);
    }
`

export const Gears = styled(FaGears)`
    transform: scale(-1);
`