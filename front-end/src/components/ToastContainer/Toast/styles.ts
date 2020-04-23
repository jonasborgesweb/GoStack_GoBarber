import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type: 'sucess' | 'error' | 'info';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,
  sucess: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background-color: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div) <ContainerProps>`
  max-width: 320px;
  width: 100%;
  position: relative;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: flex-start;

  ${(props) => toastTypeVariations[props.type || 'info']}

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  div {
    flex: 1;

    h4 {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    margin: 4px 0 0 12px;
    color: inherit;
  }

  > svg {
    margin: 4px 10px 0 0;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      > svg {
        margin-top: 0;
      }
    `}
`;
