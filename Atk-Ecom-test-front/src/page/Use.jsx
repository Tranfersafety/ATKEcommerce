import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Use() {
  return (
    <div className="w-full flex flex-col items-center ">
      <Nav />
      <main className=" w-[1440px] flex flex-col items-center mb-20 h-[100vh] ">
        <h1 className="text-4xl font-semibold mt-10 mb-10">ขั้นตอนการใช้งาน</h1>
        <div className="flex mb-10 gap-2">
          <Link to="step1" className="mx-2 p-2 bg-blue-500 text-white rounded">
            Step 1
          </Link>
          <Link to="step2" className="mx-2 p-2 bg-blue-500 text-white rounded">
            Step 2
          </Link>
          <Link to="step3" className="mx-2 p-2 bg-blue-500 text-white rounded">
            Step 3
          </Link>
          <Link to="step4" className="mx-2 p-2 bg-blue-500 text-white rounded">
            Step 4
          </Link>
          <Link to="step5" className="mx-2 p-2 bg-blue-500 text-white rounded">
            Step 5
          </Link>
        </div>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Use;
