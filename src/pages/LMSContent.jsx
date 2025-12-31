import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
  Play, Pause, Volume2, VolumeX, BookOpen, Monitor, Target, Zap, ArrowRight, CheckCircle2,
  Trophy,
  Users,
  Star
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';


import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const LMSLearningContent = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
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
  const services = [
    "Animated lessons",
    "Intermittent interactive assessments",
    "Gamified content",
    "SCORM / AICC compatible content"
  ];

  const features = [
    { icon: <Monitor className="w-5 h-5" />, title: "LMS Integration", desc: "SCORM/AICC compatible" },
    { icon: <Zap className="w-5 h-5" />, title: "Interactive Content", desc: "Quizzes & simulations" },
    { icon: <Target className="w-5 h-5" />, title: "Progress Tracking", desc: "Detailed learner analytics" },
    { icon: <Trophy className="w-5 h-5" />, title: "Gamified Learning", desc: "Badges, points, and leaderboards" }
  ];

  return (
    <>
      <div ref={containerRef} className="bg-zinc-950 text-white overflow-hidden selection:bg-purple-500/30">

        {/* SECTION 1: HERO */}
        <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

          {/* Ambient Background Glows (Purple/Blue for Education) */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

            {/* Left Content */}
            <div className="space-y-10">
              <div className="reveal-text space-y-6">
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  <span className="text-xs font-semibold tracking-wide uppercase text-zinc-300">LMS E-Learning Content</span>
                </div> */}

                <div className="inline-flex items-center gap-3  py-3  backdrop-blur-md 
                  shadow-2xl">
                  <span className="md:text-5xl md:text-nowrap text-3xl font-extrabold tracking-tight uppercase 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-blue-400 to-indigo-500">
                   LMS E-Learning Content
                  </span>
                </div>

                {/* <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Empower Learning Through <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Innovation.
                </span>
              </h2> */}

                <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                  We design custom LMS-compatible e-learning modules that merge animation, video, and gamified interactivity to make learning truly engaging.
                  Ideal for corporate training, academic programs, or onboarding — our content is built to inform, inspire, and retain attention.

                </p>
              </div>

              <div className="space-y-4 reveal-text">
                  <h3 className="text-xl font-semibold text-white">
                Deliverables Include:
              </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="service-feature flex items-center gap-3 p-3
                   bg-zinc-900 rounded-xl
                   hover:bg-purple-900/50
                   transition-colors duration-300
                   border border-zinc-800
                   min-h-[56px]"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full shrink-0" />
                      <span className="text-white font-medium text-sm leading-tight">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Video - The Hero Asset */}
            {/* Parent: w-full ensures it touches edges on mobile; max-w-5xl gives it a premium large look on desktop */}
<div className="hero-video-container relative group w-full max-w-5xl mx-auto px-4 lg:-mt-20">
  
  {/* Modern Glow: cyan-indigo gradient to match the E-Learning/Tech vibe */}
  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-[2rem] opacity-20 group-hover:opacity-40 blur-xl transition duration-500"></div>

  {/* aspect-video is the "secret sauce" - it calculates height automatically based on current width */}
  <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-2xl bg-black border border-white/10">
    <video
      ref={videoRef}
      className="w-full h-full object-cover scale-[1.01]"
      src='https://res.cloudinary.com/dq3ubcgdd/video/upload/v1765655257/LMS-Based_E-Learning_Content_Creation_-_Multi_Loop_skl5ss.mp4'
      muted={isMuted}
      autoPlay
      loop
      playsInline
    />

    {/* Elegant darkening gradient at the bottom for visual depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
    
    {/* Hover Label: Modern touch for portfolio sites */}
    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-semibold">LMS & E-Learning</span>
    </div>
  </div>
</div>
          </div>
        </section>

      

        {/* SECTION 2: SOCIAL PROOF STRIP */}
        <div className="border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-center md:justify-between items-center gap-6">

            {/* Custom Google Review Component */}
            <div className="group flex items-center gap-4 bg-zinc-950/50 px-6 py-3 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-colors">
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
                <p className="text-xs text-zinc-400"><span className="text-white font-bold">4.8/5</span> from 220+ e-learning modules</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-zinc-500 text-sm font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Custom Storyboards</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Full Accessibility</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Multilingual Support</span>
            </div>
          </div>
        </div>

     

        {/* SECTION 3: LIGHT MODE BRIDGE */}
     
      </div>
      <LMSWorkShowcase />
    </>
  );
};


const LMSWorkShowcase = () => {
  const sectionRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const navigate = useNavigate();

 

  const workVideos = [
    {
      id: 1,
      title: "Corporate Training Suite",
      category: "LMS Integration",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764438939/Employee_Training_Modules_-_Loop_xzl01f.mp4"
    },
    // {
    //   id: 2,
    //   title: "Interactive Courseware",
    //   category: "E-Learning",
    //   videoUrl: "/videos/interactive-course.mp4"
    // },
    // {
    //   id: 3,
    //   title: "Skill Development Program",
    //   category: "Professional Training",
    //   videoUrl: "/videos/skill-development.mp4"
    // },
    // {
    //   id: 4,
    //   title: "Onboarding Experience",
    //   category: "Employee Training",
    //   videoUrl: "/videos/onboarding-experience.mp4"
    // }
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
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            E-Learning Content <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our interactive learning modules and digital education solutions that transform traditional training into engaging digital experiences.
          </p>
        </div> */}

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
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {work.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Learning Experience?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's create engaging e-learning content that educates, inspires, and delivers measurable results.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your E-Learning Project
            </button>
          </div>
        </div> */}
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

export default LMSLearningContent;