"use client";

import { useState } from "react";
import { Mail, Github, MessageSquare, CircleCheck, Calendar, Send, User, AtSign, FileText, Phone, Globe } from 'lucide-react';

const Ping = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Encode form data for Netlify
    const formBody = new URLSearchParams({
      'form-name': 'contact',
      ...formData
    }).toString();
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { 
      type: "Email", 
      value: "ayodeleakinkunmi3@gmail.com", 
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, 
      color: "cyan",
      response: "Within 24 hours",
      link: "mailto:ayodeleakinkunmi3@gmail.com"
    },
    { 
      type: "GitHub", 
      value: "github.com/Ayodele-akinkunmi-joseph", 
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, 
      color: "gray",
      response: "Code & Projects",
      link: "https://github.com/Ayodele-akinkunmi-joseph"
    },
    { 
      type: "Portfolio", 
      value: "zynaptic.dev", 
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, 
      color: "purple",
      response: "View Work",
      link: "https://zynaptic.netlify.app"
    }
  ];

  return (
    <section id="ping" className="min-h-screen pt-24 sm:pt-28 md:pt-32 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20 relative overflow-hidden bg-black">
      
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Animated circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-48 h-48 sm:w-64 sm:h-64 border border-cyan-500/10 rounded-full animate-ping"></div>
          <div className="w-64 h-64 sm:w-96 sm:h-96 border border-purple-500/10 rounded-full animate-ping absolute top-0 left-0" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2">
          <div className="inline-flex items-center gap-2 backdrop-blur-xl bg-black/40 border border-white/20 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 mb-4 sm:mb-5 md:mb-6">
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            <span className="text-cyan-400 font-mono text-xs sm:text-sm md:text-base">PING_CONTACT</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-5 md:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
            <span className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 mt-2 sm:mt-3 md:mt-4 font-mono">
              _INITIATE_CONNECTION
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-2 sm:px-0">
            Ready to collaborate on your next project? Send a ping and let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-2 sm:px-4">
          
          {/* Contact Form */}
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">SEND_MESSAGE</h2>
            </div>
            
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div>
                  <label className="text-xs sm:text-sm text-gray-400 font-mono flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-black/60 border border-white/20 rounded-lg sm:rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-600"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="text-xs sm:text-sm text-gray-400 font-mono flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <AtSign className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-black/60 border border-white/20 rounded-lg sm:rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-600"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-xs sm:text-sm text-gray-400 font-mono flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-black/60 border border-white/20 rounded-lg sm:rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-600"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>
              
              <div>
                <label className="text-xs sm:text-sm text-gray-400 font-mono flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-black/60 border border-white/20 rounded-lg sm:rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none placeholder:text-gray-600"
                  placeholder="Describe your project, timeline, and requirements..."
                />
              </div>
              
              {/* Status Message */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
                  ✗ Something went wrong. Please try again or email directly.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 sm:gap-3 group ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform" />
                <span className="text-sm sm:text-base">
                  {isSubmitting ? 'SENDING...' : 'SEND_PING'}
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Contact Channels */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border border-white/10 bg-black/40 backdrop-blur-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">CONTACT_CHANNELS</h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.type}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 sm:p-4 bg-black/60 border border-white/10 rounded-lg sm:rounded-xl hover:border-cyan-400/50 hover:bg-cyan-900/10 transition-all duration-300 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`p-1.5 sm:p-2 rounded-lg bg-${method.color}-500/10 group-hover:bg-${method.color}-500/20 transition-colors`}>
                          {method.icon}
                        </div>
                        <div>
                          <div className="font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors">{method.type}</div>
                          <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors truncate">{method.value}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors sm:text-right">
                        {method.response}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Current Status */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border border-white/10 bg-black/40 backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-5 md:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-1 sm:gap-2">
                    <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    CURRENT_STATUS
                  </h2>
                </div>
                <div className="text-xs sm:text-sm text-green-400 font-mono bg-green-500/10 border border-green-500/20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full animate-pulse w-fit">
                  AVAILABLE
                </div>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="text-sm sm:text-base text-gray-300">
                  Currently accepting new projects for <span className="text-cyan-400 font-bold">Q1 2024</span>.
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  Open to: Full-stack development, consulting, and technical leadership roles.
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    PREFER_A_CALL?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Schedule a 30-minute discovery call to discuss your project requirements.
                  </p>
                </div>
                <button className="px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-transparent border border-purple-500 text-purple-400 font-bold rounded-full hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2 group whitespace-nowrap">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span className="text-sm sm:text-base">SCHEDULE_CALL</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ping;
