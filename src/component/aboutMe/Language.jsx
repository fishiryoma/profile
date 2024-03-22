import styled, { keyframes, css } from "styled-components";
import { H2, H3, Text } from "../style/title";
import { useState, useRef, useEffect, useMemo } from "react";

const SCORE = [
  { title: "native", lan: "Chinese", score: 10, note: "" },
  { title: "medium", lan: "English", score: 7, note: "(TOEIC:795)" },
  { title: "fluent", lan: "Japanese", score: 8, note: "(N1)" },
];

const LanguageContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media screen and (min-width: 992px) {
    flex-direction: column;
    align-items: start;
  }
`;

export default function Language() {
  return (
    <div>
      <H2>language</H2>
      {SCORE.map((item) => {
        return (
          <div key={item.lan}>
            <H3 style={{ color: "#000" }}>{item.lan}</H3>
            <LanguageContainer>
              {DotArray(item.score, item.lan)}
              <div style={{ display: "flex", alignItems: "center" }}>
                <Text style={{ fontSize: "1.2rem" }}>{item.title}</Text>
                <Text style={{ fontSize: "1rem" }}>{item.note}</Text>
              </div>
            </LanguageContainer>
          </div>
        );
      })}
    </div>
  );
}

const DotContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const grow = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform:scale(1);
  }
`;

const Dot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #c0e3e7;
  border-radius: 50%;
  ${(props) =>
    props.animate === "true" &&
    css`
      animation: ${grow} 0.5s linear;
    `}
`;

const Outline = styled(Dot)`
  background-color: transparent;
  border: 1px solid #c0e3e7;
`;

function DotArray(number, key) {
  const language = useRef(null);
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
    const currentRefValue = language.current;
    if (language.current) {
      obs.observe(language.current);
    }
    return () => {
      if (currentRefValue) {
        obs.unobserve(currentRefValue);
      }
    };
  }, [obs]);

  const dots = [];
  const outlineCount = 10 - number;
  for (let i = 0; i < number; i++) {
    dots.push(
      <Dot
        key={key + "dot" + i}
        ref={language}
        animate={animate ? "true" : "false"}
      />
    );
  }
  for (let i = 0; i < outlineCount; i++) {
    dots.push(<Outline key={key + "outline" + i} />);
  }
  return <DotContainer>{dots}</DotContainer>;
}
