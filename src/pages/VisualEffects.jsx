// import React, { useRef, useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { Play, Pause, Volume2, VolumeX, Sparkles, Zap, Film, Camera, Star, Wand2 } from 'lucide-react';

// const VisualEffects = () => {
//     const videoRef = useRef(null);
//     const sectionRef = useRef(null);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [isMuted, setIsMuted] = useState(true);

//     useEffect(() => {
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 start: "top 70%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse"
//             }
//         });

//         tl.fromTo('.vfx-content',
//             { opacity: 0, x: -50 },
//             { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
//         );

//         tl.fromTo('.vfx-video',
//             { opacity: 0, x: 50, scale: 0.9 },
//             { opacity: 1, x: 0, scale: 1, duration: 1, ease: "back.out(1.7)" },
//             "-=0.5"
//         );

//         tl.fromTo('.service-feature',
//             { opacity: 0, y: 20 },
//             { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
//             "-=0.3"
//         );
//     }, []);

//     const togglePlay = () => {
//         if (videoRef.current) {
//             if (isPlaying) {
//                 videoRef.current.pause();
//             } else {
//                 videoRef.current.play();
//             }
//             setIsPlaying(!isPlaying);
//         }
//     };

//     const toggleMute = () => {
//         if (videoRef.current) {
//             videoRef.current.muted = !isMuted;
//             setIsMuted(!isMuted);
//         }
//     };

//     const services = [
//         "Feature Films",
//         "Commercials & Ads",
//         "Music Videos",
//         "Digital Content",
//         "Television Series",
//         "Brand Campaigns"
//     ];

//     const features = [
//         { icon: <Film className="w-5 h-5" />, text: "CG Integration" },
//         { icon: <Zap className="w-5 h-5" />, text: "Particle Simulations" },
//         { icon: <Camera className="w-5 h-5" />, text: "Green-screen Keying" },
//         { icon: <Wand2 className="w-5 h-5" />, text: "Digital Environments" }
//     ];

//     return (
//         <>
//             <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 to-purple-900" style={{
//                 backgroundImage: `url("/VFX.jpg")`,
//                 backgroundSize: "cover",      // or "contain"
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//             }}
//             >
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid lg:grid-cols-2 gap-16 items-center">

//                         {/* Left Content */}
//                         <div className="vfx-content space-y-8 text-white">
//                             <div className="space-y-6">
//                                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full text-purple-200 font-semibold text-sm border border-purple-500/30">
//                                     <Sparkles className="w-4 h-4" />
//                                     Visual Effects (VFX)
//                                 </div>

//                                 <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//                                     Turn Imagination Into{' '}
//                                     <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                                         Breathtaking Reality
//                                     </span>
//                                 </h2>

//                                 <p className="text-lg text-gray-300 leading-relaxed">
//                                     We craft stunning, seamless visuals that elevate storytelling and immerse audiences in worlds
//                                     beyond imagination. From CG integration and compositing to particle simulations and digital
//                                     environments, our team brings creative vision and technical mastery together in every frame.
//                                 </p>
//                             </div>

//                             {/* Services List */}
//                             <div className="space-y-4">
//                                 <h3 className="text-xl font-semibold text-white">Perfect For:</h3>
//                                 <div className="grid sm:grid-cols-2 gap-3">
//                                     {services.map((service, index) => (
//                                         <div key={index} className="service-feature flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 border border-white/10">
//                                             <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
//                                             <span className="text-white font-medium">{service}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Features */}
//                             <div className="grid grid-cols-2 gap-4">
//                                 {features.map((feature, index) => (
//                                     <div key={index} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-purple-500/20 transition-all duration-300">
//                                         <div className="text-purple-400">
//                                             {feature.icon}
//                                         </div>
//                                         <span className="text-white font-medium text-sm">{feature.text}</span>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* CTA */}
//                             <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg">
//                                 Create Stunning VFX
//                             </button>
//                         </div>

//                         {/* Right Video Section */}
//                         <div className="vfx-video relative">
//                             <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-2 border-purple-500/30">
//                                 {/* Video Player */}
//                                 <video
//                                     ref={videoRef}
//                                     className="w-full h-auto aspect-video object-cover"
//                                     poster="/api/placeholder/800/450"
//                                     muted={isMuted}
//                                     loop
//                                     playsInline
//                                 >
//                                     <source src="/videos/vfx-showreel.mp4" type="video/mp4" />
//                                     Your browser does not support the video tag.
//                                 </video>

