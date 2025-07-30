import React from 'react';

const Hero = React.lazy(() => import("@/pages/Hero"));
const Landing = React.lazy(() => import("@/pages/Landing"));
const GayaHidup = React.lazy(() => import("@/pages/GayaHidup"));
const Hiburan = React.lazy(() => import("@/pages/Hiburan"));
const Internasional = React.lazy(() => import("@/pages/Internasional"));
const Nasional = React.lazy(() => import("@/pages/Nasional"));
const Olahraga = React.lazy(() => import("@/pages/Olahraga"));
const Terbaru = React.lazy(() => import("@/pages/Terbaru"));
const Laporan = React.lazy(() => import("@/pages/Laporan"));
const Kebijakan = React.lazy(() => import("@/pages/Kebijakan"));
const Kontak = React.lazy(() => import("@/pages/Kontak"));

export { 
     Hero, 
     Landing,
     GayaHidup,
     Hiburan,
     Internasional,
     Nasional,
     Olahraga,
     Terbaru,
     Laporan,
     Kebijakan,
     Kontak
};