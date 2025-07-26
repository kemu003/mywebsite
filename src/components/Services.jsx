import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Palette, Zap } from 'lucide-react';

const ServicesSection = styled.section`
  padding: 80px 0;
  background: white;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #6366f1;
  }
`;

const ServiceIcon = styled.div`
  color: #6366f1;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
`;

const ServiceDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  text-align: left;
  
  li {
    color: #6b7280;
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;
    
    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #10b981;
      font-weight: bold;
    }
  }
`;

const Services = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: [
        'Responsive Design',
        'Modern Frameworks',
        'Performance Optimization',
        'SEO Friendly'
      ]
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps that work seamlessly on iOS and Android.',
      features: [
        'React Native',
        'Cross-platform',
        'Native Performance',
        'App Store Deployment'
      ]
    },
    {
      icon: <Database size={48} />,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with robust APIs and database design.',
      features: [
        'RESTful APIs',
        'Database Design',
        'Cloud Integration',
        'Security Implementation'
      ]
    },
    {
      icon: <Globe size={48} />,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from concept to deployment and maintenance.',
      features: [
        'Complete Solutions',
        'DevOps Integration',
        'Maintenance & Support',
        'Scalable Architecture'
      ]
    },
    {
      icon: <Palette size={48} />,
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging and intuitive experiences.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Design Systems'
      ]
    },
    {
      icon: <Zap size={48} />,
      title: 'Performance Optimization',
      description: 'Speed up your applications and improve user experience significantly.',
      features: [
        'Code Optimization',
        'Caching Strategies',
        'CDN Implementation',
        'Performance Monitoring'
      ]
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Services</SectionTitle>
          <SectionSubtitle>
            Comprehensive solutions to bring your digital vision to life
          </SectionSubtitle>
        </motion.div>

        <ServicesGrid>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ServiceFeatures>
              </ServiceCard>
            </motion.div>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;