import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const images = [
  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=400&h=300&fit=crop",
  "https://i.pinimg.com/736x/89/77/9b/89779b46c1ddc6e8b5542c6aeaf5ca8a.jpg",
  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400&h=300&fit=crop",
  "https://i.pinimg.com/736x/4d/76/a3/4d76a3603204b1ac48fdb29383653cdd.jpg",
  "https://i.pinimg.com/736x/63/0d/81/630d810ed9efa3817a5492ef082db9f3.jpg",
];

const Gallery = () => (
  <section className="section-padding bg-white">
    <div className="container mx-auto px-4">
      <h2 className="section-title text-center text-orange-600 mb-8">
        Galería de Mascotas Felices después del servicio
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        loop={true}
        speed={8000}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        style={{ maxWidth: "900px", margin: "0 auto" }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Mascota feliz ${idx + 1}`}
              className="rounded-2xl shadow-lg w-full max-w-xs h-56 object-cover mx-auto transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Gallery;