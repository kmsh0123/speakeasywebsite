import { Button } from "@material-tailwind/react";
import React from "react";
import download4 from "../assets/certificate.jpg";
import { Link as ScrollLink } from "react-scroll";

const Certificate = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-center rounded-lg gap-10 pt-24 px-4"
      id="idiomas"
    >
      <div className="bg-[#504128] w-full p-5">
        <h1 className="text-6xl text-center p-10 text-white font-semibold">
          Idiomas
        </h1>
        <p className="text-xl text-center text-white">
          Descubre nuestros cursos de inglés presenciales para todas las edades,
          y preséntate a exámenes oficiales para conseguir un título.
        </p>
        <div className="flex justify-center mt-10">
          <ScrollLink
            to="contact-us"
            smooth={true}
            duration={500}
            className="w-full sm:w-auto"
          >
            <Button className="bg-[#FF8C00] w-full rounded-lg">
             Contáctenos
            </Button>
          </ScrollLink>
        </div>
      </div>
      <div>
        <img src={download4} alt="" className="rounded-lg" />
      </div>
    </div>
  );
};

export default Certificate;
