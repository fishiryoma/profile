import styled from "styled-components";
import { H1, Text } from "../style/title";
import { MainContainer } from "../style/container";
import { useState, useRef, useEffect, useMemo } from "react";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Button = styled.button`
  background-color: #c0e3e7;
  border-radius: 20px;
  width: 22rem;
  height: 4.5rem;
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: -1px 3px 5px 0px rgba(0, 0, 0, 0.22);
  }
`;

export default function Blog() {
  const blog = useRef(null);
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
    const currentRefValue = blog.current;
    if (blog.current) {
      obs.observe(blog.current);
    }
    return () => {
      if (currentRefValue) {
        obs.unobserve(currentRefValue);
      }
    };
  }, [obs]);
  return (
    <MainContainer id="blog" ref={blog} animate={animate ? "true" : "false"}>
      <H1>blog</H1>
      <BlogContainer>
        <Text style={{ width: "70%", margin: "0 auto" }}>
          將學習的過程記錄在部落格。自學的路上有太多要學跟想學的東西，同時作為英文的練習，將心得筆記整理在Medium
          。
        </Text>
        <a
          href="https://medium.com/@tessintaiwan"
          target="_blank"
          style={{ color: "#000" }}
        >
          <Button>
            <p
              style={{
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              Check out my Blog
            </p>
          </Button>
        </a>
      </BlogContainer>
    </MainContainer>
  );
}
