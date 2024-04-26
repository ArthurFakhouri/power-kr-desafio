import styled from "styled-components";

type CardContainerProps = {
    color: '#fd4233' | '#ff9a00' | '#009e53'
}

export const CardContainer = styled.div<CardContainerProps>`
    all: unset;
    background-color: #fff;
    border-bottom: solid 6px ${props => props.color};
    display: flex;
    width: 400px;
    height: 100px;
    border-radius: 8px;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;

    position: relative;
    
    box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.2);
    
    transition: .3s transform, .3s box-shadow;
    
    &:hover {
        cursor: pointer;
        box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .3);
        transform: translate(5px, -5px);
    }   
`

export const ProfileImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;

    object-fit: cover;
`

export const Gauge = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: end;

    width: 150px;
    height: 100px;
    min-width: 150px;
    min-height: 100px;
    max-width: 150px;
    max-height: 100px;
`

export const DepartmentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
`

export const Department = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`