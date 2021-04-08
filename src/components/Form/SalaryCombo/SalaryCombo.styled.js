import styled from 'styled-components';

export const SalaryComboField = styled.div`
  display: flex;
  margin-top: 32px;

  > label:first-child {
    flex: 0 1 calc(85%);
    margin-right: 0;
  }

  > label:last-child {
    flex: 0 1 calc(15%);
    margin-top: 19px;

    @media (max-width: 768px) {
      flex: 0 1 calc(27%);
    }
  }
`;