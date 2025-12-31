import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
  Play, Pause, Volume2, VolumeX, Camera, Video, Mic, Zap, ArrowRight, Star,
  CheckCircle2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const LiveShotProduction = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // Default auto-play usually true for hero
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

      // Text Content Reveal
      tl.fromTo('.reveal-text',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" }
      );

      // Feature Cards Stagger
      tl.fromTo('.feature-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" },
        "-=0.5"
      );

      // Main Video Pop-in
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
    { icon: <Camera className="w-5 h-5" />, title: "Cinema Cameras", desc: "4K/8K Resolution" },
    { icon: <Video className="w-5 h-5" />, title: "Cinematic Look", desc: "Color Graded" },
    { icon: <Mic className="w-5 h-5" />, title: "Crisp Audio", desc: "Studio Quality" },
    { icon: <Zap className="w-5 h-5" />, title: "Creative Dir.", desc: "End-to-End" }
  ];

  return (
    <>
      <div ref={containerRef} className="bg-zinc-950 text-white overflow-hidden selection:bg-blue-500/30">

        {/* SECTION 1: HERO / LIVE SHOT */}
        <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

          {/* Ambient Background Glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 ">

            {/* Left Content */}
            <div className="space-y-10">
              <div className="reveal-text space-y-6">
                <div className="inline-flex items-center gap-3  py-3  backdrop-blur-md 
                  shadow-2xl">


                  <span className="md:text-5xl text-3xl font-extrabold tracking-tight uppercase 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-blue-400 to-pink-500">
                    Live-shot Video Production
                  </span>
                </div>

                {/* <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                  Your Story, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                    Captured Perfectly.
                  </span>
                </h2> */}

                <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                  Bring authenticity and emotion to your brand with our high-quality corporate and live-shot videos. <br />
                  From concept, scripting, and shooting to post-production, we craft professional films that communicate your story with clarity and visual excellence.

                </p>
              </div>

              {/* Feature Grid (Bento Style) */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card group p-4 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-800/60 hover:border-blue-500/30 transition-all duration-300">
                    <div className="mb-3 p-2 w-fit rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-zinc-200">{feature.title}</h4>
                    <p className="text-xs text-zinc-500 mt-1">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Video - The Hero Asset */}
          {/* 1. Added w-full for mobile and max-w constraints for large screens */}
<div className="hero-video-container relative group w-full max-w-5xl mx-auto px-4 lg:-mt-40">
  
  {/* Glow Effect - Matches the responsiveness of the parent */}
  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] opacity-20 group-hover:opacity-40 blur-xl transition duration-500"></div>

  {/* 2. Changed rounded-3xl to slightly larger for the 'Big' feel, kept aspect-video */}
  <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-2xl bg-black border border-white/10">
    <video
      ref={videoRef}
      /* 3. Changed object-cover to object-center to ensure the video looks good at any size */
      className="w-full h-full object-cover scale-[1.01]" 
      src='https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764349116/1_Live-shot_Video_Production_exqgta.mp4'
      muted={isMuted}
      autoPlay
      loop
      playsInline
    />

    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
  </div>

  {/* Floating Badge - Optimized position for responsive screens */}
  <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 hidden xs:block animate-bounce-slow">
    <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-2xl shadow-xl flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      <span className="font-semibold text-xs sm:text-sm tracking-wide">Now Recording</span>
    </div>
  </div>
</div>
          </div>
        </section>


        {/* SECTION 2: SOCIAL PROOF STRIP */}
        <div className="border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-center md:justify-between items-center gap-6">

            {/* Custom Google Review Component */}
            <div className="group flex items-center gap-4 bg-zinc-950/50 px-6 py-3 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-colors">
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
                <p className="text-xs text-zinc-400"><span className="text-white font-bold">4.9/5</span> based on 320+ reviews</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8 text-zinc-500 text-sm font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Verified Professionals</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Fast Turnaround</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Global Coverage</span>
            </div>

          </div>
        </div>

        {/* SECTION 3: PORTFOLIO BRIDGE (Light Mode for contrast) */}


      </div>
      <OurWorkShowcase />
    </>
  );
};

