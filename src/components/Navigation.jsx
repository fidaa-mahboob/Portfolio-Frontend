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
                className="bg-[#FFC47E]"
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand className="mr-4">
                        <p className="font-extrabold text-inherit">
                            <strong>Fidaa Mahboob</strong>
                        </p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent
                    className="hidden sm:flex gap-4 text-white"
                    justify="center"
                >
                    <NavbarBrand>
                        <p className="font-bold text-inherit">
                            <strong>Fidaa Mahboob</strong>
                        </p>
                    </NavbarBrand>
                    <NavbarItem>
                        <Link className="text-white font-bold" href="#">
                About
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#projects" className="text-white font-bold" aria-current="page">
                Projects
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-white font-bold">
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
                            className="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-2.5 py-2 outline-3"
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
