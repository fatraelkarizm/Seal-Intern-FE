// src/App.jsx

// BrowserRouter
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Layout Component
import LayoutDefault from "@/layout";

// Pages
import {
  Landing,
  GayaHidup,
  Hiburan,
  Internasional,
  Nasional,
  Olahraga,
  Terbaru,
} from "@/pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          Route induk ini akan merender LayoutDefault.
          Semua <Route> yang didefinisikan di dalam ini akan menjadi anak-anaknya
          dan akan dirender di dalam <Outlet /> di LayoutDefault.
        */}
        <Route path="/" element={<LayoutDefault />}>
          {/*
            Definisikan semua rute anak langsung di sini.
            Path-nya akan relatif terhadap parent LayoutDefault.
          */}
          <Route index element={<Landing />} />
          <Route path="gayahidup" element={<GayaHidup />} />
          <Route path="hiburan" element={<Hiburan />} />
          <Route path="internasional" element={<Internasional />} />
          <Route path="nasional" element={<Nasional />} />
          <Route path="olahraga" element={<Olahraga />} />
          <Route path="terbaru" element={<Terbaru />} />

          {/* Opsional: Rute untuk 404 Not Found (jika ada URL yang tidak cocok) */}
          {/* <Route path="*" element={<div>Halaman Tidak Ditemukan (404)</div>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
