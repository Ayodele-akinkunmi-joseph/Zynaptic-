"use client";

import { useState } from "react";
import { Mail, Github, MessageSquare, Clock, CircleCheck, Calendar, Send, User, AtSign, FileText, AlertCircle, Phone, Globe } from 'lucide-react';

const Ping = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "", });
  };

  const contactMethods = [
    { 
      type: "Email", 
      value: "ayodeleakinkunmi3@gmail.com", 
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />, 
      color: "cyan",
      response: "Within 24 hours",
      link: "mailto:jakinorymnexus@gmail.com "
    },
    { 
      type: "GitHub", 
      value: "github.com/Ayodele-akinkunmi-joseph", 
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />, 
      color: "gray",
      response: "Code & Projects",
      link: "https://github.com/Ayodele-akinkunmi-joseph"
    },
    { 
      type: "Portfolio", 
      value: "zynaptic.dev", 
      icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />, 
      color: "purple",
      response: "View Work",
      link: "#"
    }
  ];

  return (
    <section id="ping" className="min-h-screen pt-24 sm:pt-28 md:pt-32 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-20 relative overflow-hidden bg-black">
      
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
        {/* Grid Pattern */}
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
          <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border border-white/10">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">SEND_MESSAGE</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm text-gray-400 font-mono flex items-center gap-1 sm:gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-black/30 border border-white/20 rounded-lg sm:rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-xs sm:text-sm text-gray-400 font-mono flex items-center gap-1 sm:gap-2">
                    <AtSign className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-black/30 border border-white/20 rounded-lg sm:rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm text-gray-400 font-mono flex items-center gap-1 sm:gap-2">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  SUBJECT
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-black/30 border border-white/20 rounded-lg sm:rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors placeholder:text-gray-500"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>
              
              {/* <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm text-gray-400 font-mono flex items-center gap-1 sm:gap-2">
                  <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  PRIORITY_LEVEL
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    { value: "low", label: "Low", color: "green" },
                    { value: "normal", label: "Normal", color: "cyan" },
                    { value: "high", label: "High", color: "orange" },
                    { value: "urgent", label: "Urgent", color: "red" }
                  ].map((level) => (
                    <button
                      key={level.value}
                      type="button"
                      onClick={() => setFormData({...formData, priority: level.value})}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border text-xs sm:text-sm font-mono transition-all flex items-center gap-1 sm:gap-2 ${
                        formData.priority === level.value
                          ? `bg-${level.color}-500/20 border-${level.color}-500 text-${level.color}-400`
                          : 'bg-black/30 border-white/20 text-gray-400 hover:border-cyan-400/50'
                      }`}
                    >
                      {formData.priority === level.value && (
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-${level.color}-400 animate-pulse`}></div>
                      )}
                      {level.label}
                    </button>
                  ))}
                </div>
              </div> */}
              
              <div className="space-y-1 sm:space-y-2">
                <label className="text-xs sm:text-sm text-gray-400 font-mono flex items-center gap-1 sm:gap-2">
                  <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base bg-black/30 border border-white/20 rounded-lg sm:rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none placeholder:text-gray-500"
                  placeholder="Describe your project, timeline, and requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 md:py-4 bg-cyan-500 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 sm:gap-3 group"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform" />
                <span className="text-sm sm:text-base">SEND_PING</span>
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Contact Channels */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border border-white/10">
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
                    className="block p-3 sm:p-4 backdrop-blur-sm bg-black/30 border border-white/10 rounded-lg sm:rounded-xl hover:border-cyan-400/50 hover:bg-cyan-900/10 transition-all duration-300 group"
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

            {/* Response Timeline
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border border-white/10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-1 sm:gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  RESPONSE_TIMELINE
                </h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  { priority: "Normal Priority", time: "24-48 hours", color: "cyan" },
                  { priority: "High Priority", time: "12-24 hours", color: "orange" },
                  { priority: "Urgent", time: "2-6 hours", color: "red" }
                ].map((item) => (
                  <div key={item.priority} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 backdrop-blur-sm bg-black/30 border border-white/10 rounded-lg sm:rounded-xl hover:border-cyan-400/30 transition-all gap-2 sm:gap-0">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-${item.color}-500 animate-pulse`}></div>
                      <span className="text-sm sm:text-base text-gray-300">{item.priority}</span>
                    </div>
                    <span className={`text-${item.color}-400 font-mono font-bold text-sm sm:text-base`}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Current Status */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-5 md:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-1 sm:gap-2">
                    <CircleCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    CURRENT_STATUS
                  </h2>
                </div>
                <div className="text-xs sm:text-sm text-green-400 font-mono bg-green-500/10 border border-green-500/20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full animate-pulse">
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
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-2 sm:px-4">
          <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-3xl mx-auto border border-cyan-500/20">
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
              <button className="px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 bg-transparent border border-purple-500 text-purple-400 font-bold rounded-full hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2 group">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-sm sm:text-base">SCHEDULE_CALL</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ping;