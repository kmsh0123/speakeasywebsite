import React from 'react';
import { Typography } from "@material-tailwind/react";
import bgImage from "../assets/contactus.avif"; // Replace with your image

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#3f321c] text-white font-sans" id="contact-us">
      
      {/* Left - Image with overlay text */}
      <div className="relative w-full md:w-2/3 h-[400px] md:h-auto">
        <img
          src={bgImage}
          alt="Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-orange-500 text-xl">📍</span>
            <Typography variant="h6" className="text-white">Speakeasy</Typography>
          </div>
          <Typography variant="h2" className="text-white font-bold leading-tight">
            Vive la experiencia <br /> de tu vida.
          </Typography>
        </div>
      </div>

      {/* Right - Info Section */}
      <div className="w-full md:w-1/3 p-6 flex flex-col justify-center gap-6">
        <div>
          <Typography variant="h6" className="mb-1">Dirección</Typography>
          <Typography>Calle 123, Colonia,<br /> Ciudad, Estado,<br /> País.<br /> C.P. 12345</Typography>
        </div>

        <div>
          <Typography variant="h6" className="mb-1">Contacto</Typography>
          <Typography>Teléfono: (55) 1234 5678<br />Celular: (55) 1234 5678</Typography>
          <Typography className="text-white font-semibold mt-1">hola@sitioincreible.com</Typography>
        </div>

        <div>
          <Typography variant="h6" className="mb-1">Horarios de oficina</Typography>
          <Typography>
            Lunes: 8:00 a. m. - 7:00 p. m.<br />
            Martes: 8:00 a. m. - 5:00 p. m.<br />
            Miércoles: 8:00 a. m. - 5:00 p. m.<br />
            Jueves: 8:00 a. m. - 7:00 p. m.<br />
            Viernes: 8:00 a. m. - 5:00 p. m.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
