import styled from 'styled-components'

export const SelectChartBox = styled.section`
    display: flex;
    flex-direction: column;
    gap: .5rem;

    & > span {
        font-weight: bold;
        color: #2e2e2e;
    }
`

export const ChartList = styled.div`
    display: flex;
    gap: 1rem;
`

export const ChartOption = styled.label`
    padding: .5rem;
    cursor: pointer;

    &:has(input:checked) {
        background-color: #00438c;
        color: white;
        border-radius: 6px;
        transition: .3s background;
        font-weight: 500;
    }

    & > input {
        display: none;
    }
`