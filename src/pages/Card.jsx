import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import download from "../assets/canada.jpg";
import download1 from "../assets/download.webp";
import download2 from "../assets/malta.webp";
import { Link as ScrollLink } from "react-scroll";

export function CardDefault() {
  return (
    <div className="bg-[#504128] p-5">
      <h1 className="text-3xl font-bold text-center p-5 text-white" id="destinos">
        Destinos
      </h1>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 px-4">
        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={download} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Canada
            </Typography>
            <Typography as="div" className="font-normal">
              <ul className="list-disc pl-5">
                <li>Alojamiento</li>
                <li>Vuelo</li>
                <li>Actividades</li>
                <li>Comidas</li>
                <li>Etc</li>
              </ul>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <ScrollLink
              to="contact-us"
              smooth={true}
              duration={500}
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#FF8C00] w-full rounded-lg">
                Más información
              </Button>
            </ScrollLink>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={download1}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Reino Unido
            </Typography>
            <Typography as="div" className="font-normal">
              <ul className="list-disc pl-5">
                <li>Alojamiento</li>
                <li>Vuelo</li>
                <li>Actividades</li>
                <li>Comidas</li>
                <li>Etc</li>
              </ul>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <ScrollLink
              to="contact-us"
              smooth={true}
              duration={500}
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#FF8C00] w-full rounded-lg">
                Más información
              </Button>
            </ScrollLink>
          </CardFooter>
        </Card>

        <Card className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={download2}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Malta
            </Typography>
            <Typography as="div" className="font-normal">
              <ul className="list-disc pl-5">
                <li>Alojamiento</li>
                <li>Vuelo</li>
                <li>Actividades</li>
                <li>Comidas</li>
                <li>Etc</li>
              </ul>
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
           <ScrollLink
              to="contact-us"
              smooth={true}
              duration={500}
              className="w-full sm:w-auto"
            >
              <Button className="bg-[#FF8C00] w-full rounded-lg">
                Más información
              </Button>
            </ScrollLink>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
