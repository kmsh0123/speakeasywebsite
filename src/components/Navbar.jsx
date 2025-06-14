import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center hover:text-blue-500 transition-colors cursor-pointer"
        >
          Home
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ScrollLink
          to="aboutUs"
          smooth={true}
          duration={500}
          className="flex items-center hover:text-blue-500 transition-colors cursor-pointer"
        >
          About Us
        </ScrollLink>
      </Typography>
       <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ScrollLink
          to="travel"
          smooth={true}
          duration={500}
          className="flex items-center hover:text-blue-500 transition-colors cursor-pointer"
        >
          Travel
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <ScrollLink
          to="testimonial"
          smooth={true}
          duration={500}
          className="flex items-center hover:text-blue-500 transition-colors cursor-pointer"
        >
          Testimonial
        </ScrollLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        {/* <Link
          to="/contact-us"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact Us
        </Link> */}
        <ScrollLink
          to="contact-us"
          smooth={true}
          duration={500}
          className="flex items-center hover:text-blue-500 transition-colors cursor-pointer"
        >
          Contact Us
        </ScrollLink>
      </Typography>
    </ul>
  );
}

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 fixed left-0 right-0 z-10 bg-white">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          SpeakEasySpain
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
