import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  min-height: 44px;
  padding: 12px 24px;
  border: none;
  border-radius: 24px;
  transition: all .3s;

  &:hover:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export const ButtonPrimaryStyled = styled(Button)`
  background: var(--colors-irisBlue);
  color: var(--colors-blank);

  &:hover {
    background: var(--colors-irisBlue-dark);
  }

  &:focus {
    border-color: transparent;
    box-shadow: 0px 0px 0px 3px #B7B8EB;
    outline: none;
  }
`;

export const ButtonSecondaryStyled = styled(Button)`
  background: var(--colors-blank);
  color: var(--colors-irisBlue);

  &:hover {
    background: var(--colors-secondary-background);
  }

  &:focus {
    border-color: transparent;
    box-shadow: 0px 0px 0px 3px var(--colors-secondary-shadow);
    outline: none;
  }
`;
