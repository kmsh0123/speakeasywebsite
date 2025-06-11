import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import travel from "../assets/airplane.jpg";
import travel1 from "../assets/travel1.jpg";
import travel2 from "../assets/travel2.webp";
import travel3 from "../assets/travel3.jpg";
import { Link as ScrollLink } from "react-scroll";

export function Travel() {
  const cardData = [
    {
      title: "Reserva de vuelos",
      description: "Nos encargamos de buscarte tanto los vuelos de ida como los de vuelta.",
      image: travel,
    },
    {
      title: "Tours y actividades",
      description:
        "Te organizamos diferentes actividades para conocer el lugar y aprender sobre su cultura.",
      image: travel1,
    },
    {
      title: "Transporte",
      description:
        "Te organizamos el transporte entre actividades y aeropuertos.",
      image: travel2,
    },
    {
      title: "Alojamiento",
      description:
        "Alójate con una familia y siéntete como uno más, o reserva una habitación, también te ayudamos!",
      image: travel3,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-[#504128]" id="travel">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-10 text-white">
        Nos encargamos del viaje por ti
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 space-y-5 md:space-y-0">
        {cardData.map((card, index) => (
          <Card key={index} className="w-full max-w-sm mx-auto">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={card.image}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {card.title}
              </Typography>
              <Typography>{card.description}</Typography>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <ScrollLink
          to="contact-us"
          smooth={true}
          duration={500}
          className="w-full sm:w-auto"
        >
          <Button className="bg-[#FF8C00] px-6 py-3 text-sm md:text-base">
            CLASES DE IDIOMAS
          </Button>
        </ScrollLink>
      </div>
    </div>
  );
}
