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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {[ 
          { img: download, title: "Canada" },
          { img: download1, title: "Reino Unido" },
          { img: download2, title: "Malta" },
        ].map((card, index) => (
          <Card key={index} className="mt-6 w-full max-w-sm mx-auto">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={card.img} alt={`${card.title}-image`} className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-center"
              >
                {card.title}
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
                className="w-full"
              >
                <Button className="bg-[#FF8C00] w-full rounded-lg">
                  Más información
                </Button>
              </ScrollLink>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
