import styled from 'styled-components';
import Text from 'components/Text';

export const Container = styled.div`
  padding: 32px 0;

  > label:last-child {
    margin-left: 16px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > label:last-child {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const TextStyled = styled(Text)`
  padding-bottom: 16px;
  ${({ theme }) => theme.typography.bodyLead};
`;