import React from 'react';
import styled from 'styled-components';
import { Heart, Github, Linkedin, Mail, ArrowUp, MapPin, Phone } from 'lucide-react';

// ============================
// 💅 Styled Components
// ============================
const FooterContainer = styled.footer`
  background: #0f172a; /* Premium Dark Navy */
  color: #f8fafc;
  padding: 4rem 0 1.5rem;
  border-top: 1px solid #1e293b;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }
`;

const BrandSection = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
    background: linear-gradient(to right, #818cf8, #6366f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    color: #9ca3af;
    line-height: 1.6;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    max-width: 400px;
  }
`;

const LinksSection = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #fff;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 0.75rem;
  }
  a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      color: #818cf8;
      padding-left: 5px;
    }
  }
`;

const ContactSection = styled(LinksSection)`
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #9ca3af;
    margin-bottom: 1rem;
    font-size: 0.95rem;

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

const SocialGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  background: #1e293b;
  color: #9ca3af;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #6366f1;
    color: white;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #1e293b;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Copyright = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const ScrollTopBtn = styled.button`
  background: #1e293b;
  color: #fff;
  border: 1px solid #334155;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #6366f1;
    border-color: #6366f1;
  }
`;

// ============================
// 🚀 Footer Component
// ============================
const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          {/* Brand & Bio */}
          <BrandSection>
            <h3>Kevin Kiplangat Mutai</h3>
            <p>
              CS Graduate from Laikipia University. Focused on building high-performance 
              Machine Learning models and Full-Stack applications for the financial sector.
            </p>
            <SocialGroup>
              <SocialIcon 
                href="https://www.linkedin.com/in/kevin-kiplangat-mutai-583172367/" 
                target="_blank" 
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </SocialIcon>
              <SocialIcon 
                href="https://github.com/kemu003" 
                target="_blank" 
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </SocialIcon>
              <SocialIcon 
                href="mailto:kevinkiplangatmutai003@gmail.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </SocialIcon>
            </SocialGroup>
          </BrandSection>

          {/* Sitemap Links */}
          <LinksSection>
            <h4>Sitemap</h4>
            <ul>
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')}>About Me</a></li>
              <li><a onClick={() => scrollToSection('portfolio')}>Projects</a></li>
              <li><a onClick={() => scrollToSection('services')}>Services</a></li>
            </ul>
          </LinksSection>

          {/* Contact Details */}
          <ContactSection>
            <h4>Contact Info</h4>
            <div className="contact-item">
              <Mail size={18} color="#6366f1" />
              <span>kevinkiplangatmutai003@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone size={18} color="#6366f1" />
              <span>+254 725 674910</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} color="#6366f1" />
              <span>Kericho / Nairobi, Kenya</span>
            </div>
          </ContactSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {currentYear} Kevin Mutai. Built with <Heart size={14} fill="#ef4444" color="#ef4444" /> and React.
          </Copyright>
          <ScrollTopBtn onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ArrowUp size={16} /> Back to Top
          </ScrollTopBtn>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;