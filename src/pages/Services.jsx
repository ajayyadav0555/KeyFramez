import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const videoItemsRef = useRef([]);

  const services = [
    {
      title: "Live-shot Video Production",
      video: "570x320",
      description: "Professional video production for commercials, corporate videos, and brand storytelling."
    },
    {
      title: "Explainer Videos",
      video: "570x320",
      description: "Engaging animated videos that simplify complex concepts and showcase your products."
    },
    {
      title: "3D Modelling & Simulations",
      video: "570x320",
      description: "High-quality 3D models and realistic simulations for various applications."
    },
    {
      title: "Interactive Content Creation",
      video: "570x320",
      description: "Immersive interactive experiences including AR/VR and web-based content."
    },
    {
      title: "Character Animation",
      video: "570x320",
      description: "Bringing characters to life with expressive animation for various media."
    },
    {
      title: "Inventive Film",
      video: "570x320",
      description: "Creative film production that pushes boundaries and tells unique stories."
    },
    {
      title: "Visual Effects (VFX)",
      video: "570x320",
      description: "Creative film production that pushes boundaries and tells unique stories."
    },
    {
      title: "Inventive Film",
      video: "570x320",
      description: "Creative film production that pushes boundaries and tells unique stories."
    },
  ];

  // Add video item to ref array
  const addToVideoItemsRef = (el) => {
    if (el && !videoItemsRef.current.includes(el)) {
      videoItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Hero section animation
    const heroTl = gsap.timeline();
    heroTl
      .fromTo('.hero-title', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo('.hero-description',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      );

    // Services header animation
    gsap.fromTo('.services-header',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Video items animation with stagger
    gsap.fromTo(videoItemsRef.current,
      { 
        y: 60, 
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Hover animations for video items
    videoItemsRef.current.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.video-preview'), {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.video-preview'), {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      // Clean up event listeners
      videoItemsRef.current.forEach((item) => {
        if (item) {
          item.removeEventListener('mouseenter', () => {});
          item.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="px-6 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="hero-content">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">KEYRAME2</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto text-center">
            A full-service animation and video production studio that turns ideas into visually striking stories.
          </p>
          <div className="hero-description text-lg text-gray-600 max-w-4xl mx-auto text-center">
            <p>
              From <strong className="text-gray-900">corporate videos and explainer films to 3D simulations, AR/VR experiments, and e-learning content</strong>, 
              we help brands educate, inspire, and connect with audiences. Our work blends creativity, strategy, and technology. 
              Our mission is simple — to make your ideas unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="services-section px-6 py-16 max-w-7xl mx-auto">
        <div className="services-header text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">OUR SERVICES</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={addToVideoItemsRef}
              className="service-video-item group"
            >
              {/* Video Preview */}
              <div className="video-preview mb-6 rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="aspect-video flex items-center justify-center relative">
                  {/* <div className="text-gray-500 text-lg font-medium">
                    {service.video}

                  </div> */}
                  {/* Play button overlay */}
                  {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div> */}
                   <video src='/video.mp4' autoPlay muted className='object-contain' />
                </div>
              </div>

              {/* Content */}
              <div className="service-content text-center">
                <h3 className="service-title text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="service-description text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>
                <button className="service-cta inline-flex items-center text-blue-600 font-semibold text-lg group-hover:text-purple-600 transition-colors duration-300 border-b-2 border-transparent group-hover:border-blue-600 pb-1">
                  Watch Demo
                  <span className="arrow ml-3 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
              
            </div>
          ))}
        </div>
        
      </section>
    </div>
  );
};

export default Services;