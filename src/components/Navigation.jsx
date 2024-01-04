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
        <header className="md-container mx-auto ">
            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
                className="bg-[#F3B664]"
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand className="mr-12">
                        <p className="font-extrabold text-inherit text-black">
                            <strong>Fidaa Mahboob</strong>
                        </p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent
                    className="hidden sm:flex gap-4 text-black"
                    justify="center"
                >
                    
                    <NavbarItem>
                        <Link
                            className="text-white font-bold hover:text-orange-700"
                            href="#"
                        >
                About
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link
                            href="#projects"
                            className="text-white font-bold hover:text-orange-700"
                            aria-current="page"
                        >
                Projects
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            href="#contact"
                            className="text-white font-bold hover:text-orange-700"
                        >
                Contact
                        </Link>
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
