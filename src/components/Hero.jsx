import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

/* ================= STYLES ================= */

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  z-index: 2;
`;

const Greeting = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TypewriterContainer = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  min-height: 60px;
  display: flex;
  align-items: center;
  line-height: 1.6;
`;

const TypewriterText = styled.span`
  border-right: 2px solid white;
  padding-right: 4px;
  animation: blink 1s infinite;

  @keyframes blink {
    0%,
    50% {
      border-color: white;
    }
    51%,
    100% {
      border-color: transparent;
    }
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
`;

const PrimaryButton = styled(Button)`
  background: white;
  color: #6366f1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background: white;
    color: #6366f1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  cursor: pointer;
`;

/* ================= COMPONENT ================= */

const Hero = () => {
  const fullText =
    "Full Stack Developer helping businesses build amazing digital experiences with modern web technologies and creative solutions.";

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 30 : 50;
    const pauseAfterTyping = 1500;
    const pauseAfterDeleting = 500;

    let timer;

    if (!deleting && index < fullText.length) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    } else if (!deleting && index === fullText.length) {
      timer = setTimeout(() => setDeleting(true), pauseAfterTyping);
    } else if (deleting && index > 0) {
      timer = setTimeout(() => {
        setText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      }, typingSpeed);
    } else if (deleting && index === 0) {
      timer = setTimeout(() => setDeleting(false), pauseAfterDeleting);
    }

    return () => clearTimeout(timer);
  }, [index, deleting, fullText]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HeroSection id="home">
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TextContent>
            <Greeting>Hello, I'm</Greeting>
            <Title>Kevin Mutai</Title>

            <TypewriterContainer>
              <TypewriterText>{text}</TypewriterText>
            </TypewriterContainer>

            <CTAButtons>
              <PrimaryButton onClick={() => scrollTo("portfolio")}>
                View My Work
              </PrimaryButton>
              <SecondaryButton onClick={() => scrollTo("contact")}>
                Hire Me
              </SecondaryButton>
            </CTAButtons>

            <SocialLinks>
              <SocialLink href="#" aria-label="GitHub">
                <Github size={24} />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <Linkedin size={24} />
              </SocialLink>
              <SocialLink href="#" aria-label="Email">
                <Mail size={24} />
              </SocialLink>
            </SocialLinks>
          </TextContent>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ImageContainer>
            <ProfileImage
              src="/pic.jpg"
              alt="Kevin Mutai - Full Stack Developer"
            />
          </ImageContainer>
        </motion.div>
      </HeroContent>

      <ScrollIndicator onClick={() => scrollTo("about")}>
        <span>Scroll Down</span>
        <ArrowDown size={20} />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
