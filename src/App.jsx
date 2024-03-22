import MainSection from "./component/MainSection";
import Card from "./component/Card";
import Nav from "./component/Nav";
import styled from "styled-components";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    padding: 0 7rem 0 3rem;
  }
`;

const NavContainer = styled.div`
  grid-row: 1/2;
  @media screen and (min-width: 992px) {
    width: 6rem;
  }
`;

const BgLeft = styled.div`
  @media screen and (min-width: 992px) {
    position: fixed;
    top: 25vh;
    left: -54vh;
    border-top: 30vh solid #e1e1e1;
    border-bottom: 30vh solid transparent;
    border-right: 60vh solid #e1e1e1;
    border-left: 60vh solid transparent;
    transform: skew(22deg) rotate(325deg);
    z-index: -1;
  }
`;

const BgRight = styled.div`
  @media screen and (min-width: 992px) {
    position: fixed;
    top: 0;
    right: 5.5vh;
    border: 25vh solid;
    border-color: #c0e3e7 #c0e3e7 transparent transparent;
    transform: skew(17deg);
    z-index: -1;
    &::after {
      position: absolute;
      content: "";
      top: -25vh;
      left: 23.8vh;
      bottom: -18vh;
      border: 25vh solid #c0e3e7;
      z-index: -1;
    }
  }
`;

const TopBtn = styled.a`
  width: 5rem;
  height: 5rem;
  background-color: #c0e3e7;
  border-radius: 50%;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: #000;
`;

function App() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <BgLeft />
      <BgRight />
      <TopBtn href="#">
        <MdOutlineKeyboardDoubleArrowUp />
      </TopBtn>
      <Container>
        <div>
          <Card />
        </div>
        <div>
          <MainSection />
        </div>
        <NavContainer>
          <Nav />
        </NavContainer>
      </Container>
    </div>
  );
}
export default App;
