"use client";

import React from "react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ReactQueryProvider from "@/providers/reactQueryProvider";

const SimplyblueApplicationLayout = ({ children }) => {
  return (
    <ReactQueryProvider>
      <div className="flex flex-col min-h-screen bg-white">
        <header className="sticky top-0 z-50 bg-primary-dark drop-shadow-lg drop-shadow-gray-200 shadow-md px-3">
          <Header />
        </header>

        <main className="flex-1 overflow-y-auto">{children}</main>

        <footer className="bg-primary-dark mt-auto">
          <Footer />
        </footer>
      </div>
    </ReactQueryProvider>
  );
};

export default SimplyblueApplicationLayout;
