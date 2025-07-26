import React from 'react';
import styled from 'styled-components';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const FooterContainer = styled.footer`
  background: #1f2937;
  color: white;
  padding: 3rem 0 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    color: #9ca3af;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: #9ca3af;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #6366f1;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #9ca3af;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
`;

const BackToTop = styled.button`
  background: #6366f1;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #4f46e5;
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <h3>Kevin Mutai</h3>
            <p>
              Full Stack Developer passionate about creating innovative digital 
              solutions that make a difference. Let's build something amazing together!
            </p>
            <SocialLinks>
              <SocialLink><Github size={20} /></SocialLink>
              <SocialLink><Linkedin size={20} /></SocialLink>
              <SocialLink><Twitter size={20} /></SocialLink>
              <SocialLink><Mail size={20} /></SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <FooterLinks>
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Contact Info</h3>
            <FooterLinks>
              <li><a>kevinkiplangatmutai003@gmail.com</a></li>
              <li><a>+254 725674910</a></li>
              <li><a>Kericho, Kenya</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Get In Touch</a></li>
            </FooterLinks>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2024 Kevin Mutai. Made with <Heart size={16} fill="red" color="red" /> and lots of coffee.
          </Copyright>
          <BackToTop onClick={scrollToTop}>
            Back to Top
          </BackToTop>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;