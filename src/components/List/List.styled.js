import styled from 'styled-components';

export const Button = styled.button`
  padding: 0;
  border: none;
  float: right;
  font-size: 1rem;
  font-wight: 500;
  margin-right: 15px;
  background: transparent;
  color: var(--colors-irisBlue);

  &:hover {
    cursor: pointer;
    color: var(--colors-irisBlue-dark);
  }
`;

