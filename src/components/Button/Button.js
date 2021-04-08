import { ButtonPrimaryStyled, ButtonSecondaryStyled } from './Button.styled';

export default function Button({ children, ...props }) {
  return (
    !props.type || props.type === 'primary'
    ?  <ButtonPrimaryStyled type="button" {...props}>
        {children}
      </ButtonPrimaryStyled>
    : <ButtonSecondaryStyled type="button" {...props}>
      {children}
    </ButtonSecondaryStyled>
  );
}
