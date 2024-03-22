import styled, { keyframes, css } from "styled-components";

const slideInUp = keyframes`
  0% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const MainContainer = styled.div`
  background-color: #fff;
  padding: 4rem 1rem;
  opacity: 0;
  ${(props) =>
    props.animate === "true" &&
    css`
      animation: ${slideInUp} 0.8s ease-in-out both;
    `}

  @media screen and (min-width: 768px) {
    border: 1px solid #e1e1e1;
    padding: 2rem 2rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 3rem;
  }
`;