export default LiveShotProduction;





const OurWorkShowcase = () => {
  const sectionRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const navigate = useNavigate()
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
    // {
    //   id: 1,
    //   title: "Corporate Brand Film",
    //   category: "Live-shot Production",
    //   thumbnail: "/api/placeholder/400/300",
    //   videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764349116/1_Live-shot_Video_Production_exqgta.mp4",
    //   description: "Cinematic corporate storytelling for global brand"
    // },
    {
      id: 2,
      title: "Product Explainer",
      category: "Animation",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764348729/BIG_BAZAAR_SPARK_-_Loop_mfpoox.mp4",
      description: "Animated product demonstration video"
    },
    {
      id: 3,
      title: "Training Module",
      category: "E-Learning",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764264915/Bugworks_-_Loop_ku2ksm.mp4",
      description: "Interactive learning experience"
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "Live-shot Production",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764264910/LANDMARK_-_Loop_oq0t1g.mp4",
      description: "Engaging content for social platforms"
    },
    {
      id: 5,
      title: "3D Product Visualization",
      category: "3D Modeling",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764264882/IMP_POWER_ENERGY_-_Loop_f7nd6t.mp4",
      description: "Realistic product rendering and animation"
    },
    // {
    //   id: 6,
    //   title: "Character Animation",
    //   category: "Animation",
    //   thumbnail: "/api/placeholder/400/300",
    //   videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764264882/IMP_POWER_ENERGY_-_Loop_f7nd6t.mp4",
    //   description: "Bringing characters to life with personality"
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
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning visual creations that have captivated audiences and delivered results for our clients.
          </p>
        </div> */}

        {/* Work Grid */}
        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
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

                {/* Play/Pause Button */}
                {/* <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const video = e.target.closest('.relative').querySelector('video');
                    togglePlay(work.id, video);
                  }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full p-4 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                    {playingVideo === work.id ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white fill-current" />
                    )}
                  </div>
                </button> */}

                {/* Video Controls */}
                {/* <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const video = e.target.closest('.relative').querySelector('video');
                      togglePlay(work.id, video);
                    }}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                  >
                    {playingVideo === work.id ? (
                      <Pause className="w-4 h-4 text-gray-900" />
                    ) : (
                      <Play className="w-4 h-4 text-gray-900" />
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const video = e.target.closest('.relative').querySelector('video');
                      toggleMute(video);
                    }}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                  >
                    <Volume2 className="w-4 h-4 text-gray-900" />
                  </button>
                </div> */}

                {/* Category Badge */}
                {/* <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {work.category}
                  </span>
                </div> */}
              </div>

              {/* Content */}
              {/* <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {work.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Auto-play on hover</span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-300">
                    View Case Study →
                  </button>
                </div>
              </div> */}
            </div>
          ))}
        </div>

        {/* CTA Section */}

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












// <section className="bg-white py-24 lg:py-32">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             {/* Visual */}
//             <div className="relative order-2 lg:order-1">
//               <div className="absolute inset-0 bg-blue-100 rounded-[2rem] transform rotate-3 scale-105 opacity-50"></div>
//               <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
//                 <video
//                   className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-in-out"
//                   src="https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764348729/BIG_BAZAAR_SPARK_-_Loop_mfpoox.mp4"
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                 />
//                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
//               </div>
//             </div>

//             {/* CTA Content */}
//             <div className="order-1 lg:order-2 space-y-8">
//               <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
//                 Not just videos. <br />
//                 We build <span className="text-blue-600">Assets.</span>
//               </h2>
//               <p className="text-lg text-zinc-600 leading-relaxed">
//                 Ready to see what happens when high-end production meets strategic storytelling? Browse our extensive portfolio of corporate and commercial work.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link to={'/portfolio'}> <button className="group relative px-8 py-4 bg-zinc-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
//                   <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <div className="relative flex items-center gap-3 text-white font-semibold">
//                     <span>View Full Portfolio</span>
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </button></Link>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>