import styled, { keyframes, css } from "styled-components";
import { H2, H3, Text } from "../style/title";
import SkillPieChart from "./SkillPieChart";
import { useState, useRef, useEffect, useMemo } from "react";

const profession = [
  { title: "Javascript", score: 80 },
  { title: "HTML&CSS", score: 75 },
  { title: "React", score: 85 },
];
const addition = [
  { title: "Tailwind", score: 80 },
  { title: "RWD", score: 85 },
  { title: "API", score: 75 },
];

const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CircleContainer = styled(FlexBetween)`
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const bargrow = keyframes`
  0% {
    transform: scaleX(0); 
   background-color: #c0e3e7
  }
  100% {
    transform: scaleX(1); 
     background-color: #c0e3e7
  }
  `;

const Bar = styled.div`
  background-color: #ededed;
  height: 0.5rem;
  width: 100%;
  border-radius: 20px;
  position: relative;
  &::after {
    border-radius: 20px;
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: ${(props) => props.$propotion};
    transform-origin: left;
    ${(props) =>
      props.animate === "true" &&
      css`
        animation: ${bargrow} 2s linear both;
      `};
  }
`;

const ScoreText = styled(Text)`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const SkillContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default function Skills() {
  const bar = useRef(null);
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
    const currentRefValue = bar.current;
    if (bar.current) {
      obs.observe(bar.current);
    }
    return () => {
      if (currentRefValue) {
        obs.unobserve(currentRefValue);
      }
    };
  }, [obs]);

  return (
    <SkillContainer>
      <div>
        <H2>professional skills</H2>
        {profession.map((item) => (
          <div key={item.title} style={{ width: "95%" }}>
            <FlexBetween>
              <H3 style={{ color: "#000" }}>{item.title}</H3>
              <Text style={{ fontSize: "1.4rem" }}>{`${item.score}%`}</Text>
            </FlexBetween>
            <Bar
              $propotion={`${100 - item.score}%`}
              ref={bar}
              animate={animate ? "true" : "false"}
            />
          </div>
        ))}
      </div>
      <div>
        <H2>additional skills</H2>
        <CircleContainer>
          {addition.map((item) => (
            <FlexCol key={item.title}>
              <ScoreText>{`${item.score}%`}</ScoreText>
              <SkillPieChart angle={item.score} />
              <H3 style={{ margin: "0.8rem 0 1.5rem 0", color: "#000" }}>
                {item.title}
              </H3>
            </FlexCol>
          ))}
        </CircleContainer>
      </div>
    </SkillContainer>
  );
}
