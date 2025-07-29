import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X } from "lucide-react";

import SealLogo from '@/assets/Seal-Logo.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Terbaru", href: "/terbaru" },
    { name: "Hiburan", href: "/hiburan" },
    { name: "Gaya Hidup", href: "/gayaHidup" },
    { name: "Olahraga", href: "/olahraga" },
    { name: "Nasional", href: "/nasional" },
    { name: "Internasional", href: "/internasional" },
  ];

  const isActiveItem = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  return (
    <nav className="bg-white py-8 shadow-sm relative z-10">
      {/* Container utama navbar */}
      <div className='container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center'>
        {/* Logo / Brand (kiri) */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2">
            <picture>
                <img src={SealLogo} alt="Berita Kini Logo" className="h-10 w-auto" />
            </picture>
            <span className="text-[#111B26] text-xl font-semibold">Berita Kini</span>
          </Link>
        </div>

        {/* Menu Navigasi Desktop (kanan) */}
        <div className="hidden md:flex items-center md:ml-8 lg:ml-12">
          <NavigationMenu>
            <NavigationMenuList className="gap-x-[10px]">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <NavLink
                      to={item.href}
                      className="text-base font-medium transition-colors duration-200"
                      end={item.href === "/"}
                    >
                      <span className={
                        isActiveItem(item.href)
                          ? 'text-[#0090FF] text-center'
                          : 'text-[#828282] hover:text-[#0090FF] focus:text-[#0090FF] text-center'
                      }>
                        {item.name}
                      </span>
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuIndicator />
          </NavigationMenu>
        </div>

        {/* Tombol Hamburger Menu untuk Mobile (kanan atas) */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:bg-gray-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Konten Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={
                    isActiveItem(item.href)
                      ? 'block py-2 text-base font-medium text-[#0090FF]'
                      : 'block py-2 text-base font-medium text-[#828282] hover:text-[#0090FF]'
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end={item.href === "/"}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;