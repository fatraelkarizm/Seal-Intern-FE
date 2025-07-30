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
  Kontak,
  Laporan,
  Kebijakan
} from "@/pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<Landing />} />
          <Route path="gayahidup" element={<GayaHidup />} />
          <Route path="hiburan" element={<Hiburan />} />
          <Route path="internasional" element={<Internasional />} />
          <Route path="nasional" element={<Nasional />} />
          <Route path="olahraga" element={<Olahraga />} />
          <Route path="terbaru" element={<Terbaru />} />
          <Route path="laporan" element={<Laporan />} />
          <Route path="kebijakan" element={<Kebijakan />} />
          <Route path="kontak" element={<Kontak />} />

          {/* If Necessary aja */}
          {/* <Route path="*" element={<div>Halaman Tidak Ditemukan (404)</div>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
