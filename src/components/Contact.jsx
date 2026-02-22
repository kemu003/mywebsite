import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

// ============================
// 💅 Styled Components
// ============================
const ContactSection = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h3 { font-size: 1.5rem; font-weight: 600; margin-bottom: 1rem; color: #1f2937; }
  p.desc { color: #6b7280; line-height: 1.8; margin-bottom: 2rem; }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  transition: transform 0.3s ease;
  &:hover { transform: translateX(5px); }
`;

const ContactIcon = styled.div`
  color: #6366f1;
  background: #e0e7ff;
  padding: 0.75rem;
  border-radius: 8px;
  display: flex;
`;

const ContactDetails = styled.div`
  h4 { font-weight: 600; color: #1f2937; margin-bottom: 0.25rem; }
  p { color: #6b7280; margin: 0; }
`;

const SocialLinks = styled.div` display: flex; gap: 1rem; margin-top: 2rem; `;

const SocialLink = styled.a`
  color: #6b7280;
  background: white;
  padding: 0.75rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover { color: #6366f1; transform: translateY(-2px); }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const FormGroup = styled.div` margin-bottom: 1.5rem; `;

const Label = styled.label` display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151; `;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  &:focus { outline: none; border-color: #6366f1; }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
`;

const SubmitButton = styled.button`
  background: #6366f1;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  transition: all 0.3s;
  &:hover:not(:disabled) { background: #4f46e5; transform: translateY(-2px); }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const StatusMessage = styled(motion.div)`
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  background: ${props => props.type === 'success' ? '#dcfce7' : '#fee2e2'};
  color: ${props => props.type === 'success' ? '#166534' : '#991b1b'};
`;

// ============================
// 🚀 Contact Component
// ============================
const Contact = ({ initialMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: initialMessage
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // EmailJS expects keys to match your Template variable names
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Email send error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionTitle>Let's Work Together</SectionTitle>
          <SectionSubtitle>Ready to start your next project? Reach out and let's build something amazing!</SectionSubtitle>
        </motion.div>

        <ContactContent>
          {/* Sidebar Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <ContactInfo>
              <h3>Get In Touch</h3>
              <p className="desc">
                I'm currently open for new opportunities in Software Engineering and Data Science. 
                Whether you have a question or just want to say hello, my inbox is always open.
              </p>
              
              <ContactItem>
                <ContactIcon><Mail size={24} /></ContactIcon>
                <ContactDetails><h4>Email</h4><p>kevinkiplangatmutai003@gmail.com</p></ContactDetails>
              </ContactItem>
              <ContactItem>
                <ContactIcon><Phone size={24} /></ContactIcon>
                <ContactDetails><h4>Phone</h4><p>+254 725674910</p></ContactDetails>
              </ContactItem>
              <ContactItem>
                <ContactIcon><MapPin size={24} /></ContactIcon>
                <ContactDetails><h4>Location</h4><p>Nairobi, Kenya</p></ContactDetails>
              </ContactItem>

              <SocialLinks>
                <SocialLink href="https://github.com/kemu003" target="_blank" rel="noreferrer"><Github size={20} /></SocialLink>
                <SocialLink href="https://www.linkedin.com/in/kevin-kiplangat-mutai-583172367/" target="_blank" rel="noreferrer"><Linkedin size={20} /></SocialLink>
                <SocialLink href="https://twitter.com/kevinmutai" target="_blank" rel="noreferrer"><Twitter size={20} /></SocialLink>
              </SocialLinks>
            </ContactInfo>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Name</Label>
                <Input name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="email@example.com" />
              </FormGroup>
              <FormGroup>
                <Label>Subject</Label>
                <Input name="subject" value={formData.subject} onChange={handleChange} required placeholder="What are you interested in?" />
              </FormGroup>
              <FormGroup>
                <Label>Message</Label>
                <TextArea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me more about your project..." />
              </FormGroup>

              <SubmitButton type="submit" disabled={status === 'loading'}>
                <Send size={18} />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </SubmitButton>

              <AnimatePresence>
                {status === 'success' && (
                  <StatusMessage type="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <CheckCircle size={18} /> Message sent successfully!
                  </StatusMessage>
                )}
                {status === 'error' && (
                  <StatusMessage type="error" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <AlertCircle size={18} /> Error sending message. Please try again.
                  </StatusMessage>
                )}
              </AnimatePresence>
            </ContactForm>
          </motion.div>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;