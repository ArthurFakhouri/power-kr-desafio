import styled, { css, keyframes } from "styled-components";

type FilterContainerProps = {
    disabled: boolean;
}

export const FilterContainer = styled.div<FilterContainerProps>`
    display: flex;
    position: relative;
    pointer-events: ${props => props.disabled ? "none" : "initial"};
`

interface FilterProps {
    active: string;
}

const overflowSelectAnimation = keyframes`
    to {
        overflow-y: overlay;
    }
`

export const FilterSelected = styled.div<FilterProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 250px;
    padding: .5rem;
    background-color: #f4f4f4;
    gap: .5rem;
    border-radius: 6px;
    cursor: pointer;
    user-select: none;
    min-height: 50px;
    text-transform: uppercase;

    & > svg {
        min-width: 20px;
        min-height: 20px;
        transform: ${props => props.active === 'true' ? "rotateZ(180deg)" : ""};
        transition: .3s transform;
        color: #2e2e2e;
    }
`

interface FilterOptions extends FilterProps {
    isabsolute: string
}


export const FilterOptions = styled.ul<FilterOptions>`
    max-width: 300px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: ${props => props.isabsolute === "true" ? "absolute" : "initial"};
    top: ${props => props.isabsolute === "true" ? "100%" : "initial"};
    margin-right: auto;
    background: #f4f4f4;
    user-select: none;
    z-index: 2;

    ${props => props.active === "true" ?
        css`
        visibility: visible;
        transition: all .5s ease .5s;
        transition-delay: 0s, 0s, .3s;
        max-height: 300px;
        animation: ${overflowSelectAnimation} 0s linear .3s forwards;
        `
        :
        "visibility: hidden;transition: all .3s ease 0s;max-height: 0;"
    }

    li{
        padding: .75rem .5rem;
        transition: .5s filter;
        background-color: #f4f4f4;
    }
    li:hover{
        cursor: pointer;
        filter: brightness(80%);
        color: ${props => props.theme.white};
    }
`