import { Link } from 'react-router-dom';
import { Youtube, Instagram, Facebook, Send, Twitter } from 'lucide-react';

import { SealLogoWhite } from '@/assets';

import routes from '@/routes';

const Footer = () => {
  const mainNavItems = routes.filter(route => 
    ['Landing', 'Terbaru', 'Hiburan', 'Gaya Hidup', 'Olahraga', 'Nasional', 'Internasional'].includes(route.name)
  );
  
  const supportItems = routes.filter(route => 
    ['Kontak', 'Laporan Pembajakan', 'Kebijakan'].includes(route.name)
  );

  return (
    <footer className="bg-[#2C3C4D] py-8 text-gray-300">
      <div className="container mx-auto md:px-8 lg:px-16">
        {/* Mobile Layout - Stack Vertically */}
        <div className="block md:hidden space-y-8">
          {/* Logo & Copyright */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <img src={SealLogoWhite} alt="Berita Kini Logo" className="h-8 w-auto mr-2" />
              <span className="text-white text-2xl font-semibold">Berita Kini</span>
            </div>
            <p className="text-sm text-gray-400">© 2023 Berita Kini. All Rights Reserved.</p>
          </div>

          {/* Social Media - Centered */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Berita Kini</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-blue-600 transition-colors">
                <Facebook size={22} className="text-white" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-black transition-colors">
                <Twitter size={22} className="text-white" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-pink-600 transition-colors">
                <Instagram size={22} className="text-white" />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-red-600 transition-colors">
                <Youtube size={22} className="text-white" />
              </a>
            </div>
          </div>

          {/* Navigation Links - Compact */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-center">
            <div>
              <h3 className="text-base font-semibold text-white mb-3">Telusuri</h3>
              <div className="space-y-2">
                {mainNavItems.slice(0, 4).map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-base font-semibold text-white mb-3">Lainnya</h3>
              <div className="space-y-2">
                {mainNavItems.slice(4).concat(supportItems).map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center">
            <h3 className="text-base font-semibold text-white mb-3">Berlangganan Berita Terbaru</h3>
            <div className="flex max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Masukkan email"
                className="flex-grow px-3 py-2 rounded-l-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button className="bg-blue-500 text-white px-3 py-2 rounded-r-md hover:bg-blue-600 transition-colors flex items-center justify-center">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-y-12 lg:gap-8">
          {/* Bagian 1: Logo, Copyright & Ikuti Kami */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <img src={SealLogoWhite} alt="Berita Kini Logo" className="h-16 w-auto mr-2" />
              <span className="text-white text-3xl font-semibold">Berita Kini</span>
            </div>
            <p className="text-sm">© 2023 Berita Kini. All Rights Reserved.</p>

            {/* Ikuti Kami (Follow Us) */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Ikuti Kami</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-700 hover:bg-blue-600 transition-colors">
                  <Facebook size={20} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-700 hover:bg-black transition-colors">
                  <Twitter size={20} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-700 hover:bg-pink-600 transition-colors">
                  <Instagram size={20} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-700 hover:bg-red-600 transition-colors">
                  <Youtube size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bagian 2: Telusuri */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Telusuri</h3>
            <ul className="flex flex-col space-y-3">
              {mainNavItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors text-base font-normal block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bagian 3: Bantuan */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Bantuan</h3>
            <ul className="flex flex-col space-y-3">
              {supportItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-white transition-colors text-base font-normal block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bagian 4: Berlangganan Berita Terbaru */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Berlangganan Berita Terbaru</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Masukkan email"
                className="flex-grow px-4 py-2 rounded-l-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors flex items-center justify-center">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;