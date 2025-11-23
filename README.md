# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.








  <section ref={servicesRef} className="services-section px-6 py-16 max-w-7xl mx-auto">
        <div className="services-header text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">OUR SERVICES</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={addToVideoItemsRef}
              className="service-video-item group"
            >
              {/* Video Preview */}
             zz <div className="video-preview mb-6 rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="aspect-video flex items-center justify-center relative">
                  {/* <div className="text-gray-500 text-lg font-medium">
                    {service.video}

                  </div> */}
                  {/* Play button overlay */}
                  {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div> */}
                   <video src='/video.mp4' autoPlay muted className='object-contain' />
                </div>
              </div>

              {/* Content */}
              <div className="service-content text-center">
                <h3 className="service-title text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="service-description text-gray-600 mb-6 leading-relaxed text-lg">
                  {service.description}
                </p>
                <button className="service-cta inline-flex items-center text-blue-600 font-semibold text-lg group-hover:text-purple-600 transition-colors duration-300 border-b-2 border-transparent group-hover:border-blue-600 pb-1">
                  Watch Demo
                  <span className="arrow ml-3 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
              
            </div>
          ))}
        </div>
        
      </section>