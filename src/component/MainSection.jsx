import AboutMe from "./aboutMe/AboutMe";
import Portfolio from "./portfolio/Portfolio";
import Experience from "./experience/Experience";
import Blog from "./blog/Blog";
import HireMe from "./hireMe/HireMe";
import styled from "styled-components";
import ModalProvider from "../context/ModalContext";
import { BsX } from "react-icons/bs";
import { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { H1, H3, Text } from "./style/title";

const MainContainer = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export default function MainSection() {
  return (
    <MainContainer>
      <AboutMe />
      <ModalProvider>
        <Portfolio />
        <Modal />
      </ModalProvider>
      <Experience />
      <Blog />
      <HireMe />
    </MainContainer>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.75);
  z-index: 999;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50vh;
  transform: translateY(-50%);
  right: 2rem;
  left: 2rem;
  background-color: #fff;
  border-radius: 6px;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  overflow: auto;
  @media screen and (min-width: 480px) {
    right: 10%;
    left: 10%;
    max-width: 100rem;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 60fr 40fr;
  }
`;

const CloseBtn = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    top: 2rem;
    right: 2rem;
  }
`;
const DisplayImg = styled.img`
  width: 100%;
  /* max-width: 45rem; */
`;
const ImgShowBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ShowImg = styled.img`
  width: 32.5%;
  ${(props) =>
    props.isselected === "true" && "filter: contrast(30%) brightness(135%)"}
`;

const GitBtn = styled.a`
  width: 11rem;
  height: 3.5rem;
  border-radius: 6px;
  background-color: #c0e3e7;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 2rem auto 0 auto;
  &:hover {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

function Modal() {
  const [imgNumber, setImgNumber] = useState("picture1");
  const modalRef = useRef(null);
  const { modalShow, setModalShow, PROJECT, projectId } =
    useContext(ModalContext);

  const rendered = PROJECT.filter((item) => item.id === projectId);

  function handleClose() {
    setModalShow(false);
    document.body.classList.remove("overflow-hidden");
  }

  useEffect(() => {
    const currentValue = modalRef.current;
    if (modalRef.current) {
      modalRef.current.addEventListener("click", (e) => {
        if (e.target === modalRef.current) handleClose();
      });
    }
    return () => {
      if (currentValue) {
        currentValue.removeEventListener("click", (e) => {
          if (e.target === currentValue) handleClose();
        });
      }
    };
  });

  return (
    modalShow && (
      <>
        <ModalContainer ref={modalRef}>
          <CloseBtn
            onClick={() => {
              handleClose();
            }}
          >
            <BsX style={{ fontSize: "3rem" }} />
          </CloseBtn>
          <ModalBox className="scrollbar">
            <div>
              <DisplayImg src={rendered[0][imgNumber]} alt={rendered[0].alt} />
              <ImgShowBox>
                <ShowImg
                  src={rendered[0].picture1}
                  onClick={() => setImgNumber("picture1")}
                  isselected={imgNumber === "picture1" ? "true" : "false"}
                />
                <ShowImg
                  src={rendered[0].picture2}
                  onClick={() => setImgNumber("picture2")}
                  isselected={imgNumber === "picture2" ? "true" : "false"}
                />
                <ShowImg
                  src={rendered[0].picture3}
                  onClick={() => setImgNumber("picture3")}
                  isselected={imgNumber === "picture3" ? "true" : "false"}
                />
              </ImgShowBox>
            </div>
            <div>
              <H1>{rendered[0].name}</H1>
              <Text>{rendered[0].description}</Text>
              <GitBtn href={rendered[0].link} target="_blank">
                <H3 style={{ color: "#000" }}>GitHub</H3>
              </GitBtn>
            </div>
          </ModalBox>
        </ModalContainer>
      </>
    )
  );
}
