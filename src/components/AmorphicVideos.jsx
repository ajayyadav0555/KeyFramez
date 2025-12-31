import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shapes, Zap, Palette, Sparkles, ArrowRight, Video, Camera, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AmorphicVideos = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // --- Data ---
  const services = [
    "Brand Transformations",
    "Product Morphing",
    "Logo Animations",
    "Abstract Visuals",
    "UI/UX Transitions",
    "Creative Storytelling"
  ];

  const features = [
    { icon: <Shapes />, text: "Fluid Morphing & Distortion", color: "text-purple-400" },
    { icon: <Zap />, text: "High-Speed, Seamless Transitions", color: "text-blue-400" },
    { icon: <Palette />, text: "Dynamic & Reactive Color Palettes", color: "text-pink-400" },
    { icon: <Sparkles />, text: "Organic, Physical Motion Simulation", color: "text-yellow-400" }
  ];

  const workVideos = [
    {
      id: 1,
      title: "Brand Identity Fluidity",
      category: "Logo Morphing",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764350661/3dmodeling/ANAMORPHIC_01_m9tqqj.mp4", // Placeholder: replace with actual video path
      description: "Transforming static logos into dynamic, moving entities."
    },
    {
      id: 2,
      title: "Conceptual Product Reveal",
      category: "Product Showreel",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764350850/FLAT_ANAMORPHIK_LOOP_mwa1gd.mp4", // Placeholder
      description: "Showcasing product evolution through fluid transitions."
    },
    {
      id: 3,
      title: "Abstract Art Loops",
      category: "Generative Art",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764350654/3dmodeling/SAMPLE_PREVIEW_u28qet.mp4", // Placeholder
      description: "Mesmerizing, continuous organic abstract animations."
    },

  ];

  // --- Animations (GSAP) ---
  useEffect(() => {
    // Main content slide-in
    gsap.fromTo('.amorphic-content',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
    );

    // Video grow/pop
    gsap.fromTo('.amorphic-video-container',
      { opacity: 0, x: 50, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: "back.out(1)", scrollTrigger: { trigger: sectionRef.current, start: "top 70%" } }
    );

    // Features stagger
    gsap.fromTo('.feature-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 60%" } }
    );

    // Work Grid items stagger
    gsap.fromTo('.work-item',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: '.work-grid', start: "top 75%" } }
    );
  }, []);

  // --- Component Structure ---
  return (
    <section ref={sectionRef} className=" text-white relative overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-zinc-950  pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-900/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. HERO SECTION: Title & Video Preview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20">

          {/* Left Content */}
          <div className="amorphic-content space-y-8">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-4xl font-semibold tracking-wide uppercase text-zinc-300"></span>
            </div> */}

            <div className="inline-flex items-center gap-3  py-3  backdrop-blur-md 
                  shadow-2xl">


                  <span className="md:text-5xl text-3xl font-extrabold tracking-tight uppercase 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-blue-400 to-zinc-500">
                    Anamorphic Videos
                  </span>
                </div>
            {/* 
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Mastering <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fluid Amorphic</span> Transformations
            </h1> */}

            <p className="text-xl text-gray-300 leading-relaxed">
              Experience the magic of cinema with our Anamorphic Video Production. Using professional anamorphic lenses, we create visually stunning, wide-format videos that deliver a true cinematic feel. Every frame is rich in depth, color, and emotion — capturing visuals with that signature “movie look” marked by beautiful lens flares, soft bokeh, and an immersive widescreen perspective.
              Perfect for advertisements, music videos, films, and brand stories, our anamorphic videos elevate your content with a premium, theatrical aesthetic that stands out from ordinary visuals.

            </p>

          
          </div>

       {/* Parent: w-full for mobile, max-width caps it for desktop. Removed fixed h-72. */}
