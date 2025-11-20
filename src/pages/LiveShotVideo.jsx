import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, Camera, Video, Mic, Zap } from 'lucide-react';

const LiveShotProduction = () => {
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

    tl.fromTo('.live-shot-content',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    tl.fromTo('.live-shot-video',
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
    "Company profiles",
    "Corporate films", 
    "Product Showcases",
    "Leadership Interviews",
    "Testimonials",
    "Brand Films",
    "Social Media Content"
  ];

  const features = [
    { icon: <Camera className="w-5 h-5" />, text: "Professional-grade cameras" },
    { icon: <Video className="w-5 h-5" />, text: "Cinematic filming" },
    { icon: <Mic className="w-5 h-5" />, text: "High-quality sound" },
    { icon: <Zap className="w-5 h-5" />, text: "Creative direction" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="live-shot-content space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold text-sm">
                <Camera className="w-4 h-4" />
                Live-shot Video Production
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Bring Your Ideas to Life with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Stunning Real-World Visuals
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Live-shot Video Production service captures authentic moments, emotions, and stories 
                through cinematic filming and creative direction. From concept development to post-production, 
                we deliver high-quality videos that connect with audiences and leave a lasting impact.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">What We Create:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="service-feature flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your Project
            </button>
          </div>

          {/* Right Video Section */}
          <div className="live-shot-video relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Video Player */}
              <video
                ref={videoRef}
                className="w-full h-auto aspect-video object-cover"
                poster="/api/placeholder/800/450" // Replace with your live-shot video thumbnail
                muted={isMuted}
                loop
                playsInline
              >
                <source src="/videos/live-shot-demo.mp4" type="video/mp4" />
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
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-xl animate-pulse">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Camera className="w-4 h-4" />
                Live Production
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurWorkShowcase/>
    </section>
  );
};

export default LiveShotProduction;




const OurWorkShowcase = () => {
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
      title: "Corporate Brand Film",
      category: "Live-shot Production",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/corporate-brand.mp4",
      description: "Cinematic corporate storytelling for global brand"
    },
    {
      id: 2,
      title: "Product Explainer",
      category: "Animation",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/product-explainer.mp4",
      description: "Animated product demonstration video"
    },
    {
      id: 3,
      title: "Training Module",
      category: "E-Learning",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/training-module.mp4",
      description: "Interactive learning experience"
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "Live-shot Production",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/social-media.mp4",
      description: "Engaging content for social platforms"
    },
    {
      id: 5,
      title: "3D Product Visualization",
      category: "3D Modeling",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/3d-visualization.mp4",
      description: "Realistic product rendering and animation"
    },
    {
      id: 6,
      title: "Character Animation",
      category: "Animation",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/character-animation.mp4",
      description: "Bringing characters to life with personality"
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
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning visual creations that have captivated audiences and delivered results for our clients.
          </p>
        </div>

        {/* Work Grid */}
        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workVideos.map((work) => (
            <div 
              key={work.id}
              className="work-item group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
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
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
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
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can bring your vision to life with our expertise.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your Project
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

