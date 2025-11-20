import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
  import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

export default function ContactFooter() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const contactItemsRef = useRef([]);
  const ctaRef = useRef(null);

  const addToContactRefs = (el, index) => {
    if (el && !contactItemsRef.current.includes(el)) {
      contactItemsRef.current[index] = el;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline animation
      gsap.from(headlineRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });

      // Staggered contact items animation
    //   if (contactItemsRef.current.length > 0) {
    //     gsap.from(contactItemsRef.current, {
    //       y: 40,
    //       opacity: 0,
    //       duration: 1,
    //       stagger: 0.15,
    //       ease: "power3.out",
    //       delay: 0.4
    //     });
    //   }

      // CTA button animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.8
        });
      }

      // Floating animation for background elements
      gsap.to(".floating-element", {
        y: -10,
        rotation: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);



 const socialLinks = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://facebook.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com",
  },
];

  const contactInfo = [
  {
    icon: <MdEmail />,
    label: "Email",
    value: "info@KEYFRAMZ.com",
    link: "mailto:info@yourcompany.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <MdPhone />,
    label: "Phone",
    value: "+91-XXXXXXXXXX",
    link: "tel:+91XXXXXXXXXX",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <MdLocationOn />,
    label: "Location",
    value: "City, India",
    link: "#",
    color: "from-purple-500 to-pink-500",
  },
];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto" ref={containerRef}>
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-white/80">Get In Touch</span>
            </div>
            
            <h2 
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              <span className="block">✉️ CONTACT US</span>
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-2xl sm:text-3xl lg:text-4xl mt-4 font-light">
                Let's create something amazing together
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate to create visuals that move, teach, and inspire your audience.
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.link}
                ref={(el) => addToContactRefs(el, index)}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10 hover:transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.color} items-center justify-center text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center" ref={ctaRef}>
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with stunning visuals and seamless production.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <span>🚀</span>
                  Start Your Project
                </button>
                <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2">
                  <span>💼</span>
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-white text-sm font-black">
                © 2025 Your Company. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6">
                <span className="text-white text-sm text-2xl font-black">Follow us:</span>
                <div className="flex gap-4">
                  {socialLinks.map((icon, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 rounded-full bg-white hover:bg-white border border-white/10 flex items-center justify-center text-sm transition-all duration-300 hover:scale-110"
                    >
                      {icon?.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 right-10 w-8 h-8 bg-cyan-400/20 rounded-full floating-element"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 bg-purple-400/20 rounded-full floating-element"></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400/20 rounded-full floating-element"></div>
    </footer>
  );
}