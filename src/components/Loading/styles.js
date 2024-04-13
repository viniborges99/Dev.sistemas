
import styled, { keyframes } from 'styled-components';
import { BiLoaderAlt } from 'react-icons/bi';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(BiLoaderAlt)`
  font-size: 2rem;
  margin: 200px auto 0;
  animation: ${spin} 1s linear infinite;
  width: 100%;
  color: black;
`;
