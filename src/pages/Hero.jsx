import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import ContactFooter from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

/**
 * Cinematic Animation Studio Hero
 * - Advanced GSAP animations with morphing shapes
 * - Particle effects and floating elements
 * - Professional animation studio aesthetics
 * - Performance-optimized with will-change and transforms
 */

const Hero = () => {
    const rootRef = useRef(null);
    const imageRef = useRef(null);
    const particlesRef = useRef([]);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    // Create particle elements
    useEffect(() => {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'absolute inset-0 pointer-events-none -z-5';
        rootRef.current?.appendChild(particleContainer);

        // Create 15 particles
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-40';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particleContainer.appendChild(particle);
            particlesRef.current.push(particle);
        }

        return () => {
            if (rootRef.current && particleContainer.parentNode) {
                rootRef.current.removeChild(particleContainer);
            }
        };
    }, []);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(".hero-content > *", { opacity: 1, y: 0 });
                gsap.set(".bg-img", { scale: 1 });
                return;
            }

            const tl = gsap.timeline();

            // Background cinematic zoom
            tl.fromTo(imageRef.current,
                { scale: 1.2, rotation: 0.01 },
                {
                    scale: 1,
                    rotation: 0,
                    duration: 2.5,
                    ease: "power2.inOut",
                    transformOrigin: "center center"
                }
            );

            // Floating shapes animation
            tl.fromTo(".floating-shape",
                { y: 100, opacity: 0, rotation: -500 },
                {
                    y: 0,
                    opacity: 1,
                    rotation: 0,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "back.out(1.7)"
                },
                "-=1.5"
            );

            // Particle animation
            particlesRef.current.forEach((particle, i) => {
                gsap.to(particle, {
                    y: `+=${Math.random() * 100 - 50}`,
                    x: `+=${Math.random() * 80 - 40}`,
                    rotation: Math.random() * 360,
                    duration: 3 + Math.random() * 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.1
                });
            });

            // Text reveal with character splitting effect
            const titleChars = titleRef.current?.textContent?.split('') || [];
            titleRef.current.innerHTML = titleChars.map(char =>
                char === ' ' ? ' ' : `<span class="char">${char}</span>`
            ).join('');

            tl.fromTo(".char",
                {
                    y: 100,
                    opacity: 0,
                    rotationX: 90,
                    transformOrigin: "0% 50% -50"
                },
                {
                    y: 0,
                    opacity: 1,
                    rotationX: 0,
                    duration: 1,
                    stagger: 0.03,
                    ease: "back.out(1.7)"
                },
                "-=1"
            );

            // Subtitle and content reveal
            tl.fromTo(".hero-subtitle",
                { y: 30, opacity: 0, filter: "blur(10px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "power3.out"
                },
                "-=0.5"
            );

            tl.fromTo(".hero-content > *:not(h1):not(.hero-subtitle)",
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out"
                },
                "-=0.8"
            );

            // CTA button animation with continuous subtle pulse
            tl.fromTo(".hero-cta",
                {
                    scale: 0.8,
                    opacity: 0,
                    rotationY: 90
                },
                {
                    scale: 1,
                    opacity: 1,
                    rotationY: 0,
                    duration: 1,
                    ease: "back.out(1.7)"
                },
                "-=0.6"
            );

            // Continuous CTA hover effect
            gsap.to(".hero-cta", {
                y: -4,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });

            // Magnetic floating effect for shapes on scroll
            gsap.to(".floating-shape", {
                y: -20,
                rotation: 5,
                scrollTrigger: {
                    trigger: rootRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Parallax background
            gsap.to(imageRef.current, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: rootRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });

        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
      <div>
          <section
            ref={rootRef}
            aria-labelledby="hero-title"
            className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden bg-black"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient Orbs */}
                <div className="floating-shape absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-pink-600/10 rounded-full blur-xl animate-pulse" />
                <div className="floating-shape absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/15 to-blue-600/10 rounded-full blur-2xl" />
                <div className="floating-shape absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/5 rounded-full blur-xl" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Background Video/Image */}
            <div className="absolute inset-0">
                <video
                    ref={imageRef}
                    className="bg-img w-full h-full object-cover scale-110 will-change-transform"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1400&q=60"
                    aria-hidden="true"
                >
                    <source src="/videos/hero-animation.mp4" type="video/mp4" />
                    <source src="/videos/hero-animation.webm" type="video/webm" />
                    {/* Fallback image */}
                    <img
                        src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=1400&q=60"
                        alt="Animation studio background"
                        className="w-full h-full object-cover"
                    />
                </video>

                {/* Multi-layer Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black/90" />
            </div>

            {/* Animated Shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Morphing Blob */}
                <svg
                    className="floating-shape absolute top-20 right-20 w-32 h-32 opacity-30"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#8B5CF6"
                        d="M45.6,-65.2C58.4,-57.6,68.2,-43.9,73.8,-28.2C79.4,-12.5,80.8,5.2,76.5,21.1C72.2,37,62.2,51.2,48.5,60.6C34.8,70,17.4,74.7,0.7,73.7C-16,72.7,-32,66,-45.5,56.6C-59,47.2,-70,35.1,-74.8,20.6C-79.6,6.1,-78.2,-10.9,-71.8,-25.6C-65.4,-40.3,-54,-52.7,-40.2,-60C-26.4,-67.3,-13.2,-69.5,1.7,-71.9C16.6,-74.3,33.2,-76.9,45.6,-65.2Z"
                        transform="translate(100 100)"
                    />
                </svg>

                {/* Floating Triangles */}
                <div className="floating-shape absolute bottom-32 left-32 w-16 h-16 opacity-40">
                    <div className="w-0 h-0 border-l-[32px] border-l-transparent border-b-[55px] border-b-cyan-400 border-r-[32px] border-r-transparent" />
                </div>
            </div>

            {/* Main Content */}
            <div className="hero-content relative z-20 max-w-6xl text-center px-6 lg:px-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-cyan-300 tracking-widest uppercase">
                        Premium Animation Studio
                    </span>
                </div>

                {/* Main Title */}
                <h1
                    ref={titleRef}
                    id="hero-title"
                    className="text-2xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent"
                >
                    We Bring Stories to Life
                </h1>

                {/* Subtitle */}
                <p
                    ref={subtitleRef}
                    className="hero-subtitle text-lg md:text-xl lg:text-2xl text-white font-semibold max-w-4xl mx-auto leading-relaxed mb-8 font-light"
                >
                    Transform your imagination into <span className="text-cyan-300 font-semibold">breathtaking motion</span> with
                    cutting-edge animation, compelling storytelling, and immersive digital experiences that captivate audiences.
                </p>

                {/* Studio Introduction */}
                <div className="hero-subtitle text-base md:text-lg text-white font-semibold max-w-2xl mx-auto mb-12 leading-relaxed">
                    Welcome to <strong className="text-purple-300 font-bold">KEYFRAMEZ STUDIOS</strong> —
                    where every frame tells a story and every animation sparks emotion.
                    Your vision, our canvas.
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center gap-6 flex-wrap">
                    <button className="hero-cta group relative inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-cyan-600 via-purple-600 to-indigo-600 rounded-2xl text-white font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-cyan-300/50 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="relative z-10">🎬 Start Your Animation Journey</span>
                        <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>

                    <button className="group inline-flex items-center gap-3 px-6 py-3 border border-white/30 rounded-xl text-white/90 hover:bg-white/10 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm">
                        <span>🎞️ View Our Showreel</span>
                        <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

                {/* Scroll Indicator */}
                {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex flex-col items-center gap-2 text-white/60">
                        <span className="text-sm font-light tracking-widest">SCROLL TO EXPLORE</span>
                        <div className="w-px h-12 bg-gradient-to-b from-cyan-400/80 to-transparent rounded-full animate-bounce" />
                    </div>
                </div> */}
            </div>

            {/* Performance Stats */}
            {/* <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
                <div className="flex items-center gap-6 text-xs text-white/40 font-mono">
                    <div className="text-cyan-400">60FPS</div>
                    <div className="text-green-400">4K READY</div>
                    <div className="text-purple-400">HDR</div>
                </div>
            </div> */}
        </section>
            <Services/>
            <WhyChooseUs />
      </div>
    );
};

export default Hero;