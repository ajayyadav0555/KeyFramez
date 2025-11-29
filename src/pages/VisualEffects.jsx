import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
  Play, Pause, Volume2, VolumeX, Sparkles, Film, Camera, Wand2, ArrowRight, CheckCircle2,
  MonitorPlay,
  Lightbulb
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';


import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

// Placeholder component for VFXWorkShowcase (for completeness)


const VisualEffects = () => {
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
      tl.fromTo('.reveal-text-vfx',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" }
      );

      // Feature Cards
      tl.fromTo('.feature-card-vfx',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" },
        "-=0.6"
      );

      // Main Video Container
      tl.fromTo('.hero-video-container-vfx',
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

  const services = [
    "Feature Films",
    "Commercials & Ads",
    "Music Videos",
    "Digital Content",
    "Television Series",
    "Brand Campaigns"
  ];

  const features = [
    { icon: <Film className="w-5 h-5" />, title: "3D/CG Integration", desc: "Realistic models & environments" },
    { icon: <Sparkles className="w-5 h-5" />, title: "Particle FX", desc: "Fire, water, smoke simulations" },
    { icon: <Camera className="w-5 h-5" />, title: "Match Moving", desc: "Seamless camera tracking" },
    { icon: <Wand2 className="w-5 h-5" />, title: "Digital Environments", desc: "Immersive set extensions" }
  ];

  return (
   <>
    <div ref={containerRef} className="bg-zinc-950 text-white overflow-hidden selection:bg-blue-500/30">

      {/* SECTION 1: HERO */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Ambient Background Glows (Blue/Indigo for VFX) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

          {/* Left Content */}
          <div className="space-y-10">
            <div className="reveal-text-vfx space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-wide uppercase text-zinc-300">Hollywood-Grade Visual Effects (VFX)</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Turn Imagination Into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                  Breathtaking Reality.
                </span>
              </h2>

              <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                We utilize **cutting-edge VFX techniques**—from subtle compositing to complex **CGI, fluid simulations, and digital set extensions**—to create visually stunning and seamlessly integrated imagery.
              </p>
            </div>

            {/* Feature Grid (Bento Style) */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="feature-card-vfx group p-4 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/60 hover:border-blue-500/30 transition-all duration-300">
                  <div className="mb-3 p-2 w-fit rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-zinc-200">{feature.title}</h4>
                  <p className="text-xs text-zinc-500 mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Services List */}
            <div className="space-y-4 reveal-text-vfx pt-4">
              <h3 className="text-xl font-semibold text-white">Perfect For:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="service-feature flex items-center gap-3 p-3 bg-zinc-900 rounded-xl hover:bg-blue-900/50 transition-colors duration-300 border border-zinc-800">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-white font-medium text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Video - The Hero Asset */}
          <div className="hero-video-container-vfx relative group">
            {/* Glow Effect behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>

            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl bg-black border border-white/10">
              <video
                ref={videoRef}
                className="w-full h-full object-cover scale-[1.01]"
                // Using the provided Cloudinary URL as the primary source
                src='https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352970/Compositing_and_Green_Screen_Integration_-_Loop_owjc0o.mp4'
                muted={isMuted}
                autoPlay
                loop
                playsInline
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-xs font-medium text-white/90 flex items-center gap-2">
                    <MonitorPlay size={12} /> Keyframez VFX
                  </div>
                </div>

                <div className="flex gap-2">
                  <button onClick={toggleMute} className="p-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all">
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <button onClick={togglePlay} className="p-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all">
                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 hidden sm:block animate-bounce-slow">
              <div className="bg-zinc-900 border border-zinc-700 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="font-semibold text-sm">Post-Production Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      ---

      {/* SECTION 2: SOCIAL PROOF STRIP */}
      <div className="border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-center md:justify-between items-center gap-6">

          {/* Custom Google Review Component (using the provided stars SVG) */}
          <div className="group flex items-center gap-4 bg-zinc-950/50 px-6 py-3 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-colors">
            <div className="bg-white p-2 rounded-lg">
              {/* Google Logo SVG (simplified/retained from original) */}
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09L5.82 11.545.64 7.41l6.078-.883L10 1l3.282 5.527 6.078.883-5.18 4.135 1.698 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-zinc-400"><span className="text-white font-bold">4.9/5</span> from 250+ VFX projects delivered</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-zinc-500 text-sm font-medium">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Nuke Compositing</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Houdini FX Pipeline</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Final Color Grading</span>
          </div>
        </div>
      </div>

      ---

      {/* SECTION 3: LIGHT MODE BRIDGE */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-blue-100 rounded-[2rem] transform rotate-3 scale-105 opacity-50"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                <video
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  // Using the provided Cloudinary URL
                  src="https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352922/Train_Shot_-_Green_Screen_vdrbav.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                {/* Floating Highlight */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-gray-200">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-800">Before & After Showcase</span>
                </div>
              </div>
            </div>

            {/* CTA Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
                Ready to elevate your project's <span className="text-blue-600">visual impact?</span>
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Our VFX division is ready to integrate stunning digital elements and post-production polish into your film, commercial, or brand content. Let's discuss your next impossible shot.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={'/portfolio'}>
                <button className="group relative px-8 py-4 bg-zinc-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Background overlay that moves on hover */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-3 text-white font-semibold">
                    <span>View VFX Showreel</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
      <VFXWorkShowcase />
   </>
  );
};


const VFXWorkShowcase = () => {
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

  const workVideos = [
    {
      id: 1,
      title: "Epic Fantasy World",
      category: "CG Integration",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352918/VIVEKANAND_-_GREEN_SCREEN_etbixg.mp4"
    },
    {
      id: 2,
      title: "Sci-Fi Transformation",
      category: "Digital Effects",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352915/SHIVAJI_MAHARAJ_-_GREEN_SCREEN_x0zdva.mp4"
    },
    {
      id: 3,
      title: "Explosion Sequences",
      category: "Particle Effects",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352912/Dr._Chandraprakash_Dwivedi_-_Green_Screen_ffar1t.mp4"
    },
    {
      id: 4,
      title: "Digital Environments",
      category: "Matte Painting",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352891/HARISHCHANDRA_-_GREEN_SCREEN_vio2ns.mp4"
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visual Effects <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our stunning visual effects work that transforms imagination into breathtaking reality across films, commercials, and digital content.
          </p>
        </div>

        {/* Work Grid - Only Videos */}
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
                  src={work.videoUrl}
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

export default VisualEffects;