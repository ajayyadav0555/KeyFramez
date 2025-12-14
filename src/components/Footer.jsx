import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Send,
    Heart
} from 'lucide-react';
import toast from 'react-hot-toast';

const Footer = () => {
    const [input, setInput] = useState("")
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about-us' },
        { label: 'Services', path: '/services' },
        { label: 'Portfolio', path: '/portfolio' },
    ];
    const SERVICES = [
        { name: "Video Production", path: "live-shot-video" },
        { name: "Explainer Videos", path: "explainer-videos" },
        { name: "3D Animation", path: "3d-modelling" },
        { name: "Visual Effects", path: "visual-effects" },
        { name: "Interactive Content Creation", path: "interactive-content" },
        { name: "Character Animation", path: "character-animation" },
        { name: "LMS-Based E-Learning Content", path: "lms-content" },
        { name: "Visual-effects", path: "visual-effects" }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
                    backgroundSize: '100px 100px'
                }}></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/Keyframez.png"
                                alt="Keyframez"
                                className="w-12 h-12 object-contain"
                            />
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Keyframez
                                </h3>
                                <p className="text-sm text-gray-400">Visual Productions</p>
                            </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Crafting exceptional visual experiences through innovative video production,
                            animation, and creative storytelling that captivates audiences worldwide.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {[
                                { icon: <Facebook size={18} />, color: 'hover:text-blue-400' },
                                { icon: <Twitter size={18} />, color: 'hover:text-blue-300' },
                                { icon: <Instagram size={18} />, color: 'hover:text-pink-400' },
                                { icon: <Linkedin size={18} />, color: 'hover:text-blue-500' },
                                { icon: <Youtube size={18} />, color: 'hover:text-red-400' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`w-10 h-10 rounded-xl bg-gray-800/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-gray-700/50 border border-gray-700/50 ${social.color}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                            Quick Links
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </h4>
                        <ul className="space-y-3">
                            {navItems.map(({ label, path }) => (
                                <li key={label}>
                                    <Link
                                        to={path}
                                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <ArrowRight
                                            size={14}
                                            className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                                        />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                            Our Services
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        </h4>
                        <ul className="space-y-3">
                            {SERVICES.map(({ name, path }) => (
                                <li key={path}>
                                    <Link
                                        to={`/services/${path}`}
                                        className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <ArrowRight
                                            size={14}
                                            className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                                        />
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>


                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                            Stay Connected
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </h4>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3 text-gray-300 group hover:text-white transition-colors duration-300">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                                    <Mail size={18} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm">projects@keyframez.com</p>
                                    <p className="text-xs text-gray-400">Send us an email</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-300 group hover:text-white transition-colors duration-300">
                                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                                    <Phone size={18} className="text-green-400" />
                                </div>
                                <div>
                                    <p className="text-sm">+91-9820047207</p>
                                    <p className="text-xs text-gray-400">Call us anytime</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-gray-300 group hover:text-white transition-colors duration-300">
                                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                                    <MapPin size={18} className="text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-sm">malad west , mumbai</p>
                                    <p className="text-xs text-gray-400">Visit our office</p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
                            <h5 className="font-semibold mb-2 text-white">Newsletter</h5>
                            <p className="text-sm text-gray-300 mb-3">Get updates on our latest projects</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 bg-gray-700/50 border border-gray-600/50 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                    value={input}
                                    onChange={(e) => {
                                        setInput(e.target.value)
                                    }}
                                />
                                <button
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 p-2 rounded-xl transition-all duration-300 transform hover:scale-105"
                                    onClick={() => {
                                        if (!input) return toast.error("Please enter an email"); // optional
                                        setInput("");
                                        toast.success("Subscribed to Keyframez");
                                    }}
                                >
                                    <Send size={16} className="text-white" />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800/50 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm flex items-center gap-1">
                            © 2024 Keyframez Visual Productions. All rights reserved.
                            Made with <Heart size={14} className="text-red-400 fill-current mx-1" />
                            for creative excellence
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        </footer>
    );
};

export default Footer;