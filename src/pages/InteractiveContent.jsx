import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, Zap, Eye, BookOpen, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BiCube } from 'react-icons/bi';

const InteractiveContent = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo('.interactive-content',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    tl.fromTo('.interactive-video',
      { opacity: 0, x: 50, scale: 0.9 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=0.5"
    );

    tl.fromTo('.service-feature',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
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
    "Marketing Campaigns",
    "Educational Content",
    "Product Launches",
    "Virtual Events",
    "Training Modules",
    "Brand Experiences"
  ];

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Immersive Experiences" },
    { icon: <Eye className="w-5 h-5" />, text: "User Interaction" },
    { icon: <BookOpen className="w-5 h-5" />, text: "Digital Storytelling" },
    { icon: <BiCube className="w-5 h-5" />, text: "3D Integration" }
  ];

  return (
    <section ref={sectionRef} className="py-2 bg-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 " style={{
        backgroundColor: "rgb(38, 38, 38)"
      }}>
        <div className="grid lg:grid-cols-2 gap-32 items-center max-w-7xl mx-auto py-20">

          {/* Left Content */}
          <div className="interactive-content space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm">
                <Zap className="w-4 h-4" />
                Interactive Content Creation
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Engage Your Audience Like{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Never Before
                </span>
              </h2>

              <p className="text-lg text-white leading-relaxed">
                Engage your audience like never before with our Interactive Content Creation services. 
                We design and develop immersive digital experiences that invite users to explore, interact, 
                and connect with your brand in meaningful ways.
              </p>

              <p className="text-lg text-white leading-relaxed">
                From Interactive videos, Interactive E-books, AR/VR experiences, and 3D Product Demos to Virtual Tours, 
                we blend creativity, technology, and storytelling to deliver content that captivates attention and drives engagement.
              </p>

              {/* <p className="text-lg text-white leading-relaxed">
                Perfect for marketing campaigns, presentations, education, and entertainment, our interactive creations 
                transform passive viewers into active participants — making your message memorable, dynamic, and impactful.
              </p> */}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 
                 rounded-2xl border-4 border-blue-800"
                >
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>

                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Perfect For:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="service-feature flex items-center gap-3 p-3 bg-gray-800 rounded-xl hover:bg-blue-900 transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-white font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="interactive-video relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Video Player */}
              <video
                ref={videoRef}
                className="w-full h-auto aspect-video object-cover"
                src='https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352101/3D_GLASS_slyk4d.mp4'
                muted
                autoPlay
                loop
                playsInline
              >
                <source src="/videos/interactive-content-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-xl animate-pulse">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Zap className="w-4 h-4" />
                  Interactive
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="flex items-center justify-center pb-10">
          <div className="group relative">
            <div className="flex items-center sm:gap-4 bg-white/95 backdrop-blur-xl sm:px-6 sm:py-4 py-2 rounded-2xl shadow-lg border border-gray-200/80 hover:shadow-xl transition-all duration-500 hover:scale-105 w-fit">

              {/* Google Icon with Animation */}
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-inner border border-gray-200/60 group-hover:scale-110 transition-transform duration-500">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#4285F4] shadow-lg">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="white" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="white" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="white" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="white" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              </div>

              {/* Rating Content */}
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">4.8</span>
                    <span className="text-sm text-gray-500">/5</span>
                  </div>
                  <div className="flex items-center gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09L5.82 11.545.64 7.41l6.078-.883L10 1l3.282 5.527 6.078.883-5.18 4.135 1.698 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="h-8 w-px bg-gradient-to-b from-gray-300/50 to-transparent"></div>

                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3 h-3 text-green-500 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09L5.82 11.545.64 7.41l6.078-.883L10 1l3.282 5.527 6.078.883-5.18 4.135 1.698 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Google Reviews</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-0.5">220+ interactive projects delivered</p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-full border border-green-200/60">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-green-700">Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Video */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
              <video
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352103/AR-VR_SIDE_BY_SIDE_VIDEOS_ij25b5.mp4"
                autoPlay
                muted
                loop
              />
            </div>
          </div>

          {/* Right Side - Text + Button Only */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Ready to explore more interactive experiences?
            </h2>

            {/* CTA Button Only */}
            <button className="group w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <div className="flex items-center justify-center gap-3">
                <span>View Interactive Portfolio</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>

        </div>
      </div>

      <InteractiveWorkShowcase />
    </section>
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

  const workVideos = [
    {
      id: 1,
      title: "AR/VR Experience",
      category: "Immersive Tech",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352101/3D_GLASS_slyk4d.mp4",
      description: "Augmented and Virtual Reality interactive experiences",
      path: "/services/ar-vr"
    },
    {
      id: 2,
      title: "Architecture VR",
      category: "Virtual Tours",
      videoUrl: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352103/AR-VR_SIDE_BY_SIDE_VIDEOS_ij25b5.mp4",
      description: "Immersive architectural walkthroughs in virtual reality",
      path: "/services/architecture-vr"
    },
    // {
    //   id: 3,
    //   title: "Interactive E-books",
    //   category: "Digital Publishing",
    //   videoUrl: "/videos/interactive-ebooks.mp4",
    //   description: "Engaging digital books with interactive elements",
    //   path: "/services/e-book"
    // },
    // {
    //   id: 4,
    //   title: "Interactive Product Books",
    //   category: "Product Marketing",
    //   videoUrl: "/videos/interactive-product-books.mp4",
    //   description: "Dynamic product catalogs with interactive features",
    //   path: "/services/productApps"
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

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Content <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of immersive interactive experiences that transform passive viewers into active participants.
          </p>
        </div>

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
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}

                {/* Category Badge
                <div className="absolute top-4 left-4">
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
                <button 
                  onClick={() => handleNavigation(work.path)}
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-110 transition-all duration-300 transform group-hover:translate-x-1 shadow-lg"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
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

export default InteractiveContent;