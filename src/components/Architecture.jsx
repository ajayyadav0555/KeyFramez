import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, Package, Zap, Eye, Sparkles, ArrowRight, Layers, Move3d, Rotate3d, Star, CheckCircle2, ShoppingBag, Box, Smartphone, Target } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductModels = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Default to autoPlay=true for loop
  const [isMuted, setIsMuted] = useState(true);

  const navigate = useNavigate();

  // --- GSAP Animations (Adjusted to match ThreeDModeling) ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none reverse"
        }
      });

      // Hero content
      tl.fromTo('.product-content',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" }
      );

      // Video reveal (using the class from your original setup)
      tl.fromTo('.product-video',
        { scale: 0.9, opacity: 0, borderRadius: "50px" },
        { scale: 1, opacity: 1, borderRadius: "24px", duration: 1.2, ease: "power3.out" },
        "-=0.6"
      );

      // Feature cards stagger
      tl.fromTo('.feature-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const features = [
    { icon: <Package />, text: "Photorealistic Textures", desc: "Showcase materials with stunning realism." },
    { icon: <Zap />, text: "360° Interactive Views", desc: "Allow customers to explore every angle online." },
    { icon: <Smartphone />, text: "AR/VR Ready Assets", desc: "Models optimized for augmented and virtual reality." },
    { icon: <Target />, text: "Technical Cutaways", desc: "Reveal internal components and functionality clearly." }
  ];

  return (
    <>
      <section ref={sectionRef} className="bg-zinc-950 text-white overflow-hidden py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Ambient Background Glows (Cyan/Indigo for 3D Tech feel) */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 ">

            {/* Left Content */}
            <div className="product-content space-y-10">
              <div className="space-y-6">
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-md">
                  <ShoppingBag className="w-4 h-4 text-cyan-400" />
                  <span className="text-3xl font-semibold tracking-wide uppercase text-zinc-300">Product Model</span>
                </div> */}
                <div className="inline-flex items-center gap-3  py-3  backdrop-blur-md 
                  shadow-2xl">


                  <span className="md:text-5xl text-3xl font-extrabold tracking-tight uppercase 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-blue-400 to-zinc-500">
                    Architecture Models                  </span>
                </div>



                <p className="text-lg text-white leading-relaxed max-w-xl">
                  Bring your blueprints to life with our Architecture Model Design & Visualization services. We create highly detailed, photorealistic 3D models that showcase every element of your architectural vision — from structure and materials to lighting and environment. <br />
                  Whether for real estate presentations, walkthrough animations, or concept visualization, our team blends artistic design with technical precision to craft immersive architectural experiences. Using advanced 3D tools and rendering techniques, we help architects, builders, and developers present ideas that inspire, inform, and impress. <br />
                  <span className='font-bold'> Transform your concepts into stunning visual realities that captivate clients and elevate your project presentations.
                  </span>
                </p>
              </div>

              {/* Features Grid (Bento Style) */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-card group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 
                                                   hover:bg-zinc-800/60 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className='flex gap-5'>
                      <div className="mb-3 p-3 w-fit rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 text-cyan-400 
                                                         group-hover:text-cyan-300 group-hover:scale-105 transition-transform duration-300">
                        {React.cloneElement(feature.icon, { className: "w-5 h-5" })}
                      </div>
                      <h4 className="font-bold text-lg text-zinc-200">{feature.text}</h4>
                    </div>
                    <p className="text-sm text-zinc-500 mt-1">{feature.desc}</p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Right Video - The Hero Asset */}
            <div className="hero-video-container relative group sm:w-2xl md:m-w-3xl lg:w-3xl md:h-72  lg:-mt-20">
              {/* Glow Effect behind video */}
              <div className="absolute -inset-1 bg-gradient-to-r  transition duration-500"></div>

              <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl bg-black border border-white/10">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover scale-[1.01]"
                  src='https://res.cloudinary.com/dq3ubcgdd/video/upload/v1765655572/Architecture_Models_-_Multi_Loop_lkihux.mp4' // Using placeholder, client replaces this
                  muted={isMuted}
                  autoPlay
                  loop
                  playsInline
                >
                  <source src="/videos/product-model-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Controls */}
              </div>

              {/* Floating Badge (Updated style) */}
              {/* <div className="absolute -top-6 -right-6 hidden sm:block animate-bounce-slow">
                <div className="bg-zinc-900 border border-zinc-700 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                  <span className="font-semibold text-sm">3D Product Assets</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA BRIDGE SECTION (Seamless Transition) --- */}


      <ProductWorkShowcase />
    </>
  );
};

