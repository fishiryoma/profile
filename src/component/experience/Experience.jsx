import styled from "styled-components";
import { MainContainer } from "../style/container";
import { H1, H3, H4, Text, Horizon } from "../style/title";
import { useState, useRef, useEffect, useMemo } from "react";

const WORK = [
  {
    duration: "2023-2024",
    company: "ALPHA Camp程式設計課程",
    position: "學員",
    description: "利用線上資源，Udemy等課程自學軟體前端技術。",
    img: "img/aclogo.png",
  },
  {
    duration: "2019-2023",
    company: "位速科技股份有限公司",
    position: "R&D Engineer",
    description:
      "參與有機太陽能電池研發工作。藉由英文文獻閱讀、實驗設計及數據分析每年提升電池效率2%。共發表6篇相關技術專利。",
    img: "img/wayslogo.png",
  },
];

const EDUCATION = [
  {
    duration: "2012-2014",
    school: "交通大學",
    department: "應用化學所",
    logo: "img/NCTUlogo.png",
  },
  {
    duration: "2008-2012",
    school: "中央大學",
    department: "理學院化學系",
    logo: "img/NCUlogo.png",
  },
];

const Dot = styled.div`
  background-color: #000;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  position: relative;
  font-weight: 700;
  &::after {
    position: absolute;
    top: -340%;
    right: -12rem;
    content: "${(props) => props.content}";
    width: 10rem;
    height: 2.5rem;
    background-color: #c0e3e7;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
  }
  &::before {
    position: absolute;
    top: -340%;
    content: "";
    border: 1.26rem solid;
    border-color: transparent #c0e3e7 transparent transparent;
  }
  @media screen and (min-width: 992px) {
    &::after {
      right: 0;
      left: -12rem;
      padding-left: 3rem;
    }
    &::before {
      left: -2rem;
      border-color: transparent transparent transparent #c0e3e7;
    }
  }
`;

const ExperienceBox = styled.div`
  border-left: 4px solid rgb(192, 227, 231, 0.6);
  padding: 2rem 0 4rem 3rem;
  @media screen and (min-width: 992px) {
    padding: 0 0 4rem 3rem;
  }
`;

const Wrap = styled.div`
  padding-left: 1rem;
  & :last-child ${ExperienceBox} {
    border-left: none;
  }
  @media screen and (min-width: 992px) {
    margin-left: 15rem;
    padding-left: 0;
  }
`;

export default function Experience() {
  const work = useRef(null);
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
    const currentRefValue = work.current;
    if (work.current) {
      obs.observe(work.current);
    }
    return () => {
      if (currentRefValue) {
        obs.unobserve(currentRefValue);
      }
    };
  }, [obs]);
  return (
    <MainContainer ref={work} animate={animate ? "true" : "false"}>
      <H1 id="work">work experience</H1>
      <Wrap>
        {WORK.map((item) => (
          <div key={item.company}>
            <Dot content={item.duration} />
            <ExperienceBox>
              <H4 style={{ fontSize: "2rem" }}>{item.position}</H4>
              <img
                src={item.img}
                style={{ height: "3rem", marginTop: "1rem" }}
              />
              <H3>{item.company}</H3>
              <Text>{item.description}</Text>
            </ExperienceBox>
          </div>
        ))}
      </Wrap>
      <Horizon />
      <H1 id="education">education</H1>
      <Wrap>
        {EDUCATION.map((item) => (
          <div key={item.school}>
            <Dot content={item.duration} />
            <ExperienceBox>
              <H4 style={{ fontSize: "2rem" }}>{item.school}</H4>
              <img
                src={item.logo}
                style={{ height: "4rem", margin: "1rem 0" }}
              />
              <Text>{item.department}</Text>
            </ExperienceBox>
          </div>
        ))}
      </Wrap>
    </MainContainer>
  );
}
