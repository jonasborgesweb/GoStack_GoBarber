import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  font-size: 18px;
  font-weight: 400;
  background-color: #232129;
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  transition: 0.3s ease;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
      box-shadow: 0 3px 9px rgba(0, 0, 0, 0.3);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    border: 0;

    background-color: transparent;
    box-sizing: border-box;
    color: #f4ede8;
    transition: 0.2s ease;
    padding: 18px 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
