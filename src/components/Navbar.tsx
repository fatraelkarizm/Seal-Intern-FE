import React from 'react';
import { NavLink, Link } from 'react-router-dom';

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

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Terbaru", href: "/terbaru" },
    { name: "Hiburan", href: "/hiburan" },
    { name: "Gaya Hidup", href: "/gayaHidup" },
    { name: "Olahraga", href: "/olahraga" },
    { name: "Nasional", href: "/nasional" },
    { name: "Internasional", href: "/internasional" },
  ];

  return (
    <nav className="bg-white py-8 shadow-sm relative z-10">
      <div className='container mx-auto px-4 md:px-8 lg:px-18 flex justify-between items-center'>
        {/* Logo / Brand (kiri) */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <picture>
                <img src={SealLogo} alt="Berita Kini Logo" className="h-8 w-auto" />
            </picture>
            <span className="text-[#111B26] text-xl font-semibold">Berita Kini</span>
          </Link>
        </div>

        {/* Menu Navigasi Desktop (kanan) */}
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-x-8"> {/* Menggunakan gap-x-8 untuk jarak antar item */}
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `text-base font-medium transition-colors duration-200 ${
                          isActive
                            ? 'text-[#0090FF]' // Warna biru (#0090FF) jika aktif
                            : 'text-[#828282] hover:text-[#0090FF]' // Warna abu-abu (#828282) jika tidak aktif, dan biru saat hover
                        }`
                      }
                      end={item.href === "/"}
                    >
                      {item.name}
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

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block py-2 text-base font-medium ${
                      isActive
                        ? 'text-[#0090FF]'
                        : 'text-[#828282] hover:text-[#0090FF]'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)} // Tutup menu setelah klik
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