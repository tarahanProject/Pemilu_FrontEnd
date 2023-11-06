"use client";

import Image from "next/image";
import CalonImg from "../../public/assets/hq2.jpg";

const dataCalon = [
  {
    nama: "Bpk. Duta Rega",
    noUrut: "01",
    foto: CalonImg,
    visi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla nesciunt molestiae omnis praesentium perferendis nisi eligendi eum doloribus iusto?",
    misi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla nesciunt molestiae omnis praesentium perferendis nisi eligendi eum doloribus iusto?",
  },
  {
    nama: "Bpk. Nico Alexander",
    noUrut: "02",
    foto: CalonImg,
    visi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla nesciunt molestiae omnis praesentium perferendis nisi eligendi eum doloribus iusto?",
    misi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla nesciunt molestiae omnis praesentium perferendis nisi eligendi eum doloribus iusto?",
  },
  {
    nama: "Bpk. Krisna Saputra",
    noUrut: "03",
    foto: CalonImg,
    visi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla nesciunt molestiae omnis praesentium perferendis nisi eligendi eum doloribus iusto?",
    misi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla nesciunt molestiae omnis praesentium perferendis nisi eligendi eum doloribus iusto?",
  },
];

const Calon = () => {
  const openVisiMisi = (modalId) => {
    closeAllDialogs(); // Tutup semua dialog sebelumnya
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };

  const openPilihModal = (modalId) => {
    closeAllDialogs();
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };

  const openTokenInputModal = (modalId) => {
    closeAllDialogs();
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };

  const openTerimaKasihModal = (modalId) => {
    closeAllDialogs();
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };

  const closeAllDialogs = () => {
    const dialogs = document.querySelectorAll(".modal");
    dialogs.forEach((dialog) => {
      dialog.close();
    });
  };

  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 to-gray-200">
      <h2 className="text-center text-2xl font-bold text-white">
        Daftar Calon Kepala Desa Tarahan
      </h2>
      <div className="flex justify-around mt-8">
        {dataCalon.map((calon) => (
          <div
            className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl"
            key={calon.noUrut}
          >
            <figure>
              <Image
                src={calon.foto}
                alt={`foto calon ${calon.nama}`}
                className="h-[400px] w-full"
              />
            </figure>
            <div className="card-body mt-4 mb-4">
              <div className="flex justify-between">
                <h2 className="card-title">{calon.nama}</h2>
                <h2 className="card-title">{calon.noUrut}</h2>
              </div>
              <div className="card-actions flex justify-between">
                <button
                  className="btn btn-neutral text-white"
                  onClick={() =>
                    openVisiMisi(`visi_misi_modal_${calon.noUrut}`)
                  }
                >
                  Visi & Misi
                </button>
                <button
                  className="btn btn-neutral text-white"
                  onClick={() => openPilihModal(`pilih_modal_${calon.noUrut}`)}
                >
                  PILIH
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {dataCalon.map((calon) => (
        <dialog
          id={`visi_misi_modal_${calon.noUrut}`}
          className="modal"
          key={calon.noUrut}
        >
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() =>
                  document
                    .getElementById(`visi_misi_modal_${calon.noUrut}`)
                    .close()
                }
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">{calon.nama}</h3>
            <div className="flex justify-between items-center">
              <div>
                <Image
                  src={calon.foto}
                  alt={`Foto calon ${calon.nama}`}
                  className="h-full w-full rounded"
                />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg">Visi</h3>
                <p>{calon.visi}</p>
                <h3 className="font-bold text-lg">Misi</h3>
                <p>{calon.misi}</p>
              </div>
            </div>
          </div>
        </dialog>
      ))}
      {dataCalon.map((calon) => (
        <dialog
          id={`pilih_modal_${calon.noUrut}`}
          className="modal "
          key={calon.noUrut}
        >
          <div className="modal-box ">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() =>
                  document.getElementById(`pilih_modal_${calon.noUrut}`).close()
                }
              >
                ✕
              </button>
            </form>
            <p className="text-lg text-center">
              Anda akan memilih <span className="font-bold">{calon.nama}</span>{" "}
              dengan nomor urut{" "}
              <span className="font-bold">{calon.noUrut}</span> ?
            </p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() =>
                  openTokenInputModal(`token_input_modal_${calon.noUrut}`)
                }
                className="mr-4 btn btn-neutral text-white"
              >
                Ya
              </button>
              <button className="mr-4 btn btn-neutral text-white">Batal</button>
            </div>
          </div>
        </dialog>
      ))}
      {dataCalon.map((calon) => (
        <dialog
          id={`token_input_modal_${calon.noUrut}`}
          className="modal"
          key={calon.noUrut}
        >
          <div className="modal-box">
            <form method="dialog">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() =>
                  document
                    .getElementById(`token_input_modal_${calon.noUrut}`)
                    .close()
                }
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg flex justify-center items-center">
              Input Token
            </h3>
            <input
              type="text"
              placeholder="Masukan Token"
              className="input mt-4 w-full max-w-xs flex justify-center items-center"
            />
            <button
              onClick={() =>
                openTerimaKasihModal(`terima_kasih_modal_${calon.noUrut}`)
              }
              className="btn btn-neutral text-white flex justify-center items-center mt-4"
            >
              Submit
            </button>
          </div>
        </dialog>
      ))}
      {dataCalon.map((calon) => (
        <dialog
          id={`terima_kasih_modal_${calon.noUrut}`}
          className="modal"
          key={calon.noUrut}
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Terima Kasih!</h3>
            <p className="text-lg">
              Terima kasih sudah memberikan suara untuk{" "}
              <span className="font-bold">{calon.nama}</span>.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById(`terima_kasih_modal_${calon.noUrut}`)
                  .close()
              }
              className="btn btn-neutral text-white flex justify-center items-center"
            >
              Tutup
            </button>
          </div>
        </dialog>
      ))}
    </div>
  );
};

export default Calon;
