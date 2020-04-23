import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import backgroundSingUp from '../../assets/sign-up-background.png';

// Animation Config
const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }

`;

export const Container = styled.section`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /*
  *place-content:center;
  */

  width: 700px;
  max-width: 700px;
`;

export const AnimationContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  animation: ${appearFromRight} 1s;
  form {
    max-width: 340px;
    width: 100%;
    margin: 80px 0;

    h1 {
      font-weight: 500;
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  > a {
    font-size: 20px;
    font-weight: 400;
    color: #f4ede8;
    text-decoration: none;
    font-weight: 400;
    margin-top: 24px;
    transition: 0.3s ease;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 15px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background-image: url(${backgroundSingUp});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
