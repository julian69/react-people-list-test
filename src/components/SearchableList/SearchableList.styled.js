import styled from 'styled-components';
import { Card, CardHeader, CardBody } from 'components/Card';
import LoadingLogo from 'components/LoadingLogo';

export const CardStyled = styled(Card)`
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

export const CardHeaderStyled = styled(CardHeader)`
  padding: 16px 26px;
  border: none;
`;

export const CardBodyStyled = styled(CardBody)`
  padding-top: 0;

  @media (max-width: 768px) {
    padding: 0;
    overflow-x: scroll;
  }
`;

export const LoadingLogoStyled = styled(LoadingLogo)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;

  > svg {
    width: 47px;
    margin-bottom: 50px;
  }
`;