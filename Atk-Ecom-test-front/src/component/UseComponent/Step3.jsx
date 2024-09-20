import React from "react";
import procedure3 from "../../assets/image/procedure3.png";
function Step3() {
  return (
    <div className="w-full flex flex-col items-center">
      <span className="text-2xl font-semibold mb-10">
        ใช้มือบีบหลอดทดลองเบาๆ
        เพื่อให้น้ำยาผสมกับตัวอย่างน้ำลายให้เข้ากันอย่างสมบูรณ์
      </span>
      <img src={procedure3} alt="firststep" className="w-[600px] mb-16" />
    </div>
  );
}

export default Step3;
