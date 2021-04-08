import styled from 'styled-components';

export const Wrapper = styled.div`
  fill: ${props => props.fill};
  width: ${props => props.width};
  height: ${props => props.height};
  stroke: ${props => props.stroke};
  stroke-linecap: ${props => props.linecap};
  stroke-linejoin: ${props => props.linejoin};
  stroke-width: ${props => props.strokeWidth};
`;