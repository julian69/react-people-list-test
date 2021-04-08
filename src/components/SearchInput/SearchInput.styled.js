import styled from 'styled-components';
import Icon from 'components/Icon';
import TextField from 'components/Form/TextField';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-content: center;
`;

export const SearchInputField = styled(TextField)`
  border: 1px solid transparent;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 400;
  padding: 0;
  min-height: 100%;
  position: absolute;
  padding: 3px 0 0 40px;

  &::placeholder {
    color: var(--colors-lynch);
  }

  &:hover {
    border-color: var(--colors-input-border);
  }

  &:focus,
  &:active {
    border-color :var(--colors-input-border);
    box-shadow: inset 1px 2px 3px var(--colors-inner-shadow);
  }
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  left: 16px;
`;