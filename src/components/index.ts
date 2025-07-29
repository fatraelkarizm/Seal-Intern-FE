import React from 'react'

const Navbar = React.lazy(() => import("@/components/Navbar"));
const Footer = React.lazy(() => import("@/components/Footer"));

export { Navbar, Footer }