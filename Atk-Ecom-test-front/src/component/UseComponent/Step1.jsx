import React from "react";
import procedure1 from "../../assets/image/procedure1.png";

function Step1() {
  return (
    <div className="w-full flex flex-col items-center">
      <span className="text-2xl font-semibold mb-10">
        ผู้ทดสอบเก็บตัวอย่างน้ำลาย โดยให้ค่อยๆ
        ปล่อยน้ำลายลงในกรวยที่เชื่อมต่อกับหลอดทดลอง <br />
        เพื่อเตรียมตัวอย่างสำหรับการทดสอบ
      </span>
      <img src={procedure1} alt="firststep" className="w-[600px] mb-16" />
    </div>
  );
}

export default Step1;
