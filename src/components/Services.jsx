import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  ExternalLink, Github, Code, Database, 
  Zap, Globe, Terminal, BarChart3 
} from 'lucide-react';

// ============================
// 💅 Styled Components
// ============================
const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
  color: #1f2937;
  background: #f8fafc;
`;

const Section = styled.section`
  padding: 100px 0;
  background: ${props => props.bg || 'transparent'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const TitleArea = styled(motion.div)`
  text-align: center;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
`;

const Subtitle = styled.p`
  color: #6b7280;
  max-width: 600px;
  margin: 10px auto;
`;

// --- Services Grid ---
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  &:hover {
    border-color: #6366f1;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  color: #6366f1;
  margin-bottom: 1.5rem;
`;

// --- Portfolio Grid ---
const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  border: 2px solid ${props => props.active ? '#6366f1' : '#e5e7eb'};
  background: ${props => props.active ? '#6366f1' : 'white'};
  color: ${props => props.active ? 'white' : '#6b7280'};
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const TechTag = styled.span`
  background: #eef2ff;
  color: #4f46e5;
  padding: 4px 12px;
  border-radius: 10px;
  font-size: 0.75rem;
  margin-right: 5px;
  display: inline-block;
  margin-top: 5px;
`;

// ============================
// 🚀 Main Component
// ============================
const KevinPortfolio = () => {
  const [filter, setFilter] = useState('All');

  const myServices = [
    {
      title: 'ML & Predictive Modeling',
      icon: <Zap size={40} />,
      desc: 'Developing time-series forecasting models for financial markets using Scikit-learn.',
      points: ['Stock/Forex Prediction', 'Linear Regression', 'Data Analysis']
    },
    {
      title: 'Full Stack Development',
      icon: <Globe size={40} />,
      desc: 'Building responsive web applications with React.js and Django backends.',
      points: ['RESTful APIs', 'Responsive UI', 'State Management']
    },
    {
      title: 'Data Engineering',
      icon: <Database size={40} />,
      desc: 'Creating efficient data pipelines and managing SQL/NoSQL databases.',
      points: ['Pandas/NumPy', 'MySQL & SQLite', 'Data Cleaning']
    }
  ];

  const myProjects = [
    {
      id: 1,
      title: 'Stock Price Predictor',
      category: 'ML/Python',
      image: 'https://images.unsplash.com/photo-1611974717482-58f0003d1ce0?w=800',
      desc: 'Deployed ML model predicting next-day close prices using Yahoo Finance data.',
      tech: ['Python', 'Streamlit', 'Scikit-Learn'],
      live: 'https://stock-prediction-ml-kevinmutai.streamlit.app/',
      github: 'https://github.com/kemu003'
    },
    {
      id: 2,
      title: 'Forex Price Predictor',
      category: 'ML/Python',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800',
      desc: 'Specialized tool for analyzing and forecasting global currency exchange rates.',
      tech: ['Python', 'Pandas', 'Plotly'],
      live: 'https://forex-predictorke.streamlit.app/',
      github: 'https://github.com/kemu003'
    },
    {
      id: 3,
      title: 'Rapstar Investment UI',
      category: 'Web Dev',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      desc: 'Collaborative frontend development for a modern investment portal.',
      tech: ['React.js', 'JavaScript', 'CSS'],
      live: 'https://rapstarinvestment.com',
      github: 'https://github.com/kemu003'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? myProjects 
    : myProjects.filter(p => p.category === filter);

  return (
    <AppContainer>
      {/* SERVICES SECTION */}
      <Section bg="white">
        <Container>
          <TitleArea initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <SectionTitle>Technical Expertise</SectionTitle>
            <Subtitle>Specialized solutions in Software Engineering and Data Science</Subtitle>
          </TitleArea>
          
          
          
          <Grid>
            {myServices.map((s, idx) => (
              <ServiceCard key={idx} whileHover={{ y: -5 }}>
                <IconWrapper>{s.icon}</IconWrapper>
                <h3 style={{ marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1rem' }}>{s.desc}</p>
                <ul style={{ padding: 0, listStyle: 'none', textAlign: 'left' }}>
                  {s.points.map(p => <li key={p} style={{ fontSize: '0.85rem' }}>✅ {p}</li>)}
                </ul>
              </ServiceCard>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* PORTFOLIO SECTION */}
      <Section id="portfolio" bg="#f1f5f9">
        <Container>
          <TitleArea initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <SectionTitle>Featured Projects</SectionTitle>
            <Subtitle>Practical applications of Machine Learning and Web Technologies</Subtitle>
          </TitleArea>

          <FilterButtons>
            {['All', 'ML/Python', 'Web Dev'].map(cat => (
              <FilterButton 
                key={cat} 
                active={filter === cat} 
                onClick={() => setFilter(cat)}
              >
                {cat}
              </FilterButton>
            ))}
          </FilterButtons>

          <Grid>
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} layout>
                <ProjectImage src={p.image} alt={p.title} />
                <div style={{ padding: '1.5rem' }}>
                  <h4>{p.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: '10px 0' }}>{p.desc}</p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    {p.tech.map(t => <TechTag key={t}>{t}</TechTag>)}
                  </div>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <a href={p.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#4f46e5', textDecoration: 'none', fontWeight: 'bold' }}>
                      <Github size={16} /> Code
                    </a>
                    <a href={p.live} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#4f46e5', textDecoration: 'none', fontWeight: 'bold' }}>
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </ProjectCard>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px', background: '#0f172a', color: 'white' }}>
        <p>Built with React & Framer Motion by Kevin Kiplangat Mutai</p>
        <p style={{ opacity: 0.6, fontSize: '0.8rem' }}>CS Graduate | Laikipia University 2025</p>
      </footer>
    </AppContainer>
  );
};

export default KevinPortfolio;