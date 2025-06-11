import { Button } from "@material-tailwind/react";
import React from "react";
import herosection from "../assets/aboutus.jpg";
import { Link as ScrollLink } from "react-scroll";

const AboutUs = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row-reverse justify-between items-center rounded-lg gap-10 px-4 py-10 bg-[#504128]"
      id="aboutUs"
    >
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl sm:text-4xl text-center p-6 text-white font-semibold">
          Te facilitamos el viajar
        </h1>
        <p className="text-sm sm:text-base text-center font-medium text-white px-2">
          Fundada en 1999, Speakeasy es una academia de idiomas de gran renombre
          situada en Sant Pere de Ribes, Cataluña. Con planes individualizdos de
          intercambios internacionales, Speakasy te ayuda a programar todo lo
          necesario para vivir una experiència que recordaras de por vida.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-6 px-4">
          <ScrollLink to="destinos" smooth={true} duration={500} className="w-full sm:w-auto">
            <Button className="bg-[#FF8C00] px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all w-full">
              DESTINOS
            </Button>
          </ScrollLink>

          <ScrollLink to="idiomas" smooth={true} duration={500} className="w-full sm:w-auto">
            <Button className="bg-[#FF8C00] px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all w-full">
              CLASES DE IDIOMAS
            </Button>
          </ScrollLink>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={herosection}
          alt="about us"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutUs;