<div className="hero-video-container relative group w-full max-w-5xl mx-auto px-4 lg:-mt-20">
  
  {/* Modern Glow: Wider blur and cyan-indigo theme */}
  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-[2rem] opacity-20 group-hover:opacity-40 blur-xl transition duration-500"></div>

  {/* Main Container: aspect-video ensures the video height stays proportional to width */}
  <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-2xl bg-black border border-white/10">
    <video
      className="w-full h-full object-cover scale-[1.01]"
      src='https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764350670/3dmodeling/FLAT_ANAMORPHIK_LOOP_vab6ff.mp4'
      muted
      autoPlay
      loop
      playsInline
    />

    {/* Elegant darkening gradient at the bottom for visual depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
    
    {/* Clean Hover Reveal Label */}
    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold">Anamorphic CGI Loop</span>
    </div>
  </div>

  {/* Floating Badge: Hidden on mobile, scales on larger screens */}
  <div className="absolute -top-4 -right-2 sm:-top-8 sm:-right-8 hidden xs:flex animate-bounce-slow">
    <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-2xl shadow-xl flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
      <span className="font-semibold text-xs sm:text-sm">CGI Production</span>
    </div>
  </div>
</div>
        </div>

        {/* 2. FEATURES GRID */}
        {/* <div className="py-16">
          <h2 className="text-3xl font-bold mb-10 text-center">
            The <span className="text-blue-400">Amorphic Edge</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-blue-600 transition-all duration-300 transform hover:scale-[1.03] space-y-3 shadow-lg"
              >
                <div className={`p-3 rounded-full w-fit bg-zinc-800 ${feature.color}`}>
                  {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.text}</h3>
                <p className="text-sm text-gray-400">
                  {index === 0 && "Objects transition seamlessly, retaining organic feel."}
                  {index === 1 && "Eliminate jarring cuts with kinetic, rapid shape changes."}
                  {index === 2 && "Colors shift and react naturally to the morphing action."}
                  {index === 3 && "Animations mimic real-world physics for maximum immersion."}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* 3. APPLICATIONS LIST */}
        {/* <div className="py-20">
          <div className="lg:max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Perfect For</h3>
            <p className="text-gray-400 text-lg mb-10">
              Our amorphic animations elevate diverse content types with a high-impact, artistic finish.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div key={index} className="service-feature flex items-center gap-3 p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:bg-blue-900/30 transition-colors duration-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                <span className="text-white font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div> */}


        {/* 4. WORK SHOWCASE GRID */}
        <div id="portfolio" className="py-20">
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Amorphic Portfolio <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Witness the captivating power of fluid motion in our most recent projects.
            </p>
          </div> */}

          <div className="work-grid grid grid-cols-1 md:grid-cols-2 gap-8 mt-40">
            {workVideos.map((work) => (
              <div
                key={work.id}
                className="work-item group bg-zinc-900 rounded-3xl shadow-xl border border-zinc-800 hover:border-blue-600 transition-all duration-500 overflow-hidden"
              >
                {/* Video Container */}
                <div className="relative aspect-video overflow-hidden bg-gray-900">
                  <video
                    className="w-full h-full object-cover transition-transform duration-500"
                    src={work.videoUrl}
                    loop
                    playsInline
                    autoPlay
                    muted
                    // Added onMouseEnter/onMouseLeave for the original video hover effect
                    onMouseEnter={e => e.currentTarget.play()}
                    onMouseLeave={e => e.currentTarget.pause()}
                  >
                    <source src={work.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay for Title on Hover */}
                  {/* <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl font-bold text-white">{work.title}</h3>
                    <p className="text-gray-300 mt-1">{work.description}</p>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {work.category}
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          {/* <div className="mt-16 text-center">
            <button
              onClick={() => navigate('/portfolio')}
              className="group inline-flex items-center gap-3 bg-white text-gray-900 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:bg-gray-100"
            >
              <span>Explore Our Full Portfolio</span>
              <Camera className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default AmorphicVideos;