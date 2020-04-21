import styled from 'styled-components';

export const Container = styled.div`
  font-size: 18px;
  font-weight: 400;
  background-color: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 18px 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  input {
    flex: 1;
    border: 0;

    background-color: transparent;
    box-sizing: border-box;
    color: #f4ede8;
    transition: 0.2s ease;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
