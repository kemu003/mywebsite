import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// ============================
// 💅 Styled Components
// ============================
const TestimonialsSection = styled.section`
  padding: 100px 0;
  background: #ffffff;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeaderBox = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
`;

const SectionSubtitle = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled(motion.div)`
  background: #f8fafc;
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid #f1f5f9;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #6366f1;
    background: #ffffff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
  }
`;

const QuoteWrapper = styled.div`
  color: #e2e8f0;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 0;
`;

const TestimonialText = styled.p`
  color: #475569;
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1rem;
  position: relative;
  z-index: 1;
`;

const ClientProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid #f1f5f9;
  padding-top: 1.5rem;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: cover;
  background: #e2e8f0;
`;

const Name = styled.h4`
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  font-size: 1rem;
`;

const Role = styled.p`
  color: #94a3b8;
  font-size: 0.85rem;
  margin: 0;
`;

const StarGroup = styled.div`
  display: flex;
  gap: 2px;
  color: #fbbf24;
  margin-bottom: 1rem;
`;

// ============================
// 🚀 Main Component
// ============================
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Kevin delivered an exceptional e-commerce platform. His attention to detail and technical expertise in full-stack development made the entire process smooth.",
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 2,
      text: "Working with Kevin was a game-changer. He transformed our outdated UI into a modern, responsive platform that our customers actually enjoy using.",
      name: "Michael Chen",
      role: "Founder, Digital Solutions",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      id: 3,
      text: "His mobile app development skills are outstanding. He created a user-friendly app that captures our brand identity perfectly and functions flawlessly.",
      name: "Emily Rodriguez",
      role: "Marketing Director, FitLife",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <HeaderBox>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Client Success Stories</SectionTitle>
            <SectionSubtitle>
              I take pride in delivering high-quality solutions. Here is what some of my previous collaborators have to say.
            </SectionSubtitle>
          </motion.div>
        </HeaderBox>

        <TestimonialsGrid>
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <QuoteWrapper>
                <Quote size={48} />
              </QuoteWrapper>

              <div>
                <StarGroup>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </StarGroup>
                <TestimonialText>"{item.text}"</TestimonialText>
              </div>

              <ClientProfile>
                <Avatar src={item.image} alt={item.name} />
                <div>
                  <Name>{item.name}</Name>
                  <Role>{item.role}</Role>
                </div>
              </ClientProfile>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;