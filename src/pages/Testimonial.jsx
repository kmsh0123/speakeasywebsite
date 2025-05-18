import React from 'react';
import testimonialBg from "../assets/testimonial.jpg";
import testimonial from "../assets/testimonial1.png";
import testimonial1 from "../assets/testimonial2.png";
import testimonial2 from "../assets/testimonial3.png";
import { TestimonialCard } from './TestimonialCard';
import { Typography } from '@material-tailwind/react';

const testimonialData = [
  {
    name: "Dunk",
    avatar: testimonial,
    description:
      "I spent a month in Sant Pere de Ribes, a lovely town in Spain. It was my first time there, and I really enjoyed the peaceful vibe. I studied English at SpeakEasy, where the course followed the Cambridge system and was taught by a native speaker. The teachers, staff, and students were all super friendly and helpful, which made learning fun and easy. Besides studying, I got to explore places like Barcelona and Sitges and experience Spanish culture. It was a great mix of learning and living, and an experience I won’t forget.",
  },
  {
    name: "Julia Fuentes",
    avatar: testimonial1,
    description:
      "Incluye testimonios de clientes para aumentar la credibilidad de tus productos y servicios...",
  },
  {
    name: "Lucía de la Garza",
    avatar: testimonial2,
    description:
      "Incluye testimonios de clientes para aumentar la credibilidad de tus productos y servicios...",
  },
];

const Testimonial = () => {
  return (
    <div className="relative w-full" id="testimonial">

       {/* Title */}
  <Typography
    variant="h2"
    className="absolute top-6 left-1/2 transform -translate-x-1/2 z-[4] text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-[#f2f2f2] px-4 py-2 rounded-md"
  >
    Nuestros viajeros favoritos
  </Typography>
      {/* Background Image */}
      <img
        src={testimonialBg}
        alt="testimonial background"
        className="w-full h-auto"
      />



      {/* Testimonial Cards */}
      <div className="absolute inset-0 z-[3] px-4 sm:px-6 md:px-10 py-6 overflow-x-auto">
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 pt-28">
          {testimonialData.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              avatar={item.avatar}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
