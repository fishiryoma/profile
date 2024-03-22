import styled, { keyframes } from "styled-components";
import { H1, H3 } from "./style/title";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";

const CardContainer = styled.div`
  padding: 3rem 1rem;
  background-color: #c0e3e7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  min-width: 27rem;
  @media screen and (min-width: 992px) {
    margin-right: 2rem;
    box-shadow: -3px 3px 15px rgba(0, 0, 0, 0.3);
  }
  @media screen and (min-width: 1200px) {
    margin-right: 4rem;
  }
`;

const shiny = keyframes`
  0% {
        transform: scale(0) rotate(25deg);
        opacity: 0;
    }

    50% {
        transform: scale(1) rotate(25deg);
        opacity: 1;
    }

    100% {
        transform: scale(50) rotate(25deg);
        opacity: 0;
    }
`;

const Img = styled.img`
  width: 19.5rem;
  height: 19.5rem;
  border-radius: 50%;
  background-image: url("img/mylogo.jpg");
  background-size: cover;
  position: relative;
`;

export default function Card() {
  return (
    <CardContainer>
      <Img />
      <H1
        style={{
          fontSize: "2.4rem",
          margin: "1rem 0 0 0",
          letterSpacing: "2px",
        }}
      >
        wanyu huang
      </H1>
      <H3 style={{ fontWeight: 500, fontSize: "1.6rem", margin: 0 }}>
        Frontend Engineer
      </H3>
      <div style={{ fontSize: "1.6rem", display: "flex", gap: "1.5rem" }}>
        <a
          href="https://github.com/fishiryoma"
          target="_blank"
          style={{ color: "#000" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/%E7%90%AC%E7%91%9C-%E9%BB%83-860203112/"
          target="_blank"
          style={{ color: "#000" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://medium.com/@tessintaiwan"
          target="_blank"
          style={{ color: "#000" }}
        >
          <AiFillMediumCircle />
        </a>
      </div>
    </CardContainer>
  );
}