//                                 {/* Video Overlay */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

//                                 {/* Video Controls */}
//                                 <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
//                                     <button
//                                         onClick={togglePlay}
//                                         className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200 transform hover:scale-110"
//                                     >
//                                         {isPlaying ? (
//                                             <Pause className="w-5 h-5 text-gray-900" />
//                                         ) : (
//                                             <Play className="w-5 h-5 text-gray-900" />
//                                         )}
//                                     </button>

//                                     <button
//                                         onClick={toggleMute}
//                                         className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200 transform hover:scale-110"
//                                     >
//                                         {isMuted ? (
//                                             <VolumeX className="w-5 h-5 text-gray-900" />
//                                         ) : (
//                                             <Volume2 className="w-5 h-5 text-gray-900" />
//                                         )}
//                                     </button>
//                                 </div>

//                                 {/* Play Button Overlay */}
//                                 {!isPlaying && (
//                                     <div className="absolute inset-0 flex items-center justify-center">
//                                         <button
//                                             onClick={togglePlay}
//                                             className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full p-6 hover:bg-white/30 hover:scale-110 transition-all duration-300 group"
//                                         >
//                                             <Play className="w-10 h-10 text-white fill-current" />
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Floating Badge */}
//                             <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-xl animate-pulse border border-white/30">
//                                 <div className="flex items-center gap-2 text-sm font-semibold">
//                                     <Star className="w-4 h-4" />
//                                     Hollywood Grade
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <VFXWorkShowcase />
//         </>
//     );
// };

// const VFXWorkShowcase = () => {
//     const sectionRef = useRef(null);
//     const [playingVideo, setPlayingVideo] = useState(null);

//     useEffect(() => {
//         // Section animation
//         gsap.fromTo(sectionRef.current,
//             { opacity: 0, y: 50 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top 80%",
//                     toggleActions: "play none none reverse"
//                 }
//             }
//         );

//         // Grid items animation
//         gsap.fromTo('.work-item',
//             { opacity: 0, y: 30 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.8,
//                 stagger: 0.2,
//                 scrollTrigger: {
//                     trigger: '.work-grid',
//                     start: "top 70%",
//                     toggleActions: "play none none reverse"
//                 }
//             }
//         );
//     }, []);

//     const workVideos = [
//         {
//             id: 1,
//             title: "Epic Fantasy World",
//             category: "CG Integration",
//             thumbnail: "/api/placeholder/400/300",
//             videoUrl: "/video.mp4",
//             description: "Creating breathtaking fantasy realms with seamless CG integration"
//         },
//         {
//             id: 2,
//             title: "Sci-Fi Transformation",
//             category: "Digital Effects",
//             thumbnail: "/api/placeholder/400/300",
//             videoUrl: "/video.mp4",
//             description: "Futuristic transformations and advanced visual effects sequences"
//         },
//         {
//             id: 3,
//             title: "Explosion Sequences",
//             category: "Particle Effects",
//             thumbnail: "/api/placeholder/400/300",
//             videoUrl: "/video.mp4",
//             description: "Realistic explosion simulations with dynamic particle systems"
//         },
//         {
//             id: 4,
//             title: "Digital Environments",
//             category: "Matte Painting",
//             thumbnail: "/api/placeholder/400/300",
//             videoUrl: "/video.mp4",
//             description: "Creating entire digital worlds through advanced matte painting"
//         },
//         {
//             id: 5,
//             title: "Character VFX",
//             category: "Creature Effects",
//             thumbnail: "/api/placeholder/400/300",
//             videoUrl: "/video.mp4",
//             description: "Bringing mythical creatures to life with photorealistic effects"
//         },
//         {
//             id: 6,
//             title: "Commercial Magic",
//             category: "Product VFX",
//             thumbnail: "/api/placeholder/400/300",
//             videoUrl: "/video.mp4",
//             description: "Enhancing commercial spots with stunning visual effects"
//         }
//     ];

//     const togglePlay = (videoId, videoElement) => {
//         if (playingVideo === videoId) {
//             videoElement.pause();
//             setPlayingVideo(null);
//         } else {
//             // Pause all other videos
//             document.querySelectorAll('video').forEach(video => video.pause());

//             videoElement.play();
//             setPlayingVideo(videoId);
//         }
//     };

//     const toggleMute = (videoElement) => {
//         videoElement.muted = !videoElement.muted;
//     };

