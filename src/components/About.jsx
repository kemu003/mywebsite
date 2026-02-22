import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Download, Award, GraduationCap, Code2, BrainCircuit } from 'lucide-react';

// ============================
// 💅 Styled Components
// ============================
const AboutSection = styled.section`
  padding: 80px 0;
  background: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  color: #6b7280;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1f2937;
  }

  p {
    color: #6b7280;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 2rem 0;
`;

const SkillBadge = styled.span`
  background: #6366f1;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(99, 102, 241, 0.2);
`;

const DownloadButton = styled(motion.a)`
  background: #6366f1;
  color: white;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  &:hover {
    background: #4f46e5;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
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
  color: #111827;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 500;
`;

// ============================
// 🚀 Main Component
// ============================
const About = () => {
  const skills = [
    'Python', 'Django', 'React.js', 'Machine Learning', 
    'Pandas', 'SQL', 'Git', 'Data Analysis'
  ];

  const stats = [
    { icon: <GraduationCap size={32} />, number: '2025', label: 'LU Graduate' },
    { icon: <BrainCircuit size={32} />, number: '2', label: 'ML Deployments' },
    { icon: <Code2 size={32} />, number: '15+', label: 'Projects' },
    { icon: <Award size={32} />, number: '1', label: 'ICT Internship' }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
            A Computer Science graduate dedicated to building intelligent, data-driven solutions.
          </SectionSubtitle>
        </SectionHeader>

        <AboutContent>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AboutText>
              <h3>Hi, I'm Kevin Mutai</h3>
              <p>
                I am a 2025 Computer Science graduate from **Laikipia University**. My expertise lies at the intersection of **Software Engineering** and **Data Science**, where I build applications that are not only functional but also intelligent.
              </p>
              <p>
                I have a strong foundation in Python and Django for backend systems, paired with React for modern frontends. My highlight work includes deploying **Forex and Stock Market predictive models** using Machine Learning to simplify financial data for users.
              </p>
              
              <SkillsWrapper>
                {skills.map((skill, index) => (
                  <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
              </SkillsWrapper>
              
              <DownloadButton 
                href="/Kevin_Mutai_CV.pdf" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                View Resume
              </DownloadButton>
            </AboutText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard 
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <StatIcon>{stat.icon}</StatIcon>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </motion.div>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;