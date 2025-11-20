import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, Users, Heart, Zap, Star, Sparkles } from 'lucide-react';

const CharacterAnimation = () => {
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

    tl.fromTo('.character-content',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    tl.fromTo('.character-video',
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
    "Animated Films",
    "Commercials & Ads", 
    "Explainer Videos",
    "Brand Storytelling",
    "Video Games",
    "Educational Content"
  ];

  const features = [
    { icon: <Users className="w-5 h-5" />, text: "Expressive Characters" },
    { icon: <Heart className="w-5 h-5" />, text: "Emotional Storytelling" },
    { icon: <Zap className="w-5 h-5" />, text: "2D & 3D Animation" },
    { icon: <Star className="w-5 h-5" />, text: "Motion Capture" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="character-content space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-600 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                Character Animation
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Bring Stories & Emotions{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  to Life
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We create expressive, dynamic characters that connect with audiences through movement, 
                personality, and storytelling. From 2D and 3D animation to motion capture and CGI, 
                our team combines artistry and technology to craft lifelike performances that captivate viewers.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Perfect For:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="service-feature flex items-center gap-3 p-3 bg-white rounded-xl hover:bg-purple-50 transition-all duration-300 hover:scale-105">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-purple-600">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              Animate Your Characters
            </button>
          </div>

          {/* Right Video Section */}
          <div className="character-video relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Video Player */}
              <video
                ref={videoRef}
                className="w-full h-auto aspect-video object-cover"
                poster="/api/placeholder/800/450"
                muted={isMuted}
                loop
                playsInline
              >
                <source src="/videos/character-animation-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Video Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <button
                  onClick={togglePlay}
                  className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200 transform hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-gray-900" />
                  ) : (
                    <Play className="w-5 h-5 text-gray-900" />
                  )}
                </button>
                
                <button
                  onClick={toggleMute}
                  className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200 transform hover:scale-110"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-gray-900" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-gray-900" />
                  )}
                </button>
              </div>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={togglePlay}
                    className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full p-6 hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
                  >
                    <Play className="w-10 h-10 text-white fill-current" />
                  </button>
                </div>
              )}
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl shadow-xl animate-pulse">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Character Art
              </div>
            </div>
          </div>
        </div>
      </div>
      <CharacterWorkShowcase />
    </section>
  );
};

const CharacterWorkShowcase = () => {
  const sectionRef = useRef(null);
  const [playingVideo, setPlayingVideo] = useState(null);

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
      title: "Fantasy Adventure",
      category: "3D Character Animation",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/fantasy-characters.mp4",
      description: "Epic fantasy characters with detailed expressions and movements"
    },
    {
      id: 2,
      title: "Brand Mascot",
      category: "2D Animation",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/brand-mascot.mp4",
      description: "Lovable mascot character bringing brand personality to life"
    },
    {
      id: 3,
      title: "Emotional Story",
      category: "Character Performance",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/emotional-story.mp4",
      description: "Deep emotional character performances that connect with viewers"
    },
    {
      id: 4,
      title: "Game Characters",
      category: "Game Animation",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/game-characters.mp4",
      description: "Dynamic character animations for immersive gaming experiences"
    },
    {
      id: 5,
      title: "Commercial Spot",
      category: "Advertisement",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/commercial-characters.mp4",
      description: "Engaging character animations for memorable advertising campaigns"
    },
    {
      id: 6,
      title: "Educational Series",
      category: "Learning Content",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/educational-characters.mp4",
      description: "Friendly animated characters making learning fun and engaging"
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Character Animation <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we bring characters to life with personality, emotion, and captivating performances that turn imagination into motion.
          </p>
        </div>

        {/* Work Grid */}
        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workVideos.map((work) => (
            <div 
              key={work.id}
              className="work-item group bg-gradient-to-br from-white to-purple-50/30 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-purple-100/50"
            >
              {/* Video Container */}
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  poster={work.thumbnail}
                  loop
                  playsInline
                  onClick={(e) => togglePlay(work.id, e.target)}
                >
                  <source src={work.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Play/Pause Button */}
                <button
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
                </button>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {work.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Hover to play</span>
                  <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors duration-300">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Bring Your Characters to Life?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's create memorable characters that move, feel, and inspire your audience.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your Animation Project
            </button>
          </div>
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
    </section>
  );
};

export default CharacterAnimation;