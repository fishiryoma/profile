import { MainContainer } from "../style/container";
import { H1, H2, H3, H4, Horizon, Text } from "../style/title";
import styled from "styled-components";
import Language from "./Language";
import Skills from "./Skills";
import { useState, useRef, useEffect, useMemo } from "react";
import { GoGitBranch } from "react-icons/go";
import { BsFiletypeScss } from "react-icons/bs";
import { BsBootstrapFill } from "react-icons/bs";

const Container = styled.div``;

export default function AboutMe() {
  const me = useRef(null);
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
    const currentRefValue = me.current;
    if (me.current) {
      obs.observe(me.current);
    }
    return () => {
      if (currentRefValue) {
        obs.unobserve(currentRefValue);
      }
    };
  }, [obs]);
  return (
    <MainContainer ref={me} animate={animate ? "true" : "false"}>
      <Name />
      <Horizon />
      <Personal />
      <Horizon />
      <Skills />
      <OtherSkill />
    </MainContainer>
  );
}

function Name() {
  return (
    <Container>
      <H1 id="my">hello, I'm Wanyu!</H1>

      <Text>
        我是一個充滿學習熱誠的前端工程師。過去打滾在半導體及化學研發產業約莫6年，透過自學決心轉換跑道。我利用過去的工作經驗，邏輯性分析問題並解決問題，在學習的過程中發現許多樂趣，我認為開心的學習能夠帶來更好的工作績效及更佳的學習效果!
        讓我加入你的團隊吧!
      </Text>
    </Container>
  );
}

const PersonContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

function Personal() {
  return (
    <PersonContainer>
      <Information />
      <Language />
    </PersonContainer>
  );
}
const INFO = [
  {
    title: "full name",
    text: "黃琬瑜(WANYU HUANG)",
  },
  {
    title: "e-mail",
    text: "fishiryoma@gmail.com",
  },
  {
    title: "phone",
    text: "－",
  },
];

const UpperH4 = styled(H4)`
  text-transform: uppercase;
`;

function Information() {
  return (
    <div>
      <H2>personal information</H2>
      {INFO.map((item) => (
        <div key={item.title} style={{ marginBottom: "1.4rem" }}>
          <UpperH4>{item.title}</UpperH4>
          <Text>{item.text}</Text>
        </div>
      ))}
    </div>
  );
}

const otherSiklls = [
  { name: "BootStrap", link: "bootstrap.svg", svg: () => <BsBootstrapFill /> },
  { name: "SCSS", link: "scss.svg", svg: () => <BsFiletypeScss /> },
  { name: "Git版本控制", link: "git.svg", svg: () => <GoGitBranch /> },
];

function OtherSkill() {
  return (
    <div>
      <H2>other skills</H2>
      <div
        style={{
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        {otherSiklls.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "2rem", color: "#699599" }}>
              {item.svg()}
            </div>
            <H3 style={{ color: "#000" }}>{item.name}</H3>
          </div>
        ))}
      </div>
    </div>
  );
}
