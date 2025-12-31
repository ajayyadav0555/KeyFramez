import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, Box, Zap, RotateCw, Camera, ArrowRight,  Layers, 
  Move3d, 
  Rotate3d, 
  Star,
  CheckCircle2,
  Cuboid, 
  Building,
  Target} from 'lucide-react';
import { Link, Links, useNavigate } from 'react-router-dom';


import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const ThreeDModeling = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play none none reverse"
        }
      });

      // Text Reveal
      tl.fromTo('.reveal-text',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" }
      );

      // Feature Cards
      tl.fromTo('.feature-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" },
        "-=0.6"
      );

      // Main Video Container
      tl.fromTo('.hero-video-container',
        { scale: 0.9, opacity: 0, borderRadius: "50px" },
        { scale: 1, opacity: 1, borderRadius: "24px", duration: 1.2, ease: "power3.out" },
        "-=1"
      );
    }, containerRef);

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

  const newFeatures = [
  {
    icon: <Cuboid className="w-5 h-5" />,
    title: "Product Models",
    desc: "Realistic 3D visualizations for designs, prototypes, and digital twins.",
  },
  {
    icon: <Building className="w-5 h-5" />,
    title: "Architecture Models",
    desc: "Detailed walkthroughs, flythroughs, and renderings that bring spaces to life.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Project Simulations",
    desc: "Accurate visualization of technical, manufacturing, or industrial processes.",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Anamorphic Videos",
    desc: "Creating large-scale optical illusions (3D displays) that captivate audiences.",
  },
];

  return (
  <>
    <div ref={containerRef} className="bg-zinc-950 text-white overflow-hidden selection:bg-cyan-500/30">
      
      {/* SECTION 1: HERO */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Ambient Background Glows (Cyan/Indigo for 3D Tech feel) */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

          {/* Left Content */}
          <div className="space-y-10">
            <div className="reveal-text space-y-6">
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-4xl font-semibold tracking-wide uppercase text-zinc-300">3D Visualization</span>
              </div> */}

              <div className="inline-flex items-center gap-3  py-3  backdrop-blur-md 
                  shadow-2xl">


                  <span className="md:text-5xl text-3xl font-extrabold tracking-tight uppercase 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-blue-400 to-indigo-500">
3D Visualization                  </span>
                </div>

              {/* <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Bring Your Vision to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  Life in 3D.
                </span>
              </h2> */}

              <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
    <strong className="text-white">Visualize. Interact. Experience.</strong> We turn imagination into reality with detailed 3D models, visualizations, and simulations — helping you showcase ideas, designs, and products with precision and flair.
  </p>
  
  <h3 className="text-xl font-semibold text-zinc-300 mt-8 mb-4">
    Our 3D Production Capabilities
  </h3>
            </div>

            {/* Feature Grid (Bento Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {newFeatures.map((feature, index) => (
      <div 
        key={index} 
        className="feature-card group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 
                   hover:bg-zinc-800/60 hover:border-cyan-500/30 transition-all duration-300"
      >
        <div className="mb-3 p-3 w-fit rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 text-cyan-400 
                        group-hover:text-cyan-300 group-hover:scale-105 transition-transform duration-300">
          {feature.icon}
        </div>
        <h4 className="font-bold text-lg text-zinc-200">{feature.title}</h4>
        <p className="text-sm text-zinc-500 mt-1">{feature.desc}</p>
      </div>
    ))}
  </div>
          </div>

        {/* Parent: w-full for mobile, max-w for desktop. Removed fixed h-72. */}
<div className="hero-video-container relative group w-full max-w-5xl mx-auto px-4 lg:-mt-40">
  
  {/* Glow Effect: Uses responsive rounding and blur */}
  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-[2rem] opacity-20 group-hover:opacity-40 blur-xl transition duration-500"></div>
  
  <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-2xl bg-black border border-white/10">
    <video
      ref={videoRef}
      className="w-full h-full object-cover scale-[1.01]"
      src='https://res.cloudinary.com/dq3ubcgdd/video/upload/v1765655303/3D_Modelling_Simulations_-_Multi_Loop_fgwvdq.mp4'
      muted={isMuted}
      autoPlay
      loop
      playsInline
    />
    
    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

    {/* Controls: Re-enabled with responsive spacing and hover reveal */}
   
  </div>

  {/* Floating Badge: Adjusted for mobile visibility */}
  <div className="absolute -top-4 -right-2 sm:-top-8 sm:-right-8 hidden xs:flex animate-bounce-slow">
    <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-2xl shadow-xl flex items-center gap-3">
       <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
       <span className="font-semibold text-xs sm:text-sm">CGI Production</span>
    </div>
  </div>
</div>
        </div>
      </section>


      {/* SECTION 2: SOCIAL PROOF STRIP */}
      <div className="border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-center md:justify-between items-center gap-6">
          
          {/* Custom Google Review Component */}
          <div className="group flex items-center gap-4 bg-zinc-950/50 px-6 py-3 rounded-2xl border border-white/5 hover:border-cyan-500/20 transition-colors">
            <div className="bg-white p-2 rounded-lg">
               <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />)}
              </div>
              <p className="text-xs text-zinc-400"><span className="text-white font-bold">4.9/5</span> from 285+ projects</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-zinc-500 text-sm font-medium">
             <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500"/> Product Vis</span>
             <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500"/> Architectural</span>
             <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500"/> Anamorphic 3D</span>
          </div>
        </div>
      </div>

      {/* SECTION 3: LIGHT MODE BRIDGE */}

    </div>
      <ThreeDWorkShowcase /> 
  </>
  );
};


