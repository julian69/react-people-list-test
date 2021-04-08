import styled from 'styled-components';
import Icon from 'components/Icon';

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const UserIcon = styled(Icon)`
  margin-right: 8px;
`;

