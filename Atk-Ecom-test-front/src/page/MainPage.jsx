import { useState } from "react";
import Nav from "../component/Nav";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import main from "../assets/image/main.png";
import Product from "../assets/image/product.png";

function MainPage() {
  return (
    <div className="w-full flex flex-col items-center ">
      <Nav />
      <main className=" w-[1440px]">
        <article className="pb-10 border border-white border-b-gray-300">
          <img
            src={main}
            alt="covid strip"
            className="w-[1216px] h-[520px] mx-28 absolute rounded-lg "
          />
          <div className="relative pt-[180px] pl-48 flex flex-col gap-6 h-[520px]">
            <h1 className="text-6xl  font-bold text-white">Antigen test kit</h1>
            <h2 className="text-4xl  font-normal text-white">
              ตรวจก่อน รู้ก่อน ปลอดภัยก่อน
            </h2>
            <Link
              to="/product"
              className="p-4  rounded-[8px] w-[210px] h-14 bg-[#EB5017] flex gap-2 font-semibold text-white hover:opacity-70 duration-700"
            >
              ศึกษาข้อมูลเพิ่มเติม
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0832 13.3707C16.808 12.6006 16.808 11.3994 16.0832 10.6293L8.7282 2.81464C8.34969 2.41246 7.71681 2.39329 7.31464 2.7718C6.91246 3.15032 6.89329 3.78319 7.2718 4.18537L14.6268 12L7.2718 19.8146C6.89329 20.2168 6.91247 20.8497 7.31464 21.2282C7.71681 21.6067 8.34969 21.5875 8.7282 21.1854L16.0832 13.3707Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </article>
        <article className="flex border mb-10 border-white border-b-gray-300 ">
          <img src={Product} alt="product" className="my-20  mx-[140px] " />
          <div>
            <div className=" mt-12 mb-8  text-gray-800  ">
              <h2 className="text-4xl font-bold mb-4">Product Highlights</h2>
              <ul className="text-2xl list-disc list-inside">
                <li>สะดวกและปลอดภัย</li>
                <li>ใช้งานง่าย</li>
                <li>ให้ผลแม่นยำ</li>
                <li>รู้ผลใน 15 นาที</li>
                <li>พร้อมตอบคำถาม ทุกข้อสงสัย</li>
              </ul>
            </div>

            <blockquote className="text-2xl italic   text-gray-600  ">
              "เลือกเรา หากต้องการชุดตรวจที่สะดวก ปลอดภัย ให้ผลลัพธ์รวดเร็วภายใน
              15 นาที พร้อมการันตีด้วยยอดขายกว่า 1 ล้านชุด"
            </blockquote>
          </div>
        </article>
        <article>
          <h2 className="text-4xl font-semibold mx-28 mb-10">
            ความสำเร็จของสินค้าเรา
          </h2>
          <div className="grid grid-cols-4 mx-28 mb-14">
            <div>
              <div className="w-11 h-12 rounded-full bg-[#FFF4F0] flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 1C1.94772 1 1.5 1.44772 1.5 2C1.5 2.55228 1.94772 3 2.5 3C3.30847 3 4.00052 3.57985 4.14205 4.37584L4.86838 8.46078L5.27924 10.8415C5.53674 12.3337 5.74235 13.5252 6.00232 14.4717C6.2701 15.4467 6.61794 16.2529 7.21254 16.9368C7.6206 17.4061 8.09915 17.8091 8.63104 18.1314C9.40607 18.6011 10.2597 18.8067 11.266 18.9048C12.2429 19 13.452 19 14.9661 19H15.4352C16.1078 19 16.6675 19 17.1298 18.9652C17.6136 18.9287 18.0597 18.8504 18.4938 18.6585C19.1219 18.3809 19.6679 17.9462 20.0794 17.3964C20.3637 17.0163 20.54 16.5991 20.684 16.1359C20.8217 15.6932 20.9472 15.1476 21.098 14.4922L21.117 14.4097C21.3463 13.4132 21.5336 12.5993 21.6243 11.9347C21.7175 11.2515 21.7278 10.6093 21.5154 9.98941C21.2167 9.11739 20.626 8.37531 19.8432 7.88865C19.2867 7.54271 18.6586 7.4087 17.9718 7.34634C17.3038 7.28569 16.4686 7.2857 15.4461 7.28571H6.69082L6.11117 4.02571C5.79991 2.27519 4.27798 1 2.5 1ZM7.24132 10.4505L7.0403 9.28572H15.3983C16.4803 9.28572 17.2242 9.28668 17.7909 9.33814C18.3491 9.38883 18.6163 9.48092 18.7872 9.58718C19.1786 9.83051 19.474 10.2016 19.6234 10.6376C19.6886 10.828 19.7184 11.109 19.6426 11.6643C19.5657 12.2282 19.3998 12.9534 19.1572 14.0078C18.996 14.7084 18.8868 15.18 18.7742 15.542C18.6655 15.8916 18.5732 16.071 18.478 16.1982C18.2723 16.4731 17.9992 16.6904 17.6852 16.8293C17.5399 16.8935 17.3443 16.9433 16.9793 16.9708C16.6012 16.9993 16.1171 17 15.3983 17H15.0179C13.4403 17 12.3286 16.9989 11.46 16.9142C10.6096 16.8314 10.087 16.6751 9.66751 16.421C9.31291 16.2061 8.99388 15.9374 8.72184 15.6245C8.40003 15.2544 8.1572 14.766 7.9309 13.942C7.69976 13.1004 7.50962 12.0052 7.24132 10.4505Z"
                    fill="#F56630"
                  />
                  <path
                    d="M9.25 22C9.94036 22 10.5 21.4404 10.5 20.75C10.5 20.0596 9.94036 19.5 9.25 19.5C8.55964 19.5 8 20.0596 8 20.75C8 21.4404 8.55964 22 9.25 22Z"
                    fill="#F56630"
                  />
                  <path
                    d="M19.5 20.75C19.5 21.4404 18.9404 22 18.25 22C17.5596 22 17 21.4404 17 20.75C17 20.0596 17.5596 19.5 18.25 19.5C18.9404 19.5 19.5 20.0596 19.5 20.75Z"
                    fill="#F56630"
                  />
                  <path
                    d="M22.3419 3.70711C22.7325 3.31658 22.7325 2.68342 22.3419 2.29289C21.9514 1.90237 21.3183 1.90237 20.9277 2.29289L18.989 4.23163L18.7071 3.94974C18.3166 3.55922 17.6834 3.55922 17.2929 3.94974C16.9024 4.34027 16.9024 4.97343 17.2929 5.36395L18.2819 6.35295C18.6724 6.74347 19.3056 6.74347 19.6961 6.35295L22.3419 3.70711Z"
                    fill="#F56630"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">
                ยอดสั่งซื้อ กว่า 1 ล้านชิ้น
              </span>
            </div>
            <div>
              <div className="w-11 h-12 rounded-full bg-[#FFF4F0] flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 11.5446 19.962 11.0988 19.8893 10.6655C19.798 10.1208 20.1654 9.60516 20.7101 9.51378C21.2548 9.4224 21.7704 9.78987 21.8618 10.3345C21.9528 10.8768 22 11.4333 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.5947 2 15.1049 2.37401 16.445 3.04001C16.9396 3.28579 17.1413 3.88597 16.8955 4.38055C16.6497 4.87513 16.0495 5.07682 15.555 4.83103C14.4852 4.2994 13.279 4 12 4Z"
                    fill="#F56630"
                  />
                  <path
                    d="M20 3C20.5523 3 21 3.44772 21 4V5H22C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7H21V8C21 8.55228 20.5523 9 20 9C19.4477 9 19 8.55228 19 8V7H18C17.4477 7 17 6.55228 17 6C17 5.44772 17.4477 5 18 5H19V4C19 3.44772 19.4477 3 20 3Z"
                    fill="#F56630"
                  />
                  <path
                    d="M9.29289 15.2929C9.68342 14.9024 10.3166 14.9024 10.7071 15.2929C11.4212 16.0069 12.5788 16.0069 13.2929 15.2929C13.6834 14.9024 14.3166 14.9024 14.7071 15.2929C15.0976 15.6834 15.0976 16.3166 14.7071 16.7071C13.212 18.2022 10.788 18.2022 9.29289 16.7071C8.90237 16.3166 8.90237 15.6834 9.29289 15.2929Z"
                    fill="#F56630"
                  />
                  <path
                    d="M10.2 9.5C10.2 8.67157 9.52844 8 8.70001 8C7.87158 8 7.20001 8.67157 7.20001 9.5C7.20001 10.3284 7.87158 11 8.70001 11C9.52844 11 10.2 10.3284 10.2 9.5Z"
                    fill="#F56630"
                  />
                  <path
                    d="M15.3 8C16.1284 8 16.8 8.67157 16.8 9.5C16.8 10.3284 16.1284 11 15.3 11C14.4716 11 13.8 10.3284 13.8 9.5C13.8 8.67157 14.4716 8 15.3 8Z"
                    fill="#F56630"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">
                ลูกค้ากว่า 98% พึงพอใจ
              </span>
            </div>
            <div>
              <div className="w-11 h-12 rounded-full bg-[#FFF4F0] flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C11.5235 2 11.0529 2.1052 10.6218 2.30808L4.29681 5.28454C2.89484 5.94429 2 7.35437 2 8.90382V16C2 16.9978 2.57623 17.9058 3.47902 18.3306L10.6218 21.6919C11.0529 21.8948 11.5235 22 12 22C12.4765 22 12.9471 21.8948 13.3782 21.6919L20.521 18.3306C21.4238 17.9058 22 16.9978 22 16V8.90382C22 7.35437 21.1052 5.94429 19.7032 5.28454L13.3782 2.30808C12.9471 2.1052 12.4765 2 12 2ZM20 14.382L13 10.882V4.34049L18.8516 7.09418C19.5526 7.42405 20 8.12909 20 8.90382V14.382ZM12 12.618L19.7343 16.4852C19.7136 16.4984 19.692 16.5104 19.6694 16.521L12.5266 19.8823C12.3619 19.9598 12.1821 20 12 20C11.8179 20 11.6381 19.9598 11.4734 19.8823L4.33062 16.521C4.30804 16.5104 4.28638 16.4984 4.26571 16.4852L12 12.618ZM11 10.882L4 14.382V8.90382C4 8.12909 4.44742 7.42405 5.14841 7.09418L11 4.34049V10.882Z"
                    fill="#F56630"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">
                ความไวและความจำเพาะ กว่า 95%
              </span>
            </div>
            <div>
              <div className="w-11 h-12 rounded-full bg-[#FFF4F0] flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9997 2.5C9.89508 2.5 8.99965 3.39543 8.99965 4.5V5.5H8.49965C6.29052 5.5 4.49965 7.29086 4.49965 9.5V11.132L3.32789 11.7178C1.91257 12.4255 0.957306 13.969 1.28848 15.657C1.42793 16.3678 1.63552 17.1968 1.94395 17.9893C2.24837 18.7716 2.67588 19.5836 3.28867 20.2032C3.98718 20.9094 4.75391 21.2953 5.57358 21.4385C6.36541 21.5768 7.14418 21.4771 7.85466 21.3254C8.25341 21.2403 8.71365 21.1171 9.15334 20.9994C9.43823 20.9231 9.71449 20.8492 9.95981 20.7894C10.6517 20.6207 11.3206 20.5 11.9997 20.5C12.6787 20.5 13.3476 20.6207 14.0395 20.7894C14.2848 20.8492 14.5611 20.9231 14.846 20.9994C15.2857 21.1171 15.7459 21.2403 16.1446 21.3254C16.8551 21.4771 17.6339 21.5768 18.4257 21.4385C19.2454 21.2953 20.0121 20.9094 20.7106 20.2032C21.3234 19.5836 21.7509 18.7716 22.0554 17.9893C22.3638 17.1968 22.5714 16.3678 22.7108 15.657C23.042 13.969 22.0867 12.4255 20.6714 11.7178L19.4997 11.132V9.5C19.4997 7.29086 17.7088 5.5 15.4997 5.5H14.9997V4.5C14.9997 3.39543 14.1042 2.5 12.9997 2.5H10.9997ZM10.2108 8.27639L6.49965 10.132V9.5C6.49965 8.39543 7.39508 7.5 8.49965 7.5H15.4997C16.6042 7.5 17.4997 8.39543 17.4997 9.5V10.132L13.7885 8.27639C12.6624 7.71334 11.3369 7.71334 10.2108 8.27639ZM11.1052 10.0652C11.6683 9.78372 12.331 9.78372 12.8941 10.0652L19.777 13.5067C20.5146 13.8755 20.8805 14.5979 20.7482 15.272C20.6226 15.9122 20.4429 16.618 20.1915 17.264C19.9361 17.9203 19.6312 18.4505 19.2887 18.7968C18.8696 19.2205 18.4748 19.3996 18.0816 19.4683C17.6605 19.5419 17.175 19.5003 16.5622 19.3695C16.1843 19.2888 15.8412 19.196 15.4645 19.0941C15.1771 19.0163 14.87 18.9332 14.5131 18.8462C13.7562 18.6618 12.91 18.5 11.9997 18.5C11.0893 18.5 10.2431 18.6618 9.48619 18.8462C9.12928 18.9332 8.82231 19.0163 8.53491 19.0941C8.15819 19.196 7.81495 19.2889 7.43711 19.3695C6.82433 19.5003 6.33879 19.5419 5.91773 19.4683C5.52451 19.3996 5.12976 19.2205 4.71064 18.7968C4.36809 18.4505 4.0632 17.9203 3.80778 17.264C3.55637 16.618 3.37668 15.9122 3.25106 15.272C3.11881 14.5979 3.48469 13.8755 4.22232 13.5067L11.1052 10.0652ZM12.9997 5.5H10.9997V4.5H12.9997V5.5Z"
                    fill="#F56630"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold">
                ส่งด่วน ส่งฟรี ทั่วประเทศ
              </span>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
