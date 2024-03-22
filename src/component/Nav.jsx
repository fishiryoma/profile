import styled from "styled-components";
import { PiBagFill } from "react-icons/pi";
import { IoMdBusiness } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { AiFillMediumCircle } from "react-icons/ai";
import { PiHandshakeFill } from "react-icons/pi";

const NavContainer = styled.div`
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 3.4rem;
  padding: 1rem 0;
  @media screen and (min-width: 992px) {
    flex-direction: column;
    background-color: transparent;
    margin-left: 2rem;
    gap: 4rem;
    font-size: 2.8rem;
    position: fixed;
    top: 10rem;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (min-width: 992px) {
    &:hover::before {
      position: absolute;
      content: ${(props) => `"${props.content}"`};
      background-color: #ffffff;
      width: 12rem;
      padding: 0.6rem 0;
      left: -14.7rem;
      font-size: 1.6rem;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
      opacity: 0.9;
      color: #000;
      letter-spacing: 1px;
    }
    &:hover::after {
      position: absolute;
      content: "";
      left: -3.7rem;
      background-color: #ffffff;
      width: 1.2rem;
      height: 1.2rem;
      transform: rotate(45deg);
    }
  }
  @media screen and (min-width: 1300px) {
    &:hover::before {
      left: 3.7rem;
    }
    &:hover::after {
      left: 3.5rem;
    }
  }
`;

const LinkImg = styled(Link)`
  @media screen and (min-width: 992px) {
    &:hover::before {
      left: -14rem;
    }
    &:hover::after {
      left: -3rem;
    }
  }
  @media screen and (min-width: 1500px) {
    &:hover::before {
      left: 4.7rem;
    }
    &:hover::after {
      left: 4.5rem;
    }
  }
`;

export default function Nav() {
  return (
    <NavContainer>
      <LinkImg href="#my" content="About Me">
        <img
          src="img/mylogo.jpg"
          alt="porfile"
          style={{
            height: "4rem",
            width: "4rem",
            borderRadius: "50%",
            filter: "contrast(45%) brightness(127%)",
          }}
        />
      </LinkImg>
      <Link href="#project" content="Project">
        <GrProjects style={{ color: "#000", fontSize: "2.6rem" }} />
      </Link>
      <Link href="#work" content="Work">
        <PiBagFill style={{ color: "#000" }} />
      </Link>
      <Link href="#education" content="Education">
        <IoMdBusiness style={{ color: "#000" }} />
      </Link>
      <Link href="#blog" content="Blog">
        <AiFillMediumCircle style={{ color: "#000" }} />
      </Link>
      <Link href="#hire" content="Hire">
        <PiHandshakeFill style={{ color: "#000" }} />
      </Link>
    </NavContainer>
  );
}
