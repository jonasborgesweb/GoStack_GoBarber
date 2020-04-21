import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #ff9000;
  border-radius: 10px;
  border: 0;
  padding: 18px 16px;
  width: 100%;
  color: #312e38;
  transition: 0.3s ease;
  font-weight: 500;
  margin-top: 16px;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${shade(0.2, '#ff9000')};
  }
`;
