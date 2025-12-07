import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const videoItemsRef = useRef([]);
  const navigate = useNavigate();

  const services = [
    {
      title: "Live-shot Video Production",
      video: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764264910/LANDMARK_-_Loop_oq0t1g.mp4",
      description: "Professional video production for commercials, corporate videos, and brand storytelling.",
      path: "/services/live-shot-video"
    },
    {
      title: "Explainer Videos",
      video: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764264915/Bugworks_-_Loop_ku2ksm.mp4",
      description: "Engaging animated videos that simplify complex concepts and showcase your products.",
      path: "/services/explainer-videos"
    },
    {
      title: "3D Modelling & Simulations",
      video: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764350904/Product_Models_-_Loop_xr3he2.mp4",
      description: "High-quality 3D models and realistic simulations for various applications.",
      path: "/services/3d-modelling"
    },
    {
      title: "Interactive Content Creation",
      video: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352101/3D_GLASS_slyk4d.mp4",
      description: "Immersive interactive experiences including AR/VR and web-based content.",
      path: "/services/interactive-content"
    },
    {
      title: "Character Animation",
      video: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764439999/Animatic_Film_-_ELF_MOTO_SNAKE_LADDER_sntoa1.mp4",
      description: "Bringing characters to life with expressive animation for various media.",
      path: "/services/character-animation"
    },
    {
      title: "Inventive Film",
      video: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764264915/Bugworks_-_Loop_ku2ksm.mp4",
      description: "Creative film production that pushes boundaries and tells unique stories.",
      path: "/services/amorphic-videos"
    },
    {
      title: "Visual Effects (VFX)",
      video: "https://res.cloudinary.com/dq3ubcgdd/video/upload/v1764352970/Compositing_and_Green_Screen_Integration_-_Loop_owjc0o.mp4",
      description: "Creative film production that pushes boundaries and tells unique stories.",
      path: "/services/visual-effects"
    },
    {
      title: "Ai Based Animation",
      video: "/video.mp4",
      description: "Creative film production that pushes boundaries and tells unique stories.",
      path: "/services/visual-effects"
    },
    {
      title: "Motivational AV's",
      video: "/video.mp4",
      description: "Creative film production that pushes boundaries and tells unique stories.",
      path: "/services/visual-effects"
    },


  ];

  // Add video item to ref array
  const addToVideoItemsRef = (el) => {
    if (el && !videoItemsRef.current.includes(el)) {
      videoItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Hero section animation
    const heroTl = gsap.timeline();
    heroTl
      .fromTo('.hero-title',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo('.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo('.hero-description',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.3'
      );

    // Services header animation
    gsap.fromTo('.services-header',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Video items animation with stagger
    gsap.fromTo(videoItemsRef.current,
      {
        y: 60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Hover animations for video items
    videoItemsRef.current.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.video-preview'), {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.video-preview'), {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    return () => {
      // Clean up event listeners
      videoItemsRef.current.forEach((item) => {
        if (item) {
          item.removeEventListener('mouseenter', () => { });
          item.removeEventListener('mouseleave', () => { });
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="px-6 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="hero-content">
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">KEYFRAMEZ</span>
          </h1>
          <div className="hero-subtitle text-base md:text-2xl text-black  mt-20 mb-12 leading-relaxed w-full ">
            Welcome to
             <strong className="text-purple-300 font-bold"> KEYFRAMEZ </strong>
            a full-service animation and video production studio that turns ideas into visually striking stories. From <span className=" font-bold">corporate videos and explainer films to 3D simulations, AR/VR experiences, and e-learning content</span>, we help brands educate, inspire, and connect with audiences.
           <p> Our work blends creativity, strategy, and technology. Our mission is simple — to make your ideas unforgettable.</p>

          </div>


        </div>
      </section>

      {/* Services Section */}
      <div className="services-header text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">OUR SERVICES</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor
        centeredSlides
        slidesPerView={"auto"}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }} coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        pagination
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper custom-pagination"
      >
        {services.map((item, index) => (
          <SwiperSlide key={item.title}  >
            <div
              className="cursor-pointer"
              onClick={() => navigate(`${item.path}`)}
            >
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl object-cover"
              />

              <div className="mt-3  text-center text-black font-semibold md:text-3xl text-xl text-nowrap mb-10">
                {item.title}
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Services;