import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Target, Sparkles, Award, Lightbulb, Heart } from 'lucide-react';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const founderRef = useRef(null);
  const teamRef = useRef(null);

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
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Founder card animation
    gsap.fromTo(founderRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: founderRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Team card animation
    gsap.fromTo(teamRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stats counter animation
    const counter = document.querySelectorAll(".counter")
    counter.forEach((counter) => {
      gsap.fromTo(counter, { innerText: 0 }, {
        innerText: counter.getAttribute('data-target'),
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger:{
        trigger: counter,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
  })
}, []);

const stats = [
  { icon: <Award className="w-6 h-6" />, number: 30, suffix: '+', label: 'Years Experience' },
  { icon: <Users className="w-6 h-6" />, number: 100, suffix: '+', label: 'Projects Completed' },
  { icon: <Target className="w-6 h-6" />, number: 50, suffix: '+', label: 'Happy Clients' },
  { icon: <Sparkles className="w-6 h-6" />, number: 15, suffix: '+', label: 'Team Members' }
];

const values = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge technology and creative solutions'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Passion',
    description: 'Driven by our love for storytelling and visual excellence'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Precision',
    description: 'Meticulous attention to detail in every frame and interaction'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Creativity',
    description: 'Transforming ideas into unforgettable visual experiences'
  }
];

return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
    {/* Hero Section */}
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Keyframez</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where creativity meets technology to craft unforgettable visual experiences that
            inspire, educate, and transform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <span className="counter" data-target={stat.number}>0</span>{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At <span className="text-blue-600 font-semibold">KEYFRAMEZ</span>, we believe animation is more than art —
              it's the most powerful way to communicate ideas. Our team of script writers,
              animators, designers, and technologists collaborates closely with clients to
              combine creativity and innovation, delivering visually stunning, meaningful results
              .Over the years, we’ve worked with leading brands and institutions to create <span className='font-bold'>impactful visual content</span> that educates, entertains, and engages. Whether it’s a cinematic brand film, a learning module, or a VR simulation — we combine creativity with innovation to deliver memorable experiences.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Founder Card */}
          <div ref={founderRef} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  HS
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Hari Sudhakaran</h3>
                  <p className="text-blue-600 font-medium">Founder & Creative Director</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-gray-900">30+ years</strong> of experience spanning animation, design, and advanced technology.
                </p>
                <p>
                  <strong className="text-gray-900">Electrical and Electronics Engineering</strong> graduate with a Master's in
                  <strong className="text-gray-900"> Industrial Design from IIT Bombay</strong>.
                </p>
                <p>
                  Blends creativity with technology to push the boundaries of visual storytelling
                  and interactive media.
                </p>
                <p className="italic text-gray-600 border-l-4 border-blue-500 pl-4 py-2">
                  "Learning never stops and imagination has no limits."
                </p>
              </div>
            </div>
          </div>

          {/* Head Animator Card */}
          <div ref={teamRef} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                  SG
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sushant Ghadi</h3>
                  <p className="text-blue-600 font-medium">Head Animator</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-gray-900">15+ years</strong> of experience in animation and visual storytelling.
                </p>
                <p>
                  <strong className="text-gray-900">High Diploma in Animation (HDA)</strong> from Arena Multimedia Academy, Andheri.
                </p>
                <p>
                  Extensive experience across graphics design, video editing, and motion arts
                  with a keen eye for detail and strong design sensibilities.
                </p>
                <p className="text-gray-600">
                  Passionate about bringing ideas to life through animation and elevating
                  creative standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Bring Your Vision to Life?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something extraordinary together.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};

export default AboutUs;