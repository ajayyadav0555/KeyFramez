import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, BookOpen, Users, Target, Zap, Monitor, Award, Globe } from 'lucide-react';

const LMSLearningContent = () => {
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

    tl.fromTo('.lms-content',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    tl.fromTo('.lms-video',
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
    "Corporate Training",
    "Educational Courses", 
    "Employee Onboarding",
    "Skill Development",
    "Compliance Training",
    "Professional Certifications"
  ];

  const features = [
    { icon: <Monitor className="w-5 h-5" />, text: "LMS Integration" },
    { icon: <Zap className="w-5 h-5" />, text: "Interactive Content" },
    { icon: <Target className="w-5 h-5" />, text: "Progress Tracking" },
    { icon: <Award className="w-5 h-5" />, text: "Gamified Learning" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lms-content space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-600 font-semibold text-sm">
                <BookOpen className="w-4 h-4" />
                LMS-Based E-Learning Content
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Empower Learning Through{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We design and develop interactive, engaging, and structured digital learning modules 
                that integrate seamlessly with all major Learning Management Systems (LMS). Transform 
                traditional learning into dynamic digital experiences that educate, inspire, and perform.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Perfect For:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="service-feature flex items-center gap-3 p-3 bg-white rounded-xl hover:bg-green-50 transition-all duration-300 hover:scale-105">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-green-600">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              Create E-Learning Content
            </button>
          </div>

          {/* Right Video Section */}
          <div className="lms-video relative">
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
                <source src="/videos/lms-learning-demo.mp4" type="video/mp4" />
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
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl animate-pulse">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Globe className="w-4 h-4" />
                LMS Ready
              </div>
            </div>
          </div>
        </div>
      </div>
      <LMSWorkShowcase />
    </section>
  );
};

const LMSWorkShowcase = () => {
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
      title: "Corporate Training Suite",
      category: "LMS Integration",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/corporate-training.mp4",
      description: "Comprehensive employee training modules with progress tracking"
    },
    {
      id: 2,
      title: "Interactive Courseware",
      category: "E-Learning",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/interactive-course.mp4",
      description: "Engaging learning experiences with quizzes and assessments"
    },
    {
      id: 3,
      title: "Skill Development Program",
      category: "Professional Training",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/skill-development.mp4",
      description: "Step-by-step skill building with interactive simulations"
    },
    {
      id: 4,
      title: "Onboarding Experience",
      category: "Employee Training",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/onboarding-experience.mp4",
      description: "Streamlined new hire orientation with gamified elements"
    },
    {
      id: 5,
      title: "Compliance Training",
      category: "Regulatory Learning",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/compliance-training.mp4",
      description: "Mandatory training with certification and tracking features"
    },
    {
      id: 6,
      title: "Educational Curriculum",
      category: "Academic Learning",
      thumbnail: "/api/placeholder/400/300",
      videoUrl: "/videos/educational-curriculum.mp4",
      description: "Structured academic content with interactive lessons"
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
            E-Learning Content <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our interactive learning modules and digital education solutions that transform traditional training into engaging digital experiences.
          </p>
        </div>

        {/* Work Grid */}
        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workVideos.map((work) => (
            <div 
              key={work.id}
              className="work-item group bg-gradient-to-br from-white to-green-50/30 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-green-100/50"
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
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {work.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Hover to play</span>
                  <button className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors duration-300">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Learning Experience?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's create engaging e-learning content that educates, inspires, and delivers measurable results.
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Start Your E-Learning Project
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

export default LMSLearningContent;