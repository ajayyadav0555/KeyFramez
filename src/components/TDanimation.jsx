import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, Smartphone, Zap, Eye, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BiCube } from 'react-icons/bi';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TDanimation = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo('.product-apps-content',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
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

  const services = [
    "E-commerce Integration",
    "Marketing Campaigns",
    "Sales Presentations",
    "Virtual Exhibitions",
    "Product Demos",
    "Customer Education"
  ];

  const features = [
    { icon: <Smartphone className="w-5 h-5" />, text: "3D Product Visualization" },
    { icon: <Zap className="w-5 h-5" />, text: "Real-time Interaction" },
    { icon: <Eye className="w-5 h-5" />, text: "AR Integration" },
    { icon: <BiCube className="w-5 h-5" />, text: "Virtual Customization" }
  ];

  return (
    <section className=" bg-zinc-950 text-white overflow-hidden sm:mt-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center py-20">

          {/* Left Content */}
          <div className="product-apps-content space-y-10">
            <div className="space-y-6">
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-full backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                <span className="text-3xl font-semibold tracking-wide uppercase text-zinc-300">2D CHARACTER ANIMATION</span>
              </div> */}

               <div className="inline-flex items-center gap-3  py-3  backdrop-blur-md 
                  shadow-2xl">


                  <span className="md:text-5xl text-3xl font-extrabold tracking-tight uppercase 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-blue-400 to-pink-500">
                   2D CHARACTER ANIMATION
                  </span>
                </div>




              <p className="text-lg text-zinc-400 leading-relaxed">
                Transform reading into an engaging, multimedia experience with our Interactive E-Book solutions. We design and develop dynamic digital books that go beyond text — combining animations, videos, sound effects, quizzes, and interactive elements to keep readers captivated from start to finish.
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed">
                Perfect for education, training, storytelling, and marketing, our interactive e-books turn static content into immersive journeys that inform, entertain, and inspire. With responsive design and cross-platform compatibility, we ensure a seamless experience on any device.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Bring your stories and ideas to life through interactive e-books that educate, engage, and delight your audience.              </p>

            </div>

          </div>

        {/* Parent: w-full for mobile, max-w-5xl for cinematic desktop width. mx-auto for centering. */}
<div className="product-apps-video relative group w-full max-w-5xl mx-auto px-4 lg:-mt-40">
  
  {/* Glow Effect: Uses responsive blur and radius */}
  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-violet-600 rounded-[2rem] opacity-20 group-hover:opacity-40 blur-xl transition duration-500"></div>

  {/* Main Container: aspect-video handles height fluidly based on current width */}
  <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-2xl bg-black border border-white/10">
    <video
      ref={videoRef}
      className="w-full h-full object-cover scale-[1.01]"
      src='https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764440404/2D_CHARECTER_ANIMATION_-_MULTI_LOOP_j37jls.mp4'
      muted={isMuted}
      autoPlay
      loop
      playsInline
    />

    {/* Elegant darkening gradient for depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
    
    {/* Hover Reveal Label */}
    {/* <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-white/70 text-[10px] uppercase tracking-[0.3em] font-bold">2D Character Animation</span>
    </div> */}
  </div>

  {/* Floating Badge: Hidden on tiny screens, scales on larger ones */}
  <div className="absolute -top-4 -right-2 sm:-top-8 sm:-right-8 hidden xs:flex animate-bounce-slow">
    <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700 text-white px-4 py-2 sm:px-5 sm:py-3 rounded-2xl shadow-xl flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
      <span className="font-semibold text-xs sm:text-sm">High Engagement</span>
    </div>
  </div>
</div>
        </div>


      </div>
      <div className="border-y border-white/5 bg-zinc-900/30 backdrop-blur-sm w-full">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-center md:justify-between items-center gap-6">

          <div className="group flex items-center gap-4 bg-zinc-950/50 px-6 py-3 rounded-2xl border border-white/5 hover:border-pink-500/20 transition-colors ">
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
      <InteractiveProductAppsWorkShowcase />
    </section>
  );
};

const InteractiveProductAppsWorkShowcase = () => {
  const sectionRef = useRef(null);



  const workVideos = [
    "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764439994/AIML_Capabilities_AV_xfeu8y.mp4"
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {workVideos.map((work) => (
            <div
              key={work.id}
              className="work-item group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  src={work}
                  loop
                  playsInline
                  autoPlay
                  muted
                />
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

export default TDanimation;