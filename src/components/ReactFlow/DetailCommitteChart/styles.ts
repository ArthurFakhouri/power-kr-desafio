import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    height: 100%;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

type PhotoProps = {
    size: number
}

export const Photo = styled.img<PhotoProps>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: 2px solid #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
    border-radius: 50%;

    object-fit: contain;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
`

export const Department = styled.strong`
    font-size: 1.5rem;
    color: #2e2e2e;
`

export const Name = styled.span`
    color: #2e2e2e;
`

export const CommitteParticipants = styled.div`
    color: #2e2e2e;

    display: flex;
    flex-direction: column;
    gap: .25rem;
`

export const ParticipantList = styled.ul`
    display: flex;

    list-style: none;
`

export const ParticipantItem = styled.li`
    margin-right: -32px;
`

export const GeneralPerformance = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

export const PerformanceItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25rem;
    text-align: center;
    color: #2e2e2e;
    font-weight: 500;

    width: 40%;
    height: 30px;
`

export const Impact = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 150px;
`

export const ItemImpact = styled.div`
    display: flex;
    flex-direction: column;
    color: #2e2e2e;
    gap: .5rem;

    font-weight: 500;
    font-size: 1rem;
    text-transform: uppercase;

    text-align: center;
`

export const ImpactStatus = styled.span`
    color: #2e2e2e;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .25rem;
`

export const ButtonCommittee = styled.button`
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