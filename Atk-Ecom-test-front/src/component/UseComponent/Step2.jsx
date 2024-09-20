import React from "react";
import procedure2 from "../../assets/image/procedure2.png";

function Step2() {
  return (
    <div className="w-full flex flex-col items-center ">
      <span className="text-2xl font-semibold mb-10">
        นำน้ำยาทดสอบหยดลงไปในหลอดทดลองที่มีตัวอย่างน้ำลาย <br />
        ซึ่งน้ำยานี้จะช่วยในการเตรียมตัวอย่างให้พร้อมสำหรับการทดสอบต่อไป
      </span>
      <img src={procedure2} alt="firststep" className="w-[600px] mb-16" />
    </div>
  );
}

export default Step2;
