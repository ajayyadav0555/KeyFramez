import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageCircle,
    Sparkles,
    Clock,
    CheckCircle
} from 'lucide-react';

const ContactUs = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Section entrance animation
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

        // Form animation
        gsap.fromTo(formRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Info animation
        gsap.fromTo(infoRef.current,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.6,
                scrollTrigger: {
                    trigger: infoRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            detail: "projects@keyframez.com",
            subtitle: "Send us your queries anytime",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            detail: "+91-9820047207",
            subtitle: "Mon to Fri, 9AM to 6PM",
            color: "from-green-500 to-green-600"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            detail: "Mumbai, India",
            subtitle: "Come say hello at our studio",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Response Time",
            detail: "Within 24 hours",
            subtitle: "We'll get back to you quickly",
            color: "from-orange-500 to-orange-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
            {/* Hero Section */}
            <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                            <MessageCircle className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Let's <span className="text-blue-600">Create</span> Together
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Let's collaborate to create visuals that move, teach, and inspire.
                            Start the conversation and bring your vision to life.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div ref={formRef} className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                            {!isSubmitted ? (
                                <>
                                    <div className="flex items-center mb-8">
                                        <Sparkles className="w-6 h-6 text-blue-600 mr-3" />
                                        <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Project Type
                                            </label>
                                            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                                                <option>Select a service</option>
                                                <option>Live-shot Video Production</option>
                                                <option>Explainer Videos</option>
                                                <option>3D Modelling & Simulations</option>
                                                <option>Interactive Content Creation</option>
                                                <option>Character Animation</option>
                                                <option>E-Learning Content</option>
                                                <option>Visual Effects</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                rows={5}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                                placeholder="Tell us about your project..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                        >
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </button>
                                        
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-gray-600">
                                        Thank you for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div ref={infoRef} className="space-y-8">
                            {/* Contact Cards */}
                            <div className="grid gap-6">
                                {contactInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-800 font-medium text-xl mb-1">
                                                    {item.detail}
                                                </p>
                                                <p className="text-gray-500 text-sm">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Studio Hours */}
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    Studio Hours
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Monday - Saturday</span>
                                        <span className="font-semibold">10:00 AM - 6:00 PM</span>
                                    </div>
                                    {/* <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="font-semibold">10:00 AM - 4:00 PM</span>
                                    </div> */}
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="font-semibold">Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Note */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">
                                <h4 className="font-bold text-gray-900 mb-2">
                                    What to Expect
                                </h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• Initial consultation within 24 hours</li>
                                    <li>• Detailed project proposal</li>
                                    <li>• Transparent pricing</li>
                                    <li>• Regular progress updates</li>
                                    <li>• Professional delivery</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3768.062728014528!2d72.84324917520826!3d19.192462382036272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDExJzMyLjkiTiA3MsKwNTAnNDUuMCJF!5e0!3m2!1sen!2sin!4v1763633575109!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>


                    {/* CTA Section */}
                    
                </div>
            </section>
        </div>
    );
};

export default ContactUs;