//     return (
//         <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-800 to-purple-900">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-bold from-purple-400 to-pink-400  mb-4">
//                         VFX Portfolio{' '}
//                         <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                             Showcase
//                         </span>
//                     </h2>
//                     <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                         Explore our stunning visual effects work that transforms imagination into breathtaking reality across films, commercials, and digital content.
//                     </p>
//                 </div>

//                 {/* Work Grid */}
//                 <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {workVideos.map((work) => (
//                         <div
//                             key={work.id}
//                             className="work-item group bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-purple-500/30"
//                         >
//                             {/* Video Container */}
//                             <div className="relative aspect-video overflow-hidden bg-gray-900">
//                                 <video
//                                     className="w-full h-full object-cover"
//                                     poster={work.thumbnail}
//                                     loop
//                                     playsInline
//                                     onClick={(e) => togglePlay(work.id, e.target)}
//                                 >
//                                     <source src={work.videoUrl} type="video/mp4" />
//                                     Your browser does not support the video tag.
//                                 </video>

//                                 {/* Video Overlay */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                                 {/* Play/Pause Button */}
//                                 <button
//                                     onClick={(e) => {
//                                         e.stopPropagation();
//                                         const video = e.target.closest('.relative').querySelector('video');
//                                         togglePlay(work.id, video);
//                                     }}
//                                     className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
//                                 >
//                                     <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full p-4 hover:bg-white/30 hover:scale-110 transition-all duration-300">
//                                         {playingVideo === work.id ? (
//                                             <Pause className="w-6 h-6 text-white" />
//                                         ) : (
//                                             <Play className="w-6 h-6 text-white fill-current" />
//                                         )}
//                                     </div>
//                                 </button>

//                                 {/* Video Controls */}
//                                 <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                     <button
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             const video = e.target.closest('.relative').querySelector('video');
//                                             togglePlay(work.id, video);
//                                         }}
//                                         className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
//                                     >
//                                         {playingVideo === work.id ? (
//                                             <Pause className="w-4 h-4 text-gray-900" />
//                                         ) : (
//                                             <Play className="w-4 h-4 text-gray-900" />
//                                         )}
//                                     </button>

//                                     <button
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             const video = e.target.closest('.relative').querySelector('video');
//                                             toggleMute(video);
//                                         }}
//                                         className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
//                                     >
//                                         <Volume2 className="w-4 h-4 text-gray-900" />
//                                     </button>
//                                 </div>

//                                 {/* Category Badge */}
//                                 <div className="absolute top-4 left-4">
//                                     <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
//                                         {work.category}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Content */}
//                             <div className="p-6">
//                                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
//                                     {work.title}
//                                 </h3>
//                                 <p className="text-gray-300 mb-4">
//                                     {work.description}
//                                 </p>
//                                 <div className="flex items-center justify-between">
//                                     <span className="text-sm text-gray-400">Hover to play</span>
//                                     <button className="text-purple-300 hover:text-purple-200 font-semibold text-sm transition-colors duration-300">
//                                         View Breakdown →
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* CTA Section */}
//                 <div className="text-center mt-16">
//                     <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white border border-white/30">
//                         <h3 className="text-3xl font-bold mb-4">
//                             Ready to Create Visual Magic?
//                         </h3>
//                         <p className="text-xl mb-8 opacity-90">
//                             Let's bring your most ambitious visual ideas to life with stunning, photorealistic effects.
//                         </p>
//                         <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//                             Start Your VFX Project
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Auto-play on hover functionality */}
//             <style jsx>{`
//         .work-item video {
//           transition: transform 0.3s ease;
//         }
        
//         .work-item:hover video {
//           transform: scale(1.05);
//         }
        
//         /* Auto-play on hover */
//         .work-item:hover video {
//           animation: gentlePlay 0.5s ease;
//         }
        
//         @keyframes gentlePlay {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.02); }
//           100% { transform: scale(1.05); }
//         }
//       `}</style>
//         </section>
//     );
// };

// export default VisualEffects;




import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, Sparkles, Zap, Film, Camera, Star, Wand2 } from 'lucide-react';

