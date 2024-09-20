import React, { useState, useEffect } from "react";
import procedure4 from "../../assets/image/procedure4.png";

function Step4() {
  const [time, setTime] = useState(900);

  useEffect(() => {
    if (time < 1) {
      return;
    }
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  const format = (time) => {
    const minute = Math.floor(time / 60);
    const second = time % 60;
    return `${minute}:${second < 10 ? "0" + second : second}`;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <span className="text-2xl font-semibold mb-5">
        หยดสารละลายที่ได้จากหลอดทดลองลงบนชุดทดสอบ 3 หยด เพื่อตรวจหาผลการทดสอบ
        จับเวลา 15 นาที
      </span>
      <div className="text-4xl font-bold mb-5">{format(time)}</div>
      <img src={procedure4} alt="firststep" className="w-[600px] mb-16" />
    </div>
  );
}

export default Step4;
