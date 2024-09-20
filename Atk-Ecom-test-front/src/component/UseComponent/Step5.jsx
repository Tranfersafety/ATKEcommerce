import React from "react";
import procedure5 from "../../assets/image/procedure5.png";

function Step5() {
  return (
    <div className="w-full flex flex-col items-center">
      <span className="text-2xl font-semibold mb-10">อ่านผลการทดสอบ</span>
      <img src={procedure5} alt="firststep" className="w-[600px] mb-16" />
    </div>
  );
}

export default Step5;
