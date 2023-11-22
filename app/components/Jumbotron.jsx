import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/assets/logo.png";

const Jumbotron = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-gray-900 to-gray-200">
      <div className="hero-content text-center">
        <div className="max-w-md mx-auto p-6">
          <Image
            src={Logo}
            alt="logo"
            width={300}
            height={300}
            className="mx-auto"
          />
          <p className="text-2xl font-bold text-white mt-4">
            Selamat Datang Warga Desa Tarahan
          </p>
          <Link href="/calon">
            <button className="btn btn-neutral mt-4">Masuk</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
