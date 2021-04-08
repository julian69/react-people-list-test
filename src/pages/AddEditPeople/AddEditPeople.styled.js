import styled from 'styled-components';
import { CardFooter, CardHeader } from 'components/Card';

export const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

export const CustomCardHeader = styled(CardHeader)`
  > p {
    margin-bottom: 0;
  }
`;

export const CustomCardFooter = styled(CardFooter)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  > button {
    min-width: 182px;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      min-width: 100px;
    }

    &:first-child {
      background: #fff;
      color: #624DE3;
      border: 2px solid #D0CAF7;
      margin-right: 16px;

      &:hover {
        background: #EFEDFC;
      }

      &:focus {
        border-color: transparent;
        box-shadow: 0px 0px 0px 3px #B7B8EB;
        outline: none;
      }
    }
  }
`;
