import styled from 'styled-components';
import { TextLight } from 'components/Text';

export const LabelStyled = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 255px;
  height: 40px;
  padding: 32px 20px;
  border-radius: 12px;
  border: 1.5px solid #B7B8EB;
  transition: all .3s;

  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  &:hover {
    cursor: pointer;
    background: var(--colors-linkWater);
  }

  &:focus-within {
    background: var(--colors-linkWater);
    box-shadow: 0px 0px 0px 2px var(--colors-irisBlue);
  }

  &.active{
    background: var(--colors-linkWater);
    border-radius: 12px;
  }
`;

export const SpanStyled = styled.span`
  display: block;
`;


export const InputStyled = styled.input`
  opacity: 0;

  &:hover {
    cursor: pointer;
  }

  + div {
    display: flex;
    width: 14px;
    height: 14px;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--colors-irisBlue);
    border-radius: 50%;
    box-sizing: border-box;
  }

  &:checked {
    + div {
      &::before {
        content: '';
        background-color: var(--colors-irisBlue);
        padding: 3px;
        border-radius: 50%;
      }
    }
  }
`;

export const HelperStyled = styled(TextLight)`
  ${({ theme }) => theme.typography.bodyCaption};
`;

