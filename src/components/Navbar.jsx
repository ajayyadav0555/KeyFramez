import React, { useRef, useEffect, useState } from "react";
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
    Pause
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const menuItemsRef = useRef([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navbar entrance animation
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(navRef.current,
            {
                y: -100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
            }
        );

        tl.fromTo(logoRef.current,
            {
                scale: 0,
                rotation: -180,
            },
            {
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: "back.out(1.7)",
            },
            "-=0.5"
        );

        tl.fromTo(menuItemsRef.current,
            {
                y: -30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            },
            "-=0.3"
        );

    }, []);

    // Mobile menu animation
    useEffect(() => {
        if (isMobileMenuOpen) {
            gsap.to(".mobile-menu", {
                x: 0,
                duration: 0.8,
                ease: "power3.out",
            });
            gsap.to(".mobile-menu-item", {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.3,
                ease: "back.out(1.2)",
            });
        } else {
            gsap.to(".mobile-menu", {
                x: "-100%",
                duration: 0.6,
                ease: "power3.in",
            });
        }
    }, [isMobileMenuOpen]);

    // Dropdown animation
    useEffect(() => {
        if (isDropdownOpen) {
            gsap.to(".dropdown-menu", {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "back.out(1.2)",
            });
            gsap.to(".dropdown-item", {
                y: 0,
                opacity: 1,
                duration: 0.3,
                stagger: 0.05,
                ease: "power2.out",
            });
        } else {
            gsap.to(".dropdown-menu", {
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                ease: "power2.in",
            });
        }
    }, [isDropdownOpen]);

   const services = [
  { icon: <Briefcase size={18} />, name: "Live-shot Video Production", path: "services/live-shot-video" },
  { icon: <FileText size={18} />, name: "Explainer Videos", path: "services/explainer-videos" },
  { icon: <Box size={18} />, name: "3D Modelling & Simulations", path: "services/3d-modelling" },
  { icon: <Cpu size={18} />, name: "Interactive Content Creation", path: "services/interactive-content" },
  { icon: <Users size={18} />, name: "Character Animation", path: "services/character-animation" },
  { icon: <BookOpen size={18} />, name: "LMS-Based E-Learning Content Creation", path: "services/lms-content" },
  { icon: <Sparkles size={18} />, name: "Visual Effects", path: "services/visual-effects" },
];


    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" }
    ];

    const navItems2 = [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" }
    ];

    return (
        <>
            {/* Main Navigation */}
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                        ? "bg-white/95 backdrop-blur-xl shadow-2xl  py-2"
                        : "bg-gradient-to-b "
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
                    {/* Animated Logo */}
                    <div ref={logoRef} className="flex items-center">
                        <div className="relative group">
                            <img
                                src="Keyframez.png"
                                alt="Keyframez"
                                className="sm:w-20 w-14 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-500" />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-6 text-base font-medium">
                        {navItems.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li
                                    key={item.label}
                                    className="relative"
                                    ref={el => menuItemsRef.current[index] = el}
                                >
                                    <Link
                                        to={item.path}
                                        className={`relative flex items-center gap-1 py-3 px-4 rounded-2xl transition-all duration-500 group overflow-hidden ${isActive
                                                ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                                                : "text-gray-700 hover:text-blue-600"
                                            }`}
                                    >
                                        <span className="relative z-10 font-semibold">
                                            {item.label}
                                        </span>
                                        {!isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}

                        {/* Services Dropdown */}
                        <li className="relative group">
                            <div
                                className={`flex items-center gap-1 py-3 px-4 rounded-2xl text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-pointer group overflow-hidden ${location.pathname.includes("services") ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25":""}`}
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                onMouseEnter={() => setIsDropdownOpen(true)}
                            >
                               <Link to={'/services'}> <span className={`font-semibold py-3 px-4 rounded-2xl transition-all duration-500  `}>Services</span></Link>
                                <ChevronDown
                                    size={16}
                                    className={`transition-all duration-500 ${isDropdownOpen ? "rotate-180 text-blue-600" : "rotate-0"
                                        }`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            </div>

                            {/* Animated Dropdown */}
                            {isDropdownOpen && (
                                <div
                                    className="dropdown-menu absolute top-full left-0 z-50 w-80 p-2 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl opacity-0 scale-95 origin-top-left"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <div className="space-y-1">
                                        {services.map((service, index) => (
                                            <Link to={service.path}>
                                            <div
                                            onClick={()=>setIsDropdownOpen(false)}
                                                key={service.name}
                                                className="dropdown-item transform translate-y-4 opacity-0 flex items-center gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 cursor-pointer group"
                                            >
                                                <span className="text-blue-600 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                                                    {service.icon}
                                                </span>
                                                <span className="text-gray-700 group-hover:text-blue-600 font-medium flex-1">
                                                    {service.name}
                                                </span>
                                                <Play size={14} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                                            </div>
                                                </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-3 rounded-2xl text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 relative group"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6 ">
                            {isMobileMenuOpen ? (
                                <HiX size={24} className="transform rotate-0 scale-100 transition-all duration-300" />
                            ) : (
                                <HiMenu size={24} className="transform rotate-0 scale-100 transition-all duration-300" />
                            )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div
                className="mobile-menu fixed top-0 left-0 w-80 h-full bg-gradient-to-br from-white to-gray-50/95 backdrop-blur-xl shadow-2xl z-50 md:hidden overflow-y-auto border-r border-white/20"
                style={{ transform: "translateX(-100%)" }}
            >
                <div className="p-6 border-b border-gray-100/50">
                    <div className="flex items-center justify-between mb-8">
                        <div className="relative group">
                            <img
                                src="Keyframez.png"
                                alt="Keyframez"
                                className="w-16 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-300"
                        >
                            <HiX size={20} />
                        </button>
                    </div>

                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Navigation
                    </h2>
                </div>

                <div className="p-6">
                    <ul className="space-y-3">
                        {navItems2.map((item, index) => (
                            <li key={index}>
                                <div
                                    className="mobile-menu-item transform -translate-x-10 opacity-0 block py-4 px-6 text-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-2xl transition-all duration-500 cursor-pointer group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{item.label}</span>
                                        <Play size={16} className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                                    </div>
                                </div>

                                {/* Mobile Services Submenu */}
                                {item.label === "Services" && (
                                    <div className="ml-6 mt-2 space-y-2 border-l-2 border-blue-200 pl-4">
                                        {services.map((service, index) => (
                                             <Link to={service.path}>
                                            <div
                                                key={service.name}
                                                className="flex items-center gap-3 py-3 px-4 text-gray-600 hover:text-blue-600 rounded-xl transition-all duration-300 cursor-pointer group hover:bg-blue-50"
                                            >
                                             
                                                <span className="text-blue-500 group-hover:scale-110 transition-transform duration-300">
                                                    {service.icon}
                                                </span>
                                                <span className="text-sm font-medium flex-1">
                                                    {service.name}
                                                </span>
                                            </div>
                                              </Link>
                                        ))}
                                    </div>  
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu Footer */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100/50">
                    <div className="text-center text-gray-500 text-sm">
                        Crafting Visual Excellence
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Navbar;