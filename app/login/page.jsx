"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Logo from "../../public/assets/logo.png";
import Navbar from "../components/Navbar";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    router.push("/dashboard/penduduk");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto m-8 flex flex-col sm:flex-row justify-around bg-white p-4 sm:p-8 sm:rounded-lg">
        <div className="mb-4 sm:mb-0">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Login Admin</h2>
          <form action="" onSubmit={onHandleSubmit}>
            <div className="mb-2 sm:mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full py-2 px-3 border rounded-md"
                placeholder="Masukkan Username..."
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    username: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-2 sm:mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full py-2 px-3 border rounded-md"
                placeholder="Masukkan Password..."
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
