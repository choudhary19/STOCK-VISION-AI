import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import WhyChooseUsItem from './WhyChooseUsItem';

const WhyChooseUs = () => {
  const sliderItems = [
    { src: 'public/img/icon/choose_icon01.svg', alt: '', link: '/', title: 'Mobile payment made easy here', description: 'Add new, trending, and rare artwork to your collection.' },
    { src: 'public/img/icon/choose_icon02.svg', alt: '', link: '/', title: 'Lifetime free transaction', description: 'Add new, trending, and rare artwork to your collection.' },
    { src: 'public/img/icon/choose_icon03.svg', alt: '', link: '/', title: 'Protect the identity', description: 'Add new, trending, and rare artwork to your collection.' },
    { src: 'public/img/icon/choose_icon04.svg', alt: '', link: '/', title: 'Security & control over money', description: 'Add new, trending, and rare artwork to your collection.' },
    { src: 'public/img/icon/choose_icon01.svg', alt: '', link: '/', title: 'Lifetime free transaction', description: 'Add new, trending, and rare artwork to your collection.' },
    { src: 'public/img/icon/choose_icon03.svg', alt: '', link: '/', title: 'Protect the identity', description: 'Add new, trending, and rare artwork to your collection.' },
    { src: 'public/img/icon/choose_icon04.svg', alt: '', link: '/', title: 'Security & control over money', description: 'Add new, trending, and rare artwork to your collection.' },
  ];


  return (
    <section
      className="choose-area pb-20"
      style={{
        backgroundImage: "url('public/img/Banner/banner_bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto">
        <div className="text-center py-10">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white  mb-700 uppercase">
            Why Choose Us?
          </h1>
        </div>

        <Swiper
          modules={[Navigation, Pagination]} // Add modules here
          spaceBetween={20}
          slidesPerView={2  } // Change to 1 for mobile view
          // Set the number of slides to display at different breakpoints
          // This is an object where the keys are the breakpoints (in pixels)
          // and the values are objects with a `slidesPerView` property
          // that specifies the number of slides to display at that breakpoint
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            540: {
              slidesPerView: 2,
            },

          }}
          navigation
          pagination={{ clickable: true }}
          className="flex justify-center"
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index} className="py-10 flex justify-center">
              <WhyChooseUsItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default WhyChooseUs;