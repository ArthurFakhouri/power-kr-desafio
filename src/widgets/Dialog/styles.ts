import * as Dialog from '@radix-ui/react-dialog';
import styled, { keyframes } from 'styled-components';

const contentShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const DialogTrigger = styled(Dialog.Trigger)``

export const DialogContent = styled(Dialog.Content)`
    border-radius: 6px;
    background-color: #fff;
    box-shadow: hsl(206 22% 7% /35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px - 15px;
    position: fixed;
    top: calc(100px + 4rem);
    right: 0;
    width: 23vw;
    height: calc(100% - 100px - 5.5rem);
    z-index: 7;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 25px;
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.3);

    overflow: hidden;
`