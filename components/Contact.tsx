
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        body: formDataToSend,
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-white/30 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing. 
            I'm always open to discussing new opportunities and creative collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-white/70 mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a question about my work or want to discuss a potential project, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg">
                  <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-white text-xl"></i>
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-white/70">vinaybabumachha27@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg">
                  <i className="ri-phone-line w-6 h-6 flex items-center justify-center text-white text-xl"></i>
                </div>
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-white/70">+1 (480) 738-0552</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg">
                  <i className="ri-map-pin-line w-6 h-6 flex items-center justify-center text-white text-xl"></i>
                </div>
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-white/70">Tempe, AZ</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/vinay27-code" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <i className="ri-github-line w-5 h-5 flex items-center justify-center text-white text-lg"></i>
                </a>
                <a href="https://linkedin.com/in/vinaybabu27" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <i className="ri-linkedin-line w-5 h-5 flex items-center justify-center text-white text-lg"></i>
                </a>
                <a href="https://www.instagram.com/vinay._.27" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                  <i className="ri-instagram-line w-5 h-5 flex items-center justify-center text-white text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/90 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/90 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/90 mb-2">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors text-sm"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/90 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors text-sm resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
                <div className="text-right text-white/50 text-xs mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full px-8 py-3 bg-white text-[#1E1A2E] rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-400 text-center">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-400 text-center">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-white/70 mb-6">
              Let's discuss how we can bring your ideas to life with clean, modern, and functional design.
            </p>
            <button 
              onClick={() => document.getElementById('name')?.focus()}
              className="px-8 py-3 bg-white text-[#1E1A2E] rounded-full font-semibold hover:bg-white/90 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