const ThreeDWorkShowcase = () => {
  const sectionRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Section animation
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Grid items animation
    gsap.fromTo('.work-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.work-grid',
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  // const workVideos = [
  //   {
  //     id: 1,
  //     title: "Product Visualization",
  //     category: "3D Modeling",
  //     thumbnail: "/api/placeholder/400/300",
  //     videoUrl: "/videos/product-3d.mp4",
  //     description: "Photorealistic product rendering for e-commerce and marketing"
  //   },
  //   {
  //     id: 2,
  //     title: "Architectural Walkthrough",
  //     category: "3D Animation",
  //     thumbnail: "/api/placeholder/400/300",
  //     videoUrl: "/videos/architectural-3d.mp4",
  //     description: "Immersive virtual tours of architectural spaces and buildings"
  //   },
  //   {
  //     id: 3,
  //     title: "Character Animation",
  //     category: "3D Character",
  //     thumbnail: "/api/placeholder/400/300",
  //     videoUrl: "/videos/character-3d.mp4",
  //     description: "Lifelike character modeling and animation for games and films"
  //   },
  //   {
  //     id: 4,
  //     title: "Medical Visualization",
  //     category: "Scientific 3D",
  //     thumbnail: "/api/placeholder/400/300",
  //     videoUrl: "/videos/medical-3d.mp4",
  //     description: "Detailed anatomical models and medical procedure animations"
  //   },
  //   {
  //     id: 5,
  //     title: "Industrial Design",
  //     category: "Engineering 3D",
  //     thumbnail: "/api/placeholder/400/300",
  //     videoUrl: "/videos/industrial-3d.mp4",
  //     description: "Precise 3D models for manufacturing and engineering"
  //   },
  //   {
  //     id: 6,
  //     title: "Motion Graphics",
  //     category: "3D Animation",
  //     thumbnail: "/api/placeholder/400/300",
  //     videoUrl: "/videos/motion-3d.mp4",
  //     description: "Dynamic 3D animations for branding and advertising"
  //   }
  // ];

  const togglePlay = (videoId, videoElement) => {
    if (playingVideo === videoId) {
      videoElement.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      document.querySelectorAll('video').forEach(video => video.pause());

      videoElement.play();
      setPlayingVideo(videoId);
    }
  };

  const toggleMute = (videoElement) => {
    videoElement.muted = !videoElement.muted;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            3D Modeling and Simulation <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></span>
          </h2> */}
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of stunning 3D models and animations that bring ideas to life with unparalleled realism and creativity.
          </p> */}
        </div>

        {/* Work Grid */}
        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {[
            {
              id: 1,
              title: "Anamorphic Videos",
              category: "3D Animation",
              videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764350670/3dmodeling/FLAT_ANAMORPHIK_LOOP_vab6ff.mp4",
              description: "Creating optical illusions that captivate audiences in real-world settings",
              path: "/services/amorphic-videos"
            },
            {
              id: 2,
              title: "Architecture Videos",
              category: "Architectural 3D",
              videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1765655572/Architecture_Models_-_Multi_Loop_lkihux.mp4",
              description: "Walkthroughs and flythroughs that bring spaces to life",
              path: "/services/architecture-videos"
            },
            {
              id: 3,
              title: "Product Model",
              category: "3D Modeling",
              videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1765655489/Product_Models_-_Loop_xabj42.mp4",
              description: "Realistic visualizations of your designs or prototypes",
              path: "/services/product-videos"
            },
            {
              id: 4,
              title: "Project Simulations",
              category: "3D Simulation",
              videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1765655452/Project_Simulations_-_Multi_Loop_cjacrk.mp4",
              description: "Technical or industrial processes visualized with accuracy",
              path: "/services/project-videos"
            },
            // {
            //   id: 4,
            //   title: "Project Simulations",
            //   category: "3D Simulation",
            //   videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764350661/3dmodeling/ANAMORPHIC_01_m9tqqj.mp4",
            //   description: "Realistic project simulations and dynamic scenario testing",
            //   path: "/services/project-videos"
            // }
          ].map((work) => (
            <div
              key={work.id}
              className="work-item group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Video Container */}
               <Link to={work?.path} className='cursor-pointer'>

              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  src={work.vi}
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

              {/* Content with Title and Arrow */}
<div className="p-6 sm:p-8 bg-white rounded-xl transition-all duration-500 ">
  <div className="flex items-start justify-between gap-4">
    
    {/* TEXT CONTENT */}
    <div className="flex-grow">
      <h3 className="text-2xl font-extrabold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-snug text-center">
        {work.title}
      </h3>
      {/* <p className="text-gray-600 text-base leading-relaxed font-bold">
        {work.description}
        </p> */}
    </div>

    {/* ACTION BUTTON (Link) */}
    {/* <Link to={work?.path} className="flex-shrink-0">
      <button 
      aria-label={`View details for ${work.title}`}
      className="flex items-center justify-center w-14 h-14 border-2 border-blue-600 text-blue-600 
      rounded-full transition-all duration-300 ease-in-out 
      hover:bg-blue-600 hover:text-white hover:scale-105 
                   shadow-sm group-hover:shadow-lg group-hover:border-blue-700"
      >
      <ArrowRight className="w-6 h-6" /> 
      </button>
    </Link> */}
  </div>
</div>
      </Link>
            </div>
          ))}
        </div>


      </div>

      {/* Auto-play on hover functionality */}
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

      {/* Auto-play functionality with JavaScript */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const workItems = document.querySelectorAll('.work-item');
            
            workItems.forEach(item => {
              const video = item.querySelector('video');
              
              item.addEventListener('mouseenter', function() {
                if (video && !video.playing) {
                  video.play().catch(e => console.log('Auto-play prevented:', e));
                }
              });
              
              item.addEventListener('mouseleave', function() {
                if (video && video.playing) {
                  video.pause();
                  video.currentTime = 0;
                }
              });
            });
          });
        `
      }} />
    </section>
  );
};

export default ThreeDModeling;
















      // <section className="bg-white py-24 lg:py-32">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <div className="grid lg:grid-cols-2 gap-16 items-center">
            
      //       {/* Visual */}
      //       <div className="relative order-2 lg:order-1">
      //         <div className="absolute inset-0 bg-cyan-100 rounded-[2rem] transform rotate-3 scale-105 opacity-50"></div>
      //         <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
      //            <video
      //             className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-in-out"
      //             src="https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764350661/3dmodeling/ANAMORPHIC_01_m9tqqj.mp4"
      //             autoPlay
      //             muted
      //             loop
      //             playsInline
      //           />
      //           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      //         </div>
      //       </div>

      //       {/* CTA Content */}
      //       <div className="order-1 lg:order-2 space-y-8">
      //         <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
      //           Not just pixels. <br/>
      //           We create <span className="text-cyan-600">Dimensions.</span>
      //         </h2>
      //         <p className="text-lg text-zinc-600 leading-relaxed">
      //           From hyper-realistic product demos to mind-bending anamorphic billboards. See how we help brands stand out in a three-dimensional world.
      //         </p>
              
      //         <div className="flex flex-wrap gap-4">
      //           <Link to={'/portfolio'}>
      //           <button className="group relative px-8 py-4 bg-zinc-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
      //             <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      //             <div className="relative flex items-center gap-3 text-white font-semibold">
      //               <span>View  Portfolio</span>
      //               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      //             </div>
      //           </button>
      //           </Link>
              
      //         </div>
      //       </div>

      //     </div>
      //   </div>
      // </section>
