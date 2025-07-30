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

import {SealLogo} from '@/assets/';
import { SealLogoWhite } from '@/assets';

import routes from '@/routes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter routes untuk navbar (exclude pages seperti kontak, kebijakan, dll)
  const navItems = routes.filter(route => 
    ['Landing', 'Terbaru', 'Hiburan', 'Gaya Hidup', 'Olahraga', 'Nasional', 'Internasional'].includes(route.name)
  ).map(route => ({
    name: route.name === 'Landing' ? 'Beranda' : route.name, 
    href: route.path
  }));

  // Function untuk menentukan apakah menu item aktif
  const isActiveItem = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  return (
    <nav className={`shadow-sm z-50 sticky top-0 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0090FF] py-6' 
        : 'bg-white py-6'
    }`}>
      {/* Container utama navbar */}
      <div className={`container mx-auto flex justify-between items-center transition-all duration-300 ${
        isScrolled 
          ? 'px-4 md:px-8 lg:px-16' 
          : 'px-4 md:px-8 lg:px-16'
      }`}>
        {/* Logo / Brand (kiri) */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/" className="flex items-center space-x-2">
            <picture>
              <img 
                src={isScrolled ? SealLogoWhite : SealLogo} 
                alt="Berita Kini Logo" 
                className="h-8 w-auto transition-all duration-300" 
              />
            </picture>
            <span className={`text-xl font-semibold transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-[#111B26]'
            }`}>Berita Kini</span>
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
                          ? isScrolled 
                            ? 'text-white text-center' 
                            : 'text-[#0090FF] text-center'
                          : isScrolled
                            ? 'text-white/80 hover:text-white focus:text-white text-center'
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
            className={`transition-colors duration-300 ${
              isScrolled 
                ? 'text-white hover:bg-white/20' 
                : 'text-gray-800 hover:bg-gray-200'
            }`}
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