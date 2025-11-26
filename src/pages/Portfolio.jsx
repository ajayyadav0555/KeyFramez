import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, Filter, ArrowRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const [selectedService, setSelectedService] = useState('All');
    const [playingVideo, setPlayingVideo] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    const services = [
        'All',
        'Explainer Videos',
        'Ad Films',
        'Corporate Videos',
        '3D Modeling',
        '3D Architectural Designs',
        '3D Interior Designs',
        'Interactive Videos',
        'Live-action',
        '2D Animation',
        '3D Animation',
        'Virtual Event'
    ];

    const portfolioItems = [
        // Explainer Videos
        {
            id: 1,
            title: "SaaS Product Explainer",
            service: "Explainer Videos",
            category: "Product Education",
            videoUrl: "/video.mp4",
            description: "Animated explainer video for software platform"
        },
        {
            id: 2,
            title: "Educational Series",
            service: "Explainer Videos",
            category: "Learning Content",
            videoUrl: "/video.mp4",
            description: "Series of educational explainer videos"
        },

        // Ad Films
        {
            id: 3,
            title: "Brand Campaign Ad",
            service: "Ad Films",
            category: "Commercial",
            videoUrl: "/video.mp4",
            description: "30-second brand advertisement film"
        },
        {
            id: 4,
            title: "Product Launch Ad",
            service: "Ad Films",
            category: "Marketing",
            videoUrl: "/video.mp4",
            description: "Product launch commercial spot"
        },

        // Corporate Videos
        {
            id: 5,
            title: "Company Profile",
            service: "Corporate Videos",
            category: "Brand Story",
            videoUrl: "/video.mp4",
            description: "Corporate brand introduction video"
        },
        {
            id: 6,
            title: "Leadership Interviews",
            service: "Corporate Videos",
            category: "Executive Content",
            videoUrl: "/video.mp4",
            description: "Executive interview series"
        },

        // 3D Modeling
        {
            id: 7,
            title: "Product Visualization",
            service: "3D Modeling",
            category: "Product Design",
            videoUrl: "/video.mp4",
            description: "3D product model and rendering"
        },
        {
            id: 8,
            title: "Character Modeling",
            service: "3D Modeling",
            category: "Character Design",
            videoUrl: "/video.mp4",
            description: "3D character modeling and texturing"
        },

        // 3D Architectural Designs
        {
            id: 9,
            title: "Modern Villa Design",
            service: "3D Architectural Designs",
            category: "Residential",
            videoUrl: "/video.mp4",
            description: "Architectural visualization of modern villa"
        },
        {
            id: 10,
            title: "Commercial Complex",
            service: "3D Architectural Designs",
            category: "Commercial",
            videoUrl: "/video.mp4",
            description: "Large-scale commercial building design"
        },

        // 3D Interior Designs
        {
            id: 11,
            title: "Luxury Apartment",
            service: "3D Interior Designs",
            category: "Residential Interior",
            videoUrl: "/video.mp4",
            description: "High-end apartment interior visualization"
        },
        {
            id: 12,
            title: "Office Space Design",
            service: "3D Interior Designs",
            category: "Commercial Interior",
            videoUrl: "/video.mp4",
            description: "Modern office interior design"
        },

        // Interactive Videos
        {
            id: 13,
            title: "Interactive Training",
            service: "Interactive Videos",
            category: "E-Learning",
            videoUrl: "/video.mp4",
            description: "Interactive training video with quizzes"
        },
        {
            id: 14,
            title: "Brand Experience",
            service: "Interactive Videos",
            category: "Marketing",
            videoUrl: "/video.mp4",
            description: "Interactive brand storytelling experience"
        },

        // Live-action
        {
            id: 15,
            title: "Documentary Series",
            service: "Live-action",
            category: "Documentary",
            videoUrl: "/video.mp4",
            description: "Live-action documentary production"
        },
        {
            id: 16,
            title: "Event Coverage",
            service: "Live-action",
            category: "Event Video",
            videoUrl: "/video.mp4",
            description: "Live event filming and coverage"
        },

        // 2D Animation
        {
            id: 17,
            title: "Character Animation",
            service: "2D Animation",
            category: "Character Animation",
            videoUrl: "/video.mp4",
            description: "2D character animation series"
        },
        {
            id: 18,
            title: "Motion Graphics",
            service: "2D Animation",
            category: "Motion Design",
            videoUrl: "/video.mp4",
            description: "2D motion graphics animation"
        },

        // 3D Animation
        {
            id: 19,
            title: "Animated Short Film",
            service: "3D Animation",
            category: "Entertainment",
            videoUrl: "/video.mp4",
            description: "3D animated short film production"
        },
        {
            id: 20,
            title: "Product Animation",
            service: "3D Animation",
            category: "Product Demo",
            videoUrl: "/video.mp4",
            description: "3D product animation and demonstration"
        },

        // Virtual Event
        {
            id: 21,
            title: "Virtual Conference",
            service: "Virtual Event",
            category: "Conference",
            videoUrl: "/video.mp4",
            description: "Virtual event production and streaming"
        },
        {
            id: 22,
            title: "Online Summit",
            service: "Virtual Event",
            category: "Summit",
            videoUrl: "/video.mp4",
            description: "Virtual summit with interactive elements"
        }
    ];

    const filteredItems = selectedService === 'All' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.service === selectedService);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo('.portfolio-header',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );

        tl.fromTo('.service-filter',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
            "-=0.5"
        );

        tl.fromTo('.portfolio-item',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
            "-=0.3"
        );
    }, []);

    // Animation when filter changes
    useEffect(() => {
        gsap.fromTo('.portfolio-item',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" }
        );
    }, [selectedService]);

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

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setIsFilterOpen(false);
    };

    const getServiceCount = (service) => {
        if (service === 'All') return portfolioItems.length;
        return portfolioItems.filter(item => item.service === service).length;
    };

    return (
        <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="portfolio-header text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Explore our diverse collection of creative work across all services. 
                        From stunning animations to immersive 3D designs and engaging live-action productions.
                    </p>
                    
                    {/* Selected Service Display */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg border border-gray-200">
                        <Filter className="w-5 h-5 text-blue-600" />
                        <span className="text-lg font-semibold text-gray-700">
                            Showing: <span className="text-blue-600">{selectedService}</span>
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                            {getServiceCount(selectedService)} projects
                        </span>
                    </div>
                </div>

                {/* Service Filter - Desktop */}
                <div className="hidden lg:flex flex-wrap justify-center gap-3 mb-12">
                    {services.map((service) => (
                        <button
                            key={service}
                            onClick={() => handleServiceClick(service)}
                            className={`service-filter group relative px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                                selectedService === service
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg hover:shadow-xl border border-gray-200'
                            }`}
                        >
                            <span className="relative z-10">
                                {service}
                            </span>
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                                selectedService === service
                                    ? 'bg-white/20 text-white/90'
                                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                            }`}>
                                {getServiceCount(service)}
                            </span>
                            
                            {selectedService === service && (
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl animate-pulse"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Service Filter - Mobile */}
                <div className="lg:hidden mb-8">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-lg border border-gray-200"
                    >
                        <div className="flex items-center gap-3">
                            <Filter className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold text-gray-700">
                                {selectedService} ({getServiceCount(selectedService)})
                            </span>
                        </div>
                        <ArrowRight className={`w-5 h-5 text-gray-400 transition-transform ${isFilterOpen ? 'rotate-90' : ''}`} />
                    </button>

                    {/* Mobile Filter Dropdown */}
                    {isFilterOpen && (
                        <div className="mt-3 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                            <div className="max-h-60 overflow-y-auto">
                                {services.map((service) => (
                                    <button
                                        key={service}
                                        onClick={() => handleServiceClick(service)}
                                        className={`w-full flex items-center justify-between p-4 text-left transition-all duration-200 ${
                                            selectedService === service
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        <span className="font-medium">{service}</span>
                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                            selectedService === service
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-600'
                                        }`}>
                                            {getServiceCount(service)}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="portfolio-item group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
                        >
                            {/* Video Container */}
                            <div className="relative aspect-video overflow-hidden bg-gray-900">
                                <video
                                    className="w-full h-full object-cover"
                                    src={item.videoUrl}
                                    loop
                                    autoPlay
                                    playsInline
                                    muted
                                    onClick={(e) => togglePlay(item.id, e.target)}
                                >
                                    Your browser does not support the video tag.
                                </video>

                                {/* Video Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Play/Pause Button
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const video = e.target.closest('.relative').querySelector('video');
                                        togglePlay(item.id, video);
                                    }}
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                >
                                    <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full p-4 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                                        {playingVideo === item.id ? (
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
                                            togglePlay(item.id, video);
                                        }}
                                        className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                                    >
                                        {playingVideo === item.id ? (
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

                                {/* Service Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {item.service}
                                    </span>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            {/* <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4 text-sm">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">Hover to play</span>
                                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-300 flex items-center gap-1">
                                        View Details <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-gray-400 text-6xl mb-4">🎬</div>
                        <h3 className="text-2xl font-bold text-gray-600 mb-2">No projects found</h3>
                        <p className="text-gray-500">We're working on new content for this service category.</p>
                    </div>
                )}

                {/* CTA Section */}
                {/* <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-xl mb-8 opacity-90">
                            Let's create something amazing together. Get in touch to discuss your vision.
                        </p>
                        <button 
                            onClick={() => navigate('/contact')}
                            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Start Your Project
                        </button>
                    </div>
                </div> */}
            </div>

            {/* Auto-play on hover functionality */}
            <style jsx>{`
                .portfolio-item video {
                    transition: transform 0.3s ease;
                }
                
                .portfolio-item:hover video {
                    transform: scale(1.05);
                }
                
                /* Auto-play on hover */
                .portfolio-item:hover video {
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

export default Portfolio;