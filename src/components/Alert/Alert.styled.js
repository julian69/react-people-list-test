import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 8px 22px;
  align-items: center;
  border: 1.5px solid rgba(255, 74, 90, 0.45);
  background: linear-gradient(0deg, rgba(255, 75, 85, 0.05), rgba(255, 75, 85, 0.05)), var(--colors-blank);

  > div {
    margin-right: 16px;
  }
`;