const VisualEffects = () => {
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

        tl.fromTo('.vfx-content',
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        );

        tl.fromTo('.vfx-video',
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
        "Feature Films",
        "Commercials & Ads",
        "Music Videos",
        "Digital Content",
        "Television Series",
        "Brand Campaigns"
    ];

    const features = [
        { icon: <Film className="w-5 h-5" />, text: "CG Integration" },
        { icon: <Zap className="w-5 h-5" />, text: "Particle Simulations" },
        { icon: <Camera className="w-5 h-5" />, text: "Green-screen Keying" },
        { icon: <Wand2 className="w-5 h-5" />, text: "Digital Environments" }
    ];

    return (
        <>
            <section ref={sectionRef} className="py-20 bg-white" style={{
                backgroundImage: `url("/VFX.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div className="vfx-content space-y-8 text-white">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm border border-white/30">
                                    <Sparkles className="w-4 h-4" />
                                    Visual Effects (VFX)
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                    Turn Imagination Into{' '}
                                    <span className="text-white">
                                        Breathtaking Reality
                                    </span>
                                </h2>

                                <p className="text-lg text-gray-200 leading-relaxed">
                                    We craft stunning, seamless visuals that elevate storytelling and immerse audiences in worlds
                                    beyond imagination. From CG integration and compositing to particle simulations and digital
                                    environments, our team brings creative vision and technical mastery together in every frame.
                                </p>
                            </div>

                            {/* Services List */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-white">Perfect For:</h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {services.map((service, index) => (
                                        <div key={index} className="service-feature flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                            <span className="text-white font-medium">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                                        <div className="text-white">
                                            {feature.icon}
                                        </div>
                                        <span className="text-white font-medium text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg">
                                Create Stunning VFX
                            </button>
                        </div>

                        {/* Right Video Section */}
                        <div className="vfx-video relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-2 border-white/30">
                                {/* Video Player */}
                                <video
                                    ref={videoRef}
                                    className="w-full h-auto aspect-video object-cover"
                                    poster="/api/placeholder/800/450"
                                    muted={isMuted}
                                    loop
                                    playsInline
                                >
                                    <source src="/videos/vfx-showreel.mp4" type="video/mp4" />
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
                            <div className="absolute -top-4 -right-4 bg-white text-gray-900 px-6 py-3 rounded-2xl shadow-xl border border-white/30">
                                <div className="flex items-center gap-2 text-sm font-semibold">
                                    <Star className="w-4 h-4" />
                                    Hollywood Grade
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VFXWorkShowcase />
        </>
    );
};

const VFXWorkShowcase = () => {
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
            title: "Epic Fantasy World",
            category: "CG Integration",
            thumbnail: "/api/placeholder/400/300",
            videoUrl: "/video.mp4",
            description: "Creating breathtaking fantasy realms with seamless CG integration"
        },
        {
            id: 2,
            title: "Sci-Fi Transformation",
            category: "Digital Effects",
            thumbnail: "/api/placeholder/400/300",
            videoUrl: "/video.mp4",
            description: "Futuristic transformations and advanced visual effects sequences"
        },
        {
            id: 3,
            title: "Explosion Sequences",
            category: "Particle Effects",
            thumbnail: "/api/placeholder/400/300",
            videoUrl: "/video.mp4",
            description: "Realistic explosion simulations with dynamic particle systems"
        },
        {
            id: 4,
            title: "Digital Environments",
            category: "Matte Painting",
            thumbnail: "/api/placeholder/400/300",
            videoUrl: "/video.mp4",
            description: "Creating entire digital worlds through advanced matte painting"
        },
        {
            id: 5,
            title: "Character VFX",
            category: "Creature Effects",
            thumbnail: "/api/placeholder/400/300",
            videoUrl: "/video.mp4",
            description: "Bringing mythical creatures to life with photorealistic effects"
        },
        {
            id: 6,
            title: "Commercial Magic",
            category: "Product VFX",
            thumbnail: "/api/placeholder/400/300",
            videoUrl: "/video.mp4",
            description: "Enhancing commercial spots with stunning visual effects"
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
                        VFX Portfolio{' '}
                        <span className="text-gray-900">
                            Showcase
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our stunning visual effects work that transforms imagination into breathtaking reality across films, commercials, and digital content.
                    </p>
                </div>

                {/* Work Grid */}
                <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workVideos.map((work) => (
                        <div
                            key={work.id}
                            className="work-item group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-200"
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
                                    <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-semibold border border-gray-300">
                                        {work.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                                    {work.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {work.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Hover to play</span>
                                    <button className="text-gray-700 hover:text-gray-900 font-semibold text-sm transition-colors duration-300">
                                        View Breakdown →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gray-900 rounded-3xl p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Create Visual Magic?
                        </h3>
                        <p className="text-xl mb-8 text-gray-300">
                            Let's bring your most ambitious visual ideas to life with stunning, photorealistic effects.
                        </p>
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Start Your VFX Project
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

export default VisualEffects;