import React from "react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function Header() {
  return (
    <Navbar maxWidth="full" className="bg-slate-0">
      <NavbarBrand>
        <p className="font-bold  text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400
        text-transparent bg-clip-text">Hassan M.</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">WhatsApp</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} color="success" href="#" variant="flat">
           WhatsApp
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
