import styled from 'styled-components';
import CheckboxButton from 'components/CheckboxButton';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;

  .list-filters__checkbox-left {
    margin-right: 0 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  width: 100%;
  display: flex;
  align-content: center;

  &:first-child {
    max-width: 205px;
    margin-bottom: 16px;
    justify-content: start;

    @media (max-width: 768px) {
      max-width: 100%;
      justify-content: center;
    }
  }

  &:last-child {
    justify-content: flex-end;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

export const CheckboxButtonLeft = styled(CheckboxButton)`
  margin: 0 16px;
`;
