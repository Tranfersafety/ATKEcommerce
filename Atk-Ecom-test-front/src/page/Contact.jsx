import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Mapgoogle from "../component/map";
function Contact() {
  return (
    <div className="w-full flex flex-col items-center">
      <Nav />
      <main className=" w-[1440px] flex flex-col items-center  h-[100vh] ">
        <h1 className="text-4xl font-semibold mt-10 mb-20">ติดต่อเรา</h1>
        <div className="flex gap-4">
          <Mapgoogle />
          <span>
            บริษัท อินโนซุส จำกัด <br />
            12 ซอยพระยาสุเรนทร์ 35 ถนนพระยาสุเรนทร์ <br />
            แขวงบางชัน กรุงเทพฯ 10510 <br />
            อีเมล contact@innozus.com <br />
            โทรศัพท์ (+66) 64 253 6250
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
