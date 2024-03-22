import { MainContainer } from "../style/container";
import { H1, H4, Text } from "../style/title";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";
import { useState, useRef, useEffect, useMemo } from "react";
import styled from "styled-components";

const WrapPicture = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 480px) {
    justify-content: center;
    gap: 3rem;
  }
`;

const MyPicture = styled.img`
  width: 13rem;
  border-radius: 50%;
  border: 5px solid #c0e3e7;
`;

export default function HireMe() {
  const hire = useRef(null);
  const [animate, setAnimate] = useState(false);

  const obs = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      ),
    []
  );

  useEffect(() => {
    const currentRefValue = hire.current;
    if (hire.current) {
      obs.observe(hire.current);
    }
    return () => {
      if (currentRefValue) {
        obs.unobserve(currentRefValue);
      }
    };
  }, [obs]);
  return (
    <MainContainer id="hire" ref={hire} animate={animate ? "true" : "false"}>
      <H1>Hire me NOW!</H1>
      <Text>
        我喜歡嘗試突破，走出舒適圈，挑戰更多事物！經過一段時間的衝刺，我會停下來審視自己所追求的目標，在這個過程中我去了日本、加拿大打工旅遊，所有的經歷都是我成長的養分。我是一個思想活躍、有創造力的人！
      </Text>
      <WrapPicture>
        <MyPicture src="img/no1.png" />
        <MyPicture src="img/japan.jpg" />
        <MyPicture src="img/canada.jpg" />
      </WrapPicture>
      <H4
        style={{ margin: "2rem 0 ", textAlign: "center", fontStyle: "italic" }}
      >
        Feel Free to contact me
      </H4>
      <div
        style={{
          fontSize: "2rem",
          display: "flex",
          gap: "1.5rem",
          justifyContent: "center",
        }}
      >
        <a
          href="https://github.com/fishiryoma"
          target="_blank"
          style={{ color: "#699599" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/%E7%90%AC%E7%91%9C-%E9%BB%83-860203112/"
          target="_blank"
          style={{ color: "#699599" }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://medium.com/@tessintaiwan"
          target="_blank"
          style={{ color: "#699599" }}
        >
          <AiFillMediumCircle />
        </a>
      </div>
    </MainContainer>
  );
}
