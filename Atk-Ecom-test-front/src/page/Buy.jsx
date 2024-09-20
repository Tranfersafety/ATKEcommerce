import React, { useEffect, useState } from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Productitem from "../assets/image/product.png";

function Buy() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [bill, setBill] = useState({
    name: "",
    surname: "",
    address: "",
    province: "",
    tel: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBill({
      ...bill,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const backend = import.meta.env.VITE_BACKEND;
    console.log(backend);

    const response = await fetch(backend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bill),
    });
  };

  const add = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  const remove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const staricon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.55753 2.87592C9.22217 1.81919 10.778 1.81919 11.4426 2.87592L13.05 5.43154C13.2839 5.80334 13.6554 6.07015 14.0853 6.17511L17.0408 6.89657C18.2628 7.19489 18.7436 8.6576 17.9323 9.60901L15.9703 11.9099C15.6849 12.2447 15.543 12.6764 15.5749 13.1131L15.794 16.1146C15.8847 17.3557 14.626 18.2597 13.4599 17.7909L10.6399 16.6574C10.2297 16.4925 9.77048 16.4925 9.36022 16.6574L6.54023 17.7909C5.37419 18.2597 4.1155 17.3557 4.20613 16.1146L4.4253 13.1131C4.45719 12.6764 4.31529 12.2447 4.02985 11.9099L2.06782 9.60901C1.25655 8.6576 1.73732 7.19489 2.95937 6.89657L5.91482 6.17511C6.34479 6.07015 6.71628 5.80334 6.95013 5.43154L8.55753 2.87592Z"
        fill="#F56630"
      />
    </svg>
  );

  useEffect(() => {
    setPrice(quantity * 250);
    setBill({
      ...bill,
      quantity,
      price,
    });
  }, [quantity]);

  return (
    <div className="w-full flex flex-col items-center">
      <Nav />
      <main className=" w-[1440px] mb-10 flex flex-col items-center ">
        <h1 className="text-4xl font-semibold mt-10 mb-20">สั่งซื้อสินค้า</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2  w-full">
          <div className="flex flex-col  items-center">
            <img
              src={Productitem}
              alt="product"
              className="w-[450px] mb-12  "
            />
            <div className="w-full flex flex-col items-center ">
              <h2 className="mb-3 text-2xl font-bold">Antigen test kit</h2>
              <div className="flex justify-center pb-6 mb-3 w-full border border border-white border-b-gray-100  ">
                {staricon}
                {staricon}
                {staricon}
                {staricon}
                {staricon}
              </div>
              <h3 className="text-2xl">{price} Baht</h3>
              <h3 className="mb-5">Quantity</h3>
              <div className="w-40 h-12 mb-6 rounded-[40px] border border-[#F0F2F5] bg-[#F9FAFB] font-bold text-2xl grid grid-cols-3">
                <button type="button" onClick={remove}>
                  -
                </button>
                <div className="flex items-center justify-center">
                  {quantity}
                </div>
                <button type="button" onClick={add}>
                  +
                </button>
              </div>
              <button
                type="submit"
                className="w-40 h-12 rounded-[40px]   bg-[#EB5017] font-bold text-2xl flex items-center justify-center text-base text-white "
              >
                สั่งซื้อสินค้า
              </button>
            </div>
          </div>

          <div className="text-sm p-8 border border-gray-300 rounded-lg flex flex-col gap-5">
            <div className="text-2xl mb-1">ที่อยู่สำหรับจัดส่งสินค้า</div>
            <div className="flex gap-5">
              <div className="flex flex-col w-1/2">
                <label className="mb-2">ชื่อจริง</label>
                <input
                  required
                  type="text"
                  placeholder="ชื่อจริง"
                  className="h-14 p-4 border border-gray-300 rounded-lg"
                  name="name"
                  value={bill.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="mb-2">นามสกุล</label>
                <input
                  required
                  type="text"
                  placeholder="นามสกุล"
                  className="h-14 p-4 border border-gray-300 rounded-lg"
                  name="surname"
                  value={bill.surname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-2">ที่อยู่อาศัย</label>
              <input
                required
                type="text"
                placeholder="ที่อยู่อาศัย"
                className="h-14 p-4 border border-gray-300 rounded-lg"
                name="address"
                value={bill.address}
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col w-1/2">
                <label className="mb-2">จังหวัด</label>
                <input
                  required
                  type="text"
                  placeholder="Placeholder"
                  className="h-14 p-4 border border-gray-300 rounded-lg"
                  name="province"
                  value={bill.province}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="mb-2">รหัสไปรษณีย์</label>
                <input
                  required
                  type="text"
                  placeholder="Placeholder"
                  className="h-14 p-4 border border-gray-300 rounded-lg"
                  name="post"
                  value={bill.post}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col w-1/2">
                <label className="mb-2">เบอร์โทรศัพท์</label>
                <input
                  required
                  type="tel"
                  placeholder="Placeholder"
                  className="h-14 p-4 border border-gray-300 rounded-lg"
                  name="tel"
                  value={bill.tel}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="mb-2">อีเมล์</label>
                <input
                  required
                  type="email"
                  placeholder="Placeholder"
                  className="h-14 p-4 border border-gray-300 rounded-lg"
                  name="email"
                  value={bill.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default Buy;
