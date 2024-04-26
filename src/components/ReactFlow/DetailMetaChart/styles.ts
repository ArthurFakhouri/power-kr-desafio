import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    height: 100%;
`

export const Text = styled.span`
    color: #2e2e2e;
    font-size: .825rem;
    font-weight: 400;

    text-align: center;
`

export const MetaChartContainer = styled.div`
    display: flex;
`

export const TextValues = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BalanceAndGlobalStatus = styled(TextValues)``
export const Averages = styled(TextValues)``

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    width: 200px;
    height: 110px;
`

export const Title = styled.strong`
    color: #2e2e2e;
    font-size: 1rem;
    font-weight: 500;
`

export const Amount = styled.span`
    color: #00438c;
    font-size: 1.5rem;
    font-weight: bold;
`

export const ButtonMeta = styled.button`
    all: unset;
    background-color: #00438c;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    padding: .5rem;
    border-radius: 6px;
    text-align: center;

    box-shadow: 1px 5px 3px 3px rgba(0, 0, 0, 0.3);
    transition: .3s filter;
    
    &:hover {
        cursor: pointer;
        filter: brightness(80%);
    }

`