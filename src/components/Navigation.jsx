import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        "Home",
        "About",
        "Projects",
        "Contact",
    ];

    return (
        <header className="md-container mx-auto">
            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <p className="font-bold text-inherit">
                            <strong>Fidaa Mahboob</strong>
                        </p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarBrand>
                        <p className="font-bold text-inherit">
                            <strong>Fidaa Mahboob</strong>
                        </p>
                    </NavbarBrand>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                About
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#projects" aria-current="page">
                Projects
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                console.log("clicked");
                            }}
                            href="#"
                            className="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2.5 py-2 dark:focus:ring-yellow-900"
                        >
                Download CV
                        </button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2
                                        ? "warning"
                                        : index === menuItems.length - 1
                                            ? "danger"
                                            : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </header>
    );
};

export default Navigation;
