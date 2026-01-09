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
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
    })
  }, []);

  const stats = [
    { icon: <Award className="w-6 h-6" />, number: 30, suffix: '+', label: 'Years Experience' },
    { icon: <Users className="w-6 h-6" />, number: 5000, suffix: '+', label: 'Projects Completed' },
    { icon: <Target className="w-6 h-6" />, number: 500, suffix: '+', label: 'Happy Clients' },
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
            <div className=" mx-auto">
              <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Our Mission
              </h2>
              <p class="text-lg md:text-xl text-gray-800 leading-relaxed font-semibold tracking-wide">
                At <span class="text-blue-600 font-bold">KEYFRAMEZ</span>, we believe animation is more than art —
                it's the most powerful way to communicate ideas.
                <br /><span class="block h-3"></span>
                Our team of script writers, animators, designers, and technologists collaborates closely
                with clients to combine creativity and innovation, delivering visually stunning, meaningful
                results.
                <br /><span class="block h-3"></span>
                Over the years, we’ve worked with leading brands and institutions to create impactful visual
                content that educates, entertains, and engages. Whether it’s a cinematic brand film, a learning
                module, or a VR simulation — we combine creativity with innovation to deliver memorable
                experiences.
              </p>

            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="
          bg-white p-8 rounded-3xl 
          shadow-lg border border-gray-100
          transition-all duration-500 
          hover:-translate-y-3 hover:shadow-2xl 
          hover:border-blue-200
          group relative overflow-hidden
        "
                >
                  {/* Glow effect */}
                  <div className="
          absolute inset-0 opacity-0 group-hover:opacity-10 
          bg-gradient-to-br from-blue-600 to-blue-400 
          transition-opacity duration-500 rounded-3xl
        "></div>

                  <div className="relative z-10">
                    <div className='flex gap-5 items-center'>
                      <div className="text-blue-600 mb-4 group-hover:scale-125 transition-transform duration-500">
                        {value.icon}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>

                    </div>
                    <p className="text-gray-600 leading-relaxed md:text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Team Section */}
          <div className="grid  gap-12">
            {/* Founder Card */}
            {/* <div ref={founderRef} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
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
            </div> */}

            {/* Head Animator Card */}
            {/* <div ref={teamRef} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
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
            </div> */}

            <div ref={founderRef} className="max-w-7xl mx-auto px-6 py-24 md:py-32 bg-gray-50">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 mb-20 px-4">

                {/* Image Section */}
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50 transform transition-all duration-700 hover:scale-[1.01] hover:shadow-blue-300/70">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/hari.png')",
                    }}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Text Section */}
                <div className="bg-gray-100 p-6 sm:p-8 rounded-2xl max-w-xl text-center lg:text-left">
                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
                    The Founder
                  </p>

                  <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
                    Hari Sudhakaran
                  </h2>

                  <h3 className="text-md sm:text-xl md:text-xl text-blue-700 font-medium">
                    Creative Director & Visionary Leader, Based in India
                  </h3>
                </div>

              </div>



              <div className=" items-center gap-12 lg:gap-20">

                {/* LEFT — FOUNDER IMAGE */}


                {/* RIGHT — MODERN FOUNDER DETAILS */}
                <div
                  className="p-8 lg:p-12 bg-white rounded-3xl border border-gray-100 shadow-xl"
                >

                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p>
                      <strong className="text-gray-900 font-semibold">Mr. Hari Sudhakaran</strong> , the Founder of <strong>Keyframez</strong>, is an accomplished professional with <strong>over 30 years of experience</strong> spanning animation, design, and advanced technology.
                    </p>

                    <p>
                      An <strong>Electrical and Electronics Engineering graduate, Mr. Hari</strong> went on to earn his <strong> Master’s in Industrial Design</strong> from the <strong>prestigious Industrial Design Centre, IIT Bombay </strong>— one of India’s leading institutions for design innovation
                    </p>

                    <p>
                      Throughout his career, he has seamlessly blended creativity with technology, contributing to projects that push the boundaries of visual storytelling and interactive media. His deep understanding of design thinking, combined with a strong technical foundation, has guided Keyframez to become a studio known for precision, innovation, and artistic excellence.
                    </p>
                    <p>When he’s not busy shaping visual narratives, Hari is often exploring new tools, technologies, and ideas — staying true to his lifelong belief that learning never stops and imagination has no limits.</p>
                  </div>

                  {/* Divider with a modern touch */}
                  <div className="w-16 h-1 bg-blue-500 rounded-full mt-10"></div>
                </div>
              </div>
            </div>


          

            <div ref={teamRef} className="max-w-7xl mx-auto px-6 py-24 md:py-32 bg-gray-50">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 mb-20 px-4">

                {/* Image Section */}


                {/* Text Section */}
                <div className="bg-gray-100 p-6 sm:p-8 rounded-2xl max-w-xl text-center lg:text-left">
                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-3">
                    Head Animator
                  </p>

                  <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-2">
                    Mr. Sushant Ghadi
                  </h2>

                  <h3 className="text-md sm:text-xl md:text-xl text-blue-700 font-medium">
                    Keyframez – India                  </h3>
                </div>

                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50 transform transition-all duration-700 hover:scale-[1.01] hover:shadow-blue-300/70">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/sushant.jpeg')",
                    }}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

              </div>



              <div className=" items-center gap-12 lg:gap-20">

                {/* LEFT — FOUNDER IMAGE */}


                {/* RIGHT — MODERN FOUNDER DETAILS */}
                <div
                  className="p-8 lg:p-12 bg-white rounded-3xl border border-gray-100 shadow-xl"
                >

                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">

                      <p>
                        With over <strong className="text-gray-900">15 years of experience</strong> in the world of animation and visual storytelling,
                        <strong className="text-gray-900"> Mr. Sushant Ghadi</strong> brings a rare blend of technical expertise and creative finesse to
                        <strong className="text-gray-900"> Keyframez</strong>. A
                        <strong className="text-gray-900"> High Diploma in Animation (HDA)</strong> graduate from the prestigious
                        <strong className="text-gray-900"> Arena Multimedia Academy, Andheri (W)</strong> — one of India’s leading animation training institutes —
                        he has built a solid foundation in both design and motion arts.
                      </p>

                      <p>
                        Before joining Keyframez, he honed his craft across diverse creative roles — from working as a
                        <strong className="text-gray-900"> Graphics Designer at Swapnali Printers, Andheri (W)</strong> between
                        <strong className="text-gray-900"> 2007 and 2010</strong>, to serving as a
                        <strong className="text-gray-900"> Video Editor at Sukh Sagar Institute, Andheri (W)</strong> from
                        <strong className="text-gray-900"> 2011 to 2012</strong>. His keen eye for detail, strong design sensibilities, and passion for bringing ideas to life through animation continue to inspire and elevate the creative standards at Keyframez.
                      </p>

                      <p>
                        Specialized in
                        <strong className="text-gray-900"> Graphics Design, Video Editing, 3D Interior Designing</strong>, and
                        <strong className="text-gray-900"> Motion Arts</strong>, demonstrating a strong design sensibility and creative precision.
                      </p>

                    </div>



                  </div>

                  {/* Divider with a modern touch */}
                  <div className="w-16 h-1 bg-blue-500 rounded-full mt-10"></div>
                </div>
              </div>
            </div>







          </div>

          {/* CTA Section */}

        </div>
      </section>
    </div>
  );
};

export default AboutUs;