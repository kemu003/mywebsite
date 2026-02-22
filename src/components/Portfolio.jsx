import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = styled.section`
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
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? '#6366f1' : '#e5e7eb'};
  background: ${props => props.active ? '#6366f1' : 'white'};
  color: ${props => props.active ? 'white' : '#6b7280'};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #6366f1;
    color: ${props => props.active ? 'white' : '#6366f1'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
`;

const ProjectDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: #e0e7ff;
  color: #6366f1;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #4f46e5;
  }
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Stock Price Predictor (ML)',
      description: 'An end-to-end Machine Learning application that forecasts stock market trends using Linear Regression and real-time Yahoo Finance data.',
      image: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Streamlit', 'Scikit-Learn', 'Plotly'],
      category: 'Data Science & ML',
      github: 'https://github.com/kemu003',
      live: 'https://stock-prediction-ml-kevinmutai.streamlit.app/'
    },
    {
      id: 2,
      title: 'Forex Price Predictor',
      description: 'A specialized predictive model designed to analyze and forecast currency exchange rates for international markets.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Pandas', 'Streamlit', 'ML'],
      category: 'Data Science & ML',
      github: 'https://github.com/kemu003',
      live: 'https://forex-predictorke.streamlit.app/'
    },
    {
      id: 3,
      title: 'Rapstar Investment Platform',
      description: 'A modern, responsive frontend for an investment portal, optimized for cross-device performance and user interaction.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Styled-Components', 'JavaScript'],
      category: 'Web Development',
      github: 'https://github.com/kemu003',
      live: 'https://rapstarinvestment.com'
    },
    {
      id: 4,
      title: 'ICT Infrastructure Management',
      description: 'Supported the digitization and technical maintenance of government systems during my tenure at Bomet County.',
      image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Hardware Diagnostics', 'Networking', 'System Integration'],
      category: 'ICT Support',
      github: '#',
      live: '#'
    }
  ];

  const categories = ['All', 'Web Development', 'Data Science & ML', 'ICT Support'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>My Work</SectionTitle>
          <SectionSubtitle>
            Bridging the gap between Software Engineering and Data Science through practical, high-impact projects.
          </SectionSubtitle>
        </motion.div>

        <FilterButtons>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTech>
                    {project.tech.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </ProjectTech>
                  <ProjectLinks>
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </ProjectLink>
                    <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Live Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsGrid>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;