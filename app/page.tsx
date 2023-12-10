import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React from "react";

function page() {
  return (
    <div className="w-screen h-screen flex pt-2 gap-2">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default page;
