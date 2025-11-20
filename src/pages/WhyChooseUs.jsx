import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUsPage() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const headlineRef = useRef(null);
  const visualRef = useRef(null);

  // Function to add card refs safely
  const addToCardsRef = (el, index) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el;
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced headline animation
      gsap.from(headlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      // Smoother staggered cards entrance - with safety check
  

      // Visual section animation
      if (visualRef.current) {
        gsap.from(visualRef.current, {
          y: 30,
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.6,
        });
      }

      // Refined parallax effect
      gsap.to(containerRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Enhanced hover effects with safety check
      cardsRef.current.forEach((card) => {
        if (!card) return;
        
        const hoverIn = () =>
          gsap.to(card, { 
            y: -12, 
            scale: 1.02,
            rotationY: 5,
            rotationX: 2,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            duration: 0.4, 
            ease: "power2.out" 
          });
          
        const hoverOut = () =>
          gsap.to(card, { 
            y: 0, 
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            duration: 0.5, 
            ease: "power3.out" 
          });

        card.addEventListener("mouseenter", hoverIn);
        card.addEventListener("mouseleave", hoverOut);

        return () => {
          card.removeEventListener("mouseenter", hoverIn);
          card.removeEventListener("mouseleave", hoverOut);
        };
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const bullets = [
    {
      icon: "🎞️",
      title: "End-to-End Production",
      text: "From concept to final render — all under one roof.",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: "💡",
      title: "Creative + Technical Expertise",
      text: "A perfectly balanced production team with artistry, design, and technology.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: "⏱️",
      title: "Timely Delivery",
      text: "Professional project management and reliable turnaround.",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: "🌐",
      title: "Multi-Industry Experience",
      text: "From corporates to education, architecture, and retail.",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      icon: "🎯",
      title: "Client-Centric Approach",
      text: "Custom solutions aligned with your goals and audience.",
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-transparent rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        {/* Enhanced Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Why Choose Us</span>
          </div>
          
          <h2 
            ref={headlineRef} 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6"
          >
            Exceptional Production
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Experiences
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combine cutting-edge creativity, advanced technology, and reliable delivery 
            to bring your vision to life with unparalleled quality.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Visual/Hero Card - Enhanced */}
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <div 
              ref={visualRef}
              className="w-full max-w-lg rounded-3xl p-8 bg-gradient-to-br from-white to-gray-50/80 shadow-2xl border border-gray-200/60 backdrop-blur-sm overflow-hidden relative"
            >
              {/* Enhanced background gradients */}
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-gradient-to-tr from-blue-400/40 to-purple-300/40 rounded-full blur-3xl transform rotate-12" />
              <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-gradient-to-br from-pink-400/30 to-yellow-300/30 rounded-full blur-3xl transform -rotate-12" />
              
              <div className="relative z-10">
                <div className="relative h-80 rounded-2xl overflow-hidden border border-gray-200/50 bg-gradient-to-br from-gray-50 to-white">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
                    <div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      Production
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 mb-2">
                      <div className="w-3 h-0.5 bg-gray-400"></div>
                      <span className="text-sm font-medium">Complete Workflow</span>
                      <div className="w-3 h-0.5 bg-gray-400"></div>
                    </div>
                    <p className="text-gray-600 font-medium mb-8">Concept → Design → Render</p>
                    
                    <div className="flex gap-4 flex-wrap justify-center">
                      <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        Start Your Project
                      </button>
                      <button className="px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-700 font-medium shadow-sm hover:shadow-md hover:border-gray-400 transition-all duration-300">
                        View Portfolio
                      </button>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-2xl border border-gray-200/50">
                    🎬
                  </div>
                  <div className="absolute bottom-6 left-6 w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-xl border border-gray-200/50">
                    ✨
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid - Enhanced */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              {bullets.map((bullet, index) => (
                <div
                  key={bullet.title}
                  ref={(el) => addToCardsRef(el, index)}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-200/60 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-none w-14 h-14 rounded-2xl ${bullet.bgColor} flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <span aria-hidden className="filter drop-shadow-sm">{bullet.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {bullet.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {bullet.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced footer text */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white/50 border border-gray-200/60 backdrop-blur-sm">
              <p className="text-center text-gray-700 font-medium leading-relaxed">
                We tailor each project to the audience and objectives — available for 
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold">
                  {" "}one-off jobs{" "}
                </span>
                and
                <span className="text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text font-semibold">
                  {" "}long-term partnerships
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badge - Enhanced */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-lg">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              Trusted by teams worldwide
            </div>
            <div className="w-px h-6 bg-gray-300 hidden sm:block"></div>
            <div className="text-sm text-gray-600 font-medium">
              Ready to scale for your project needs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}