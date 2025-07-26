import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Download, Award, Users, Coffee } from 'lucide-react';

const AboutSection = styled.section`
  padding: 80px 0;
  background: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1f2937;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  p {
    color: #6b7280;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Skill = styled.span`
  background: #6366f1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const DownloadButton = styled.button`
  background: #6366f1;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #4f46e5;
    transform: translateY(-2px);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatIcon = styled.div`
  color: #6366f1;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const StatNumber = styled.h4`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: #6b7280;
  font-weight: 500;
`;

const About = () => {
  const skills = [
    'React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 
    'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'
  ];

  const stats = [
    { icon: <Award size={32} />, number: '50+', label: 'Projects Completed' },
    { icon: <Users size={32} />, number: '30+', label: 'Happy Clients' },
    { icon: <Coffee size={32} />, number: '1000+', label: 'Cups of Coffee' },
    { icon: <Award size={32} />, number: '2+', label: 'Years Experience' }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
            Passionate developer with a love for creating innovative solutions
          </SectionSubtitle>
        </motion.div>

        <AboutContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutText>
              <h3>Hi there! I'm Kevin Mutai</h3>
              <p>
                I'm a passionate Full Stack Developer with over 3 years of experience 
                creating digital solutions that make a difference. I specialize in 
                building scalable web applications using modern technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or enjoying a good cup of coffee 
                while planning my next big project.
              </p>
              
              <Skills>
                {skills.map((skill, index) => (
                  <Skill key={index}>{skill}</Skill>
                ))}
              </Skills>
              
              <DownloadButton>
                <Download size={20} />
                Download Resume
              </DownloadButton>
            </AboutText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <StatsContainer>
              {stats.map((stat, index) => (
                <StatCard key={index}>
                  <StatIcon>{stat.icon}</StatIcon>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsContainer>
          </motion.div>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;