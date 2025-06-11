import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import travel from "../assets/airplane.jpg";
import travel1 from "../assets/travel1.jpg";
import travel2 from "../assets/travel2.webp";
import travel3 from "../assets/travel3.jpg";
import { Link as ScrollLink } from "react-scroll";

export function Travel() {
  return (
    <div className="container mx-auto px-4 py-8 bg-[#504128]" id="travel">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-10 text-white">
        Nos encargamos del viaje por ti
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={travel}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Reserva de vuelos
            </Typography>
            <Typography>
              Nos encargamos de buscarte tanto los vuelos de ida como los de
              vuelta.
            </Typography>
          </CardBody>
        </Card>

        <Card className="w-full">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={travel1}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Tours y actividades
            </Typography>
            <Typography>
              Te organizamos diferentes actividades para conocer el lugar y
              aprender sobre su cultura.
            </Typography>
          </CardBody>
        </Card>

        <Card className="w-full pt-5 lg:pt-0">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={travel2}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Transporte
            </Typography>
            <Typography>
              Te organizamos el transporte entre actividades y aeropuertos.
            </Typography>
          </CardBody>
        </Card>

        <Card className="w-full pt-5 lg:pt-0">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={travel3}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Alojamiento
            </Typography>
            <Typography>
              Alójate con una familia y siéntete como uno más, o reserva una
              habitación, también te ayudamos!
            </Typography>
          </CardBody>
        </Card>
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