// --- REMAINS SIMILAR BUT WITH CONSISTENT STYLING ---
const ProductWorkShowcase = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Section animation
  //   gsap.fromTo(sectionRef.current,
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none reverse"
  //       }
  //     }
  //   );

  //   // Grid items animation
  //   gsap.fromTo('.work-item',
  //     { opacity: 0, y: 30 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.8,
  //       stagger: 0.2,
  //       scrollTrigger: {
  //         trigger: '.work-grid',
  //         start: "top 70%",
  //         toggleActions: "play none none reverse"
  //       }
  //     }
  //   );
  // }, []);

  const workVideos = [
    {
      id: 1,
      title: "Wearable Tech Demo",
      category: "Electronics 3D",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1765655585/New_Architecture_Models_-_Loop_rrgn2m.mp4",
      description: "High-fidelity wearable electronics model with animated interface."
    },
    {
      id: 2,
      title: "Luxury Watch Render",
      category: "Fashion/Jewelry",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1765655583/Old_Architecture_Models_-_Loop_nk2mad.mp4",
      description: "Extreme close-up renders highlighting materials and intricate details."
    },
  
    // {
    //   id: 3,
    //   title: "Industrial Pump Cutaway",
    //   category: "Technical/Industrial",
    //   videoUrl: "/videos/industrial-3d.mp4", // Using a generic industrial clip
    //   description: "X-ray visualization of internal mechanisms for technical manuals."
    // },
    // {
    //   id: 4,
    //   title: "Outdoor Gear Configurator",
    //   category: "Consumer Goods",
    //   videoUrl: "/videos/outdoor-gear.mp4",
    //   description: "Customizable 3D model for an online product configurator."
    // }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Product Visualization <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Showcase</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our collection of stunning 3D product models that showcase precision, realism, and engaging visual storytelling.
                    </p>
                </div> */}

        {/* Work Grid */}
        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {workVideos.map((work) => (
            <div
              key={work.id}
              className="work-item group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Video Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  src={work.videoUrl} // Using placeholder, client replaces this
                  loop
                  playsInline
                  autoPlay
                  muted
                >
                  <source src={work.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                {/* <div className="absolute top-4 left-4">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {work.category}
                                    </span>
                                </div> */}
              </div>

              {/* Title and Arrow */}
              {/* <div className="p-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {work.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {work.description}
                                    </p>
                                </div>
                                <button className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-110 transition-all duration-300 transform group-hover:translate-x-1 shadow-lg">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div> */}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-xl">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Showcase Your Products in 3D?
                        </h3>
                        <p className="text-xl mb-8 opacity-90">
                            Let's create stunning product models that highlight every detail and drive customer engagement.
                        </p>
                        <button className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-3">
                            Start Your Product Project
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div> */}
        {/* </div> */}
      </div>

      {/* Auto-play CSS for hover effect */}
      <style jsx>{`
        .work-item video {
          transition: transform 0.3s ease;
        }
        
        .work-item:hover video {
          transform: scale(1.05);
        }
        
        /* Auto-play on hover */
        .work-item:hover video {
          animation: gentlePlay 0.5s ease;
        }
        
        @keyframes gentlePlay {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default ProductModels;