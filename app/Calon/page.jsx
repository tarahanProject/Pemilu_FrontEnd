import Image from "next/image";
import CalonImg from "../../public/assets/profile.png";

const dataCalon = [
  {
    nama: "Bpk. Duta Rega",
    noUrut: "01",
    foto: CalonImg,
  },
  {
    nama: "Bpk. Nico Alexander",
    noUrut: "02",
    foto: CalonImg,
  },
  {
    nama: "Bpk. Krisna Saputra",
    noUrut: "03",
    foto: CalonImg,
  },
];
const Calon = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 to-gray-200">
      <h2 className="text-center text-2xl font-bold text-white">
        Daftar Calon Kepala Desa Tarahan
      </h2>
      <div className="flex justify-around mt-8">
        {dataCalon.map((calon) => (
          <div className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl">
            <figure>
              <Image src={CalonImg} alt="Shoes" className="h-[400px] w-full" />
            </figure>
            <div className="card-body mt-4 mb-4">
              <div className="flex justify-between">
                <h2 className="card-title">{calon.nama}</h2>
                <h2 className="card-title">{calon.noUrut}</h2>
              </div>
              <div className="card-actions flex justify-between">
                <button className="btn btn-neutral text-white">
                  Visi & Misi
                </button>
                <button className="btn btn-neutral text-white">PILIH</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Calon;
