import { Panel } from "reactflow";
import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100%;
    
    padding: 1.5rem 1rem;
    
    background-color: #f3f3f4;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const Heading = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    color: #2e2e2e;
`

export const ChartContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 16px;

    background-color: #fff;
`

export const StyledPanel = styled(Panel)`
    display: flex;
    gap: 1rem;
`