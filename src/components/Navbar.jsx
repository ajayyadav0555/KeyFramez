import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { HiMenu, HiX } from "react-icons/hi";
import {
    Briefcase,
    FileText,
    Box,
    Cpu,
    Users,
    BookOpen,
    Sparkles,
    ChevronDown,
    Play,
    ArrowRight
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const menuItemsRef = useRef([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Throttled scroll handler
    const handleScroll = useCallback(() => {
        const scrolled = window.scrollY > 20;
        setIsScrolled(scrolled);
    }, []);

    // Navbar scroll effect with throttle
    useEffect(() => {
        let ticking = false;
        const updateScroll = () => {
            handleScroll();
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [handleScroll]);

    // Enhanced navbar entrance animation
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(navRef.current,
            {
                y: -100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
            }
        );

        // tl.fromTo(logoRef.current,
        //     {
        //         scale: 0,
        //         rotation: -180,
        //     },
        //     {
        //         scale: 1,
        //         rotation: 0,
        //         duration: 0.8,
        //         ease: "back.out(1.7)",
        //     },
        //     "-=0.3"
        // );

        tl.fromTo(menuItemsRef.current,
            {
                y: -30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.08,
            },
            "-=0.2"
        );

    }, []);

    // Enhanced mobile menu animation
    useEffect(() => {
        if (isMobileMenuOpen) {
            // Prevent body scroll
            document.body.style.overflow = 'hidden';

            const tl = gsap.timeline();
            tl.to(".mobile-menu", {
                x: 0,
                duration: 0.6,
                ease: "power3.out",
            }).to(".mobile-menu-item", {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.08,
                ease: "back.out(1.2)",
            }, "-=0.2");
        } else {
            document.body.style.overflow = 'unset';
            gsap.to(".mobile-menu", {
                x: "-100%",
                duration: 0.5,
                ease: "power3.in",
            });
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Enhanced dropdown animation
    useEffect(() => {
        if (isDropdownOpen) {
            const tl = gsap.timeline();
            tl.to(".dropdown-menu", {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.4)",
            }).to(".dropdown-item", {
                y: 0,
                opacity: 1,
                duration: 0.25,
                stagger: 0.04,
                ease: "power2.out",
            }, "-=0.1");
        } else {
            gsap.to(".dropdown-menu", {
                opacity: 0,
                scale: 0.95,
                duration: 0.2,
                ease: "power2.in",
            });
        }
    }, [isDropdownOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    }, [location]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const services = [
        {
            icon: <Briefcase size={18} />,
            name: "Live-shot Video Production",
            path: "/services/live-shot-video",
            description: "Professional live-action video production"
        },
        {
            icon: <FileText size={18} />,
            name: "Explainer Videos",
            path: "/services/explainer-videos",
            description: "Engaging animated explainer content"
        },
        {
            icon: <Box size={18} />,
            name: "3D Modelling & Simulations",
            path: "/services/3d-modelling",
            description: "Realistic 3D models and simulations"
        },
        {
            icon: <Cpu size={18} />,
            name: "Interactive Content Creation",
            path: "/services/interactive-content",
            description: "Interactive and immersive experiences"
        },
        {
            icon: <Users size={18} />,
            name: "Character Animation",
            path: "/services/character-animation",
            description: "Bringing characters to life"
        },
        {
            icon: <BookOpen size={18} />,
            name: "LMS-Based E-Learning Content",
            path: "/services/lms-content",
            description: "Educational content for learning platforms"
        },
        {
            icon: <Sparkles size={18} />,
            name: "Visual Effects",
            path: "/services/visual-effects",
            description: "Stunning visual effects and compositing"
        },
    ];

    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "Portfolio", path: "/portfolio" }
    ];

    const handleServiceClick = (path) => {
        navigate(path);
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    };

    const isActivePath = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
            {/* Main Navigation */}
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                        ? "bg-white/95 backdrop-blur-xl shadow-lg py-2"
                        : "bg-white/80 backdrop-blur-md py-4"
                    }`}
            >
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-around items-center">
                    {/* Enhanced Logo */}
                    <div 
                    ref={logoRef} 
                    className="flex items-center">
                        <Link
                            to="/"
                            className="relative group flex items-center gap-3"
                            onClick={handleMobileLinkClick}
                        >
                            <div className="relative">
                                <img
                                    src="/Keyframez.png"
                                    alt="Keyframez"
                                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-600/0 group-hover:from-blue-500/10 group-hover:to-purple-600/10 rounded-xl transition-all duration-500" />
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    Keyframez
                                </div>
                                <div className="text-xs text-gray-500 font-medium">
                                    Visual Productions
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item, index) => {
                            const isActive = isActivePath(item.path);
                            return (
                                <div
                                    key={item.label}
                                    className="relative"
                                    ref={el => menuItemsRef.current[index] = el}
                                >
                                    <Link
                                        to={item.path}
                                        className={`relative flex items-center gap-2 py-2.5 px-4 rounded-xl transition-all duration-300 group ${isActive
                                                ? "text-blue-600 bg-blue-50/80 font-semibold"
                                                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50/80"
                                            }`}
                                    >
                                        <span className="relative z-10 font-medium text-sm">
                                            {item.label}
                                        </span>
                                        {isActive && (
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                                        )}
                                    </Link>
                                </div>
                            );
                        })}

                        {/* Enhanced Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <div
                                className={`flex items-center gap-2 py-2.5 px-4 rounded-xl transition-all duration-300 cursor-pointer group ${isActivePath("/services")
                                        ? "text-blue-600 bg-blue-50/80 font-semibold"
                                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50/80"
                                    }`}
                            >
                                <span className="font-medium text-sm">Services</span>
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-blue-600" : ""
                                        }`}
                                />
                            </div>

                            {/* Dropdown Menu */}
                            <div 
                                className={`dropdown-menu absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-xl border border-gray-200/80 shadow-2xl rounded-2xl origin-top-left overflow-hidden ${isDropdownOpen ? 'block' : 'hidden'}`}
                                style={{ 
                                    opacity: isDropdownOpen ? 1 : 0,
                                    transform: isDropdownOpen ? 'scale(1)' : 'scale(0.95)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div className="p-4 border-b border-gray-100/80">
                                    <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Professional video production and animation services
                                    </p>
                                </div>

                                <div className="max-h-96 overflow-y-auto">
                                    {services.map((service, index) => (
                                        <div
                                            key={service.name}
                                            onClick={() => handleServiceClick(service.path)}
                                            className="dropdown-item p-4 hover:bg-blue-50/50 transition-all border-b border-gray-50 last:border-b-0 cursor-pointer group"
                                            style={{
                                                transform: isDropdownOpen ? 'translateY(0)' : 'translateY(10px)',
                                                opacity: isDropdownOpen ? 1 : 0,
                                                transition: `all 0.25s ease ${index * 0.04}s`
                                            }}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white transition-transform group-hover:scale-110">
                                                    {service.icon}
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                            {service.name}
                                                        </h4>

                                                        <ArrowRight
                                                            size={14}
                                                            className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                                                        />
                                                    </div>

                                                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* CTA Button */}
                    {/* <div className="hidden lg:flex items-center">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Get Quote
                        </button>
                    </div> */}

                    {/* Enhanced Mobile Menu Button */}
                    <button
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-all duration-300 group"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-5 h-5">
                            {isMobileMenuOpen ? (
                                <HiX size={20} className="text-gray-700 transition-all duration-300" />
                            ) : (
                                <HiMenu size={20} className="text-gray-700 transition-all duration-300" />
                            )}
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
                    onClick={handleMobileLinkClick}
                />
            )}

            {/* Enhanced Mobile Menu */}
            <div
                className="mobile-menu fixed top-0 left-0 w-80 h-full bg-white/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden overflow-y-auto border-r border-gray-200/80 transform -translate-x-full"
                style={{ backdropFilter: 'blur(20px)' }}
            >
                <div className="p-6 border-b border-gray-200/80">
                    <div className="flex items-center justify-between mb-6">
                        <Link
                            to="/"
                            className="flex items-center gap-3"
                            onClick={handleMobileLinkClick}
                        >
                            <img
                                src="/Keyframez.png"
                                alt="Keyframez"
                                className="w-12 h-12 object-contain"
                            />
                            <div>
                                <div className="text-lg font-bold text-gray-900">Keyframez</div>
                                <div className="text-xs text-gray-600">Visual Productions</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="p-4">
                    <nav className="space-y-1">
                        {navItems.map((item, index) => (
                            <div key={item.label}>
                                <Link
                                    to={item.path}
                                    className="mobile-menu-item transform -translate-x-4 opacity-0 flex items-center justify-between py-3 px-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-300 group"
                                    onClick={handleMobileLinkClick}
                                >
                                    <span>{item.label}</span>
                                    <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                                </Link>
                            </div>
                        ))}

                        {/* Mobile Services Section */}
                        <div className="mobile-menu-item transform -translate-x-4 opacity-0">
                            <div className="py-3 px-4">
                                <div className="text-sm font-semibold text-gray-900 mb-2">
                                    Services
                                </div>
                                <div className="space-y-1 ml-2 border-l-2 border-blue-200 pl-3">
                                    {services.map((service, index) => (
                                        <Link
                                            key={service.name}
                                            to={service.path}
                                            className="flex items-center gap-3 py-2 px-3 text-gray-600 hover:text-blue-600 rounded-lg transition-all duration-300 group hover:bg-blue-50/50"
                                            onClick={handleMobileLinkClick}
                                        >
                                            <span className="text-blue-500 group-hover:scale-110 transition-transform duration-300">
                                                {service.icon}
                                            </span>
                                            <span className="text-sm font-medium flex-1">
                                                {service.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile CTA */}
                        <div className="mobile-menu-item transform -translate-x-4 opacity-0 pt-4 border-t border-gray-200/80">
                            <button 
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
                                onClick={handleMobileLinkClick}
                            >
                                Get Free Quote
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;