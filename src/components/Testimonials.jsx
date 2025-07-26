import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const QuoteIcon = styled.div`
  color: #6366f1;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ClientImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ClientDetails = styled.div`
  flex: 1;
`;

const ClientName = styled.h4`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

const ClientRole = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
`;

const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  color: #fbbf24;
`;

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "kevin delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
      client: {
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
      },
      rating: 5
    },
    {
      id: 2,
      text: "Working with kevin was a game-changer for our business. He transformed our outdated website into a modern, responsive platform that our customers love.",
      client: {
        name: "Michael Chen",
        role: "Founder, Digital Solutions",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
      },
      rating: 5
    },
    {
      id: 3,
      text: "kevin's mobile app development skills are outstanding. He created a user-friendly app that perfectly captures our brand identity and serves our customers effectively.",
      client: {
        name: "Emily Rodriguez",
        role: "Marketing Director, FitLife",
        image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
      },
      rating: 5
    },
    {
      id: 4,
      text: "Professional, reliable, and incredibly talented. kevin delivered our project on time and within budget. I highly recommend his services to anyone looking for quality development work.",
      client: {
        name: "David Thompson",
        role: "CTO, InnovateCorp",
        image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200"
      },
      rating: 5
    },
    {
      id: 5,
      text: "kevin's expertise in full-stack development helped us launch our startup successfully. His code is clean, scalable, and well-documented. Couldn't ask for better!",
      client: {
        name: "Lisa Wang",
        role: "Product Manager, StartupXYZ",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200"
      },
      rating: 5
    },
    {
      id: 6,
      text: "The analytics dashboard kevin built for us has revolutionized how we track our business metrics. His understanding of both frontend and backend technologies is impressive.",
      client: {
        name: "Robert Kim",
        role: "Data Analyst, MetricsPro",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200"
      },
      rating: 5
    }
  ];

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Testimonials</SectionTitle>
          <SectionSubtitle>
            What my clients say about working with me
          </SectionSubtitle>
        </motion.div>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard>
                <QuoteIcon>
                  <Quote size={32} />
                </QuoteIcon>
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <ClientInfo>
                  <ClientImage 
                    src={testimonial.client.image} 
                    alt={testimonial.client.name}
                  />
                  <ClientDetails>
                    <ClientName>{testimonial.client.name}</ClientName>
                    <ClientRole>{testimonial.client.role}</ClientRole>
                  </ClientDetails>
                  <Rating>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </Rating>
                </ClientInfo>
              </TestimonialCard>
            </motion.div>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;