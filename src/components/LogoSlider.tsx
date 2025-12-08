import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const LogoSlider = () => {
  const logos = [
    {
      id: 1,
      name: "Partner 1",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg",
    },
    {
      id: 2,
      name: "Partner 2",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg",
    },
    {
      id: 3,
      name: "Partner 3",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg",
    },
    {
      id: 4,
      name: "Partner 4",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg",
    },
    {
      id: 5,
      name: "Partner 5",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg",
    },
  ];

  const allLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full py-16 bg-linear-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-sm text-slate-300 max-w-2xl mx-auto">
            Join hundreds of businesses already using ADswift Connect for their
            wallet solutions
          </p>
        </div>

        <div className="relative overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            speed={2000}
            allowTouchMove={false}
            simulateTouch={false}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
            className="logo-slider"
          >
            {allLogos.map((logo, index) => (
              <SwiperSlide key={`${logo.id}-${index}`}>
                <div className="flex items-center justify-center h-32">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-12 sm:max-h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 mx-auto"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-slate-900 via-slate-900 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-slate-900 via-slate-900 to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
