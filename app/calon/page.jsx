"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

//Component
import Navbar from "../components/Navbar";

//Utility
import { getDataCalon, pilihCalon } from "@/services/calon";

const CalonKades = () => {
  const [dataCalon, setDataCalon] = useState([]);
  const [inputToken, setInputToken] = useState("");

  const fetchData = async () => {
    const data_calon = await getDataCalon();
    data_calon.Data === null
      ? setDataCalon([])
      : setDataCalon([...data_calon.Data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openVisiMisi = (modalId) => {
    closeAllDialogs(); // Tutup semua dialog sebelumnya
    console.log(modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };

  const openPilihModal = (modalId) => {
    closeAllDialogs();
    console.log(modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };

  const openTokenInputModal = (modalId) => {
    closeAllDialogs();
    console.log(modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };

  const openTerimaKasihModal = (modalId) => {
    closeAllDialogs();
    console.log(modalId);
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

  const onHandlePilihCalon = async (id) => {
    try {
      const data = await pilihCalon(id, inputToken);
      console.log(data);

      setInputToken("");
      openTerimaKasihModal(`terima_kasih_modal_${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen bg-gradient-to-r from-gray-900 to-gray-200">
        <h2 className="text-center text-2xl font-bold text-white">
          Daftar Calon Kepala Desa Tarahan
        </h2>
        <div className="flex justify-around mt-8">
          {dataCalon.length <= 0 && (
            <p className="text-xl">Belum Ada Calon Kepala Desa</p>
          )}
          {dataCalon.length > 0 &&
            dataCalon.map((calon) => (
              <div
                className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl"
                key={calon.Id}
              >
                <figure>
                  <Image
                    src={calon.Foto}
                    alt="Calon Kades"
                    className="h-[400px] w-full"
                    width={300}
                    height={300}
                    priority
                  />
                </figure>
                <div className="card-body mt-4 mb-4">
                  <div className="flex justify-between">
                    <h2 className="card-title">{calon.Name}</h2>
                    <h2 className="card-title">{calon.Id}</h2>
                  </div>
                  <div className="card-actions flex justify-between">
                    <button
                      className="btn btn-neutral text-white"
                      onClick={() =>
                        openVisiMisi(`visi_misi_modal_${calon.Id}`)
                      }
                    >
                      Visi & Misi
                    </button>
                    <button
                      className="btn btn-neutral text-white"
                      onClick={() => openPilihModal(`pilih_modal_${calon.Id}`)}
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
            id={`visi_misi_modal_${calon.Id}`}
            className="modal"
            key={calon.Id}
          >
            <div className="modal-box">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() =>
                    document
                      .getElementById(`visi_misi_modal_${calon.Id}`)
                      .close()
                  }
                >
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">{calon.Name}</h3>
              <div className="flex justify-between items-center">
                <div>
                  <Image
                    src={calon.Foto}
                    alt="Calon Kades"
                    className="h-full w-full rounded"
                    width={300}
                    height={300}
                    priority
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Visi</h3>
                  <p>{calon.Visi}</p>
                  <h3 className="font-bold text-lg">Misi</h3>
                  <p>{calon.Misi}</p>
                </div>
              </div>
            </div>
          </dialog>
        ))}
        {dataCalon.map((calon) => (
          <dialog
            id={`pilih_modal_${calon.Id}`}
            className="modal "
            key={calon.Id}
          >
            <div className="modal-box ">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() =>
                    document.getElementById(`pilih_modal_${calon.Id}`).close()
                  }
                >
                  ✕
                </button>
              </form>
              <p className="text-lg text-center">
                Anda akan memilih{" "}
                <span className="font-bold">{calon.Name}</span> dengan nomor
                urut <span className="font-bold">{calon.Id}</span> ?
              </p>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() =>
                    openTokenInputModal(`token_input_modal_${calon.Id}`)
                  }
                  className="mr-4 btn btn-neutral text-white"
                >
                  Ya
                </button>
                <button className="mr-4 btn btn-neutral text-white">
                  Batal
                </button>
              </div>
            </div>
          </dialog>
        ))}
        {dataCalon.map((calon) => (
          <dialog
            id={`token_input_modal_${calon.Id}`}
            className="modal"
            key={calon.Id}
          >
            <div className="modal-box">
              <form method="dialog">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={() =>
                    document
                      .getElementById(`token_input_modal_${calon.Id}`)
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
                onChange={(e) => setInputToken(e.target.value)}
              />
              <button
                onClick={() => onHandlePilihCalon(calon.Id)}
                className="btn btn-neutral text-white flex justify-center items-center mt-4"
              >
                Submit
              </button>
            </div>
          </dialog>
        ))}
        {dataCalon.map((calon) => (
          <dialog
            id={`terima_kasih_modal_${calon.Id}`}
            className="modal"
            key={calon.Id}
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Terima Kasih!</h3>
              <p className="text-lg">
                Terima kasih sudah memberikan suara untuk{" "}
                <span className="font-bold">{calon.Name}</span>.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById(`terima_kasih_modal_${calon.Id}`)
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
    </>
  );
};

export default CalonKades;
