import styled from "styled-components";
import { MainContainer } from "../style/container";
import { H1 } from "../style/title";
import { useState, useRef, useEffect, useMemo, useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export default function Portfolio() {
  const portfolio = useRef(null);
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
    const currentRefValue = portfolio.current;
    if (portfolio.current) {
      obs.observe(portfolio.current);
    }
    return () => {
      if (currentRefValue) {
        obs.unobserve(currentRefValue);
      }
    };
  }, [obs]);

  return (
    <MainContainer
      id="project"
      ref={portfolio}
      animate={animate ? "true" : "false"}
    >
      <H1>my project</H1>
      <ProjectCard />
    </MainContainer>
  );
}

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ProjectImg = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const Bg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const HoverBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HoverText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-align: center;
  color: #fff;
  transform: translateY(-2rem);
  transition: transform 0.7s;
  ${Bg}:hover & {
    transform: translateY(-1rem);
  }
`;
const Button = styled.button`
  background-color: #c0e3e7;
  border-radius: 20px;
  width: 13rem;
  height: 3.5rem;
  transform: translateY(2rem);
  transition: transform 0.7s;
  ${Bg}:hover & {
    transform: translateY(1rem);
  }
`;

function ProjectCard() {
  const { PROJECT, setModalShow, setProjectId } = useContext(ModalContext);
  return (
    <ProjectContainer>
      {PROJECT.map((item) => (
        <div key={item.name} style={{ position: "relative" }}>
          <ProjectImg src={item.picture1} alt={item.alt} />
          <Bg>
            <HoverBox>
              <HoverText>
                <div>{item.name}</div>
                <div style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                  {item.subtitle}
                </div>
              </HoverText>
              <Button
                onClick={() => {
                  setModalShow(true);
                  setProjectId(item.id);
                  document.body.classList.add("overflow-hidden");
                }}
              >
                <p
                  style={{
                    color: "#000",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    letterSpacing: "1px",
                  }}
                >
                  View More
                </p>
              </Button>
            </HoverBox>
          </Bg>
        </div>
      ))}
    </ProjectContainer>
  );
}
