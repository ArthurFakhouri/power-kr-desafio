import styled from "styled-components";

type CardContainerProps = {
    color: '#fd4233' | '#ff9a00' | '#009e53'
}

export const CardContainer = styled.div<CardContainerProps>`
    width: 400px;
    height: 200px;
    
    background-color: #fff;
    border-bottom: solid 6px ${props => props.color};;
    border-radius: 8px;
    padding: .5rem 1rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;

    box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.2);
    transition: .3s transform, .3s box-shadow;
    
    &:hover {
        cursor: pointer;
        box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, .3);
        transform: translate(5px, -5px);
    }   
`

export const Department = styled.strong`
    font-size: 1.25rem;
    color: #2e2e2e;
`

export const General = styled.div`
    width: 100%;
    height: 50px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & > span {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const GeneralChart = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
`

export const Aes = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

    width: 100%;
    height: 75px;
`

export const AeItem = styled.div`
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > span {
        font-size: 12px;
    }
`