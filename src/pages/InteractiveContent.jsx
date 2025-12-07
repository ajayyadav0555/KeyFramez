import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
  Play, Pause, Volume2, VolumeX, Zap, Eye, BookOpen, ArrowRight,
  Star,
  CheckCircle2,
  Smartphone,
  Cuboid,
  BookOpenCheck,
  Building2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const InteractiveContent = () => {
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

      tl.fromTo('.reveal-text',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" }
      );

      tl.fromTo('.feature-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" },
        "-=0.6"
      );

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

  const features = [
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Interactive Product Apps",
      desc: "Virtual demos and product configurators with real-time interaction."
    },
    {
      icon: <Cuboid className="w-5 h-5" />,
      title: "AR & VR Experiences",
      desc: "Immersive environments crafted for marketing, training, or education."
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Interactive E-books",
      desc: "Rich multimedia learning content tailored for any age group."
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Architecture VR",
      desc: "Virtual walkthroughs and 3D design presentations for architects."
    }
  ];



  return (
    <>
      <div ref={containerRef} className="bg-zinc-950 text-white overflow-hidden selection:bg-pink-500/30">

        <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/20 rounded-full blur-[128px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[128px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

            <div className="space-y-10">
              <div className="reveal-text space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                  </span>
                  <span className="text-3xl font-semibold tracking-wide uppercase text-zinc-300">Interactive Content Creation</span>
                </div>


                <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                  Empower audiences to explore and engage with your content through            </p>
                <p>We also specialise in providing an end-to-end solution for such interactive contents including the hardware implementation.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card group p-4 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/60 hover:border-pink-500/30 transition-all duration-300">
                    <div className="mb-3 p-2 w-fit rounded-lg bg-gradient-to-br from-pink-500/10 to-violet-500/10 text-pink-400 group-hover:text-pink-300 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-xs text-white mt-1">{feature.desc}</p>
                  </div>
                ))}
              </div>

            </div>

            <div className="hero-video-container relative group sm:w-2xl md:m-w-3xl lg:w-4xl md:h-72 md:-mt-40">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-violet-600 rounded-3xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>

              <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl bg-black border border-white/10">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover scale-[1.01]"
                  src='https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764438734/Interactive_Content_Creation_-_Multi_Loop_ertbry.mp4'
                  muted={isMuted}
                  autoPlay
                  loop
                  playsInline
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              </div>

              <div className="absolute -top-6 -right-6 hidden sm:block animate-bounce-slow">
                <div className="bg-zinc-900 border border-zinc-700 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
                  <span className="font-semibold text-sm">Real-Time Graphics</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-center md:justify-between items-center gap-6">

            <div className="group flex items-center gap-4 bg-zinc-950/50 px-6 py-3 rounded-2xl border border-white/5 hover:border-pink-500/20 transition-colors">
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
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-xs text-zinc-400"><span className="text-white font-bold">4.8/5</span> from 220+ projects</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-zinc-500 text-sm font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-500" /> AR/VR Apps</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Digital Kiosks</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-500" /> Product Configs</span>
            </div>
          </div>
        </div>


      </div>
      <InteractiveWorkShowcase />
    </>
  );
};


const InteractiveWorkShowcase = () => {
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

  const togglePlay = (videoId, videoElement) => {
    if (playingVideo === videoId) {
      videoElement.pause();
      setPlayingVideo(null);
    } else {
      document.querySelectorAll('video').forEach(video => video.pause());

      videoElement.play();
      setPlayingVideo(videoId);
    }
  };

  const toggleMute = (videoElement) => {
    videoElement.muted = !videoElement.muted;
  };

  const handleNavigation = (path) => {
    navigate(path);
  };
 
  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              id: 1,
              title: "Interactive Product Apps",
              category: "Interactive Experiences",
              videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764439050/Interactive_Product_Apps_-_Multi_Loop_vdymn7.mp4",
              description: "Virtual product demos and configurators designed for real-time user interaction.",
              path: "/services/productApps"
            },
            {
              id: 2,
              title: "AR & VR Experiences",
              category: "Immersive Reality",
              videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764438790/AR_VR_Experiences_-_Multi_Loop_uwsjyu.mp4",
              description: "Immersive AR and VR environments crafted for marketing, training, and education.",
              path: "/services/ar-vr"
            },
            {
              id: 3,
              title: "Interactive E-books",
              category: "Digital Learning",
              videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764438871/Cyril_the_Mandrill_-_Multi_Loop_tmefff.mp4",
              description: "Rich multimedia e-books designed for engaging learning across all age groups.",
              path: "/services/e-book"
            },
            {
              id: 4,
              title: "Architecture VR",
              category: "Architectural Visualization",
              videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764438787/Architecture_VR_-_Loop_ppmbdq.mp4",
              description: "Virtual walkthroughs and 3D design presentations for architects and developers.",
              path: "/services/architecture-vr"
            }
          ]


            .map((work) => (
              <div
                key={work.id}
                className="work-item group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-900">
                  <video
                    className="w-full h-full object-cover"
                    src={work.videoUrl}
                    loop
                    playsInline
                    autoPlay
                    muted
                  />


                </div>

                <div className="p-6 flex items-center justify-between">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-snug text-center">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed font-bold">
                      {work.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigation(work.path)}
                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-110 transition-all duration-300 transform group-hover:translate-x-1 shadow-lg"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
        </div>


      </div>

      <style jsx>{`
        .work-item video {
          transition: transform 0.3s ease;
        }
        
        .work-item:hover video {
          transform: scale(1.05);
        }
        
        
        .work-item:hover video {
          animation: gentlePlay 0.5s ease;
        }
        
        @keyframes gentlePlay {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1.05); }
        }
      `}</style>

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

export default InteractiveContent;