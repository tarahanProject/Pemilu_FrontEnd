"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { BsPlusLg, BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

import PageHeading from "@/app/components/PageHeading";

import {
  getDataCalon,
  createDataCalon,
  deleteDataCalon,
} from "@/services/calon";

const TABLE_HEAD = ["ID", "Nama Calon", "Visi", "Misi", "Foto Calon", "Action"];

const KelolaCalon = () => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dataCalon, setDataCalon] = useState([]);
  const [formDataCalon, setFormDataCalon] = useState({
    name: "",
    foto: null,
    visi: "",
    misi: "",
  });
  const [foto, setFoto] = useState(null);

  const fetchData = async () => {
    const data_calon = await getDataCalon();
    data_calon.Data === null
      ? setDataCalon([])
      : setDataCalon([...data_calon.Data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmitHandleAdd = async (event) => {
    event.preventDefault();
    formDataCalon.foto = foto;

    try {
      const data = await createDataCalon(formDataCalon);
      console.log(data);

      setFormDataCalon({
        name: "",
        visi: "",
        misi: "",
        foto: null,
      });
      fetchData();
      setFoto(null);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const data = await deleteDataCalon(id);
          console.log(data);

          fetchData();
          Swal.fire({
            title: "Deleted!",
            text: "Your Data has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const onHandleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setFoto(image);
    }
  };

  return (
    <>
      <PageHeading title="Dashboard Admin | Kelola Calon" />
      {showForm ? (
        <div className="flex flex-col justify-center items-center mt-5">
          <h1 className="text-3xl font-bold mb-5">Form Data Calon</h1>
          <div className="flex flex-col bg-white p-10 rounded-xl  divide-y">
            <div className="">
              <h1 className="text-2xl font-bold mb-5">Data Calon</h1>
              <p>Isi Data Calon Dengan Benar</p>
            </div>
            <form
              action=""
              className="flex flex-col pt-5"
              onSubmit={onSubmitHandleAdd}
              encType="multipart/form-data"
            >
              <div className="flex justify-between ">
                <div className="flex flex-col">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="nama-calon"
                    >
                      Nama Calon
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="nama-calon"
                      type="text"
                      placeholder="Nama Calon..."
                      onChange={(e) => [
                        setFormDataCalon({
                          ...formDataCalon,
                          name: e.target.value,
                        }),
                      ]}
                      required
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="visi"
                    >
                      Visi
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="visi"
                      type="text"
                      placeholder="Visi Calon..."
                      onChange={(e) => [
                        setFormDataCalon({
                          ...formDataCalon,
                          visi: e.target.value,
                        }),
                      ]}
                      required
                    />
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="misi"
                    >
                      Misi
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="misi"
                      type="text"
                      placeholder="Misi Calon..."
                      onChange={(e) => [
                        setFormDataCalon({
                          ...formDataCalon,
                          misi: e.target.value,
                        }),
                      ]}
                      required
                    />
                  </div>
                </div>
                <div className="px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="foto-calon"
                  >
                    Foto Calon
                  </label>
                  <input id="foto-calon" type="file" onChange={onHandleImage} />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3 mt-5">
                <button
                  type="submit"
                  className="rounded-xl bg-orange-500 text-white font-bold px-3 py-2"
                >
                  Tambah Calon
                </button>
                <button
                  className="rounded-xl bg-black text-white font-bold px-3 py-2"
                  onClick={() => setShowForm(false)}
                >
                  Batalkan
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="bg-white m-5 rounded-lg">
          <div className="flex justify-start p-8">
            <button
              className="btn text-gray-500 bg-[#FDE9CC] hover:bg-[#E0924A] hover:text-white"
              type="button"
              onClick={() => setShowForm(true)}
            >
              <BsPlusLg size={20} />
              <span>Add Calon</span>
            </button>
          </div>
          <div className="overflow-x-auto h-fit pb-5 scrollbar-hide">
            <table className="table table-pin-rows">
              <thead className="font-bold text-black">
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th className="" key={head}>
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataCalon.map(({ Id, Name, Visi, Misi, Foto }) => (
                  <tr key={Id}>
                    <td>{Id}</td>
                    <td>{Name}</td>
                    <td>{Visi}</td>
                    <td>{Misi}</td>
                    <td>
                      <Image src={Foto} width={50} height={50} alt="" />
                    </td>
                    <td>
                      <div className="flex gap-3">
                        <button
                          className="text-[#624DE3]"
                          onClick={() => setShowModal(true)}
                        >
                          <FiEdit size={20} />
                        </button>
                        <button
                          className="text-[#A30D11]"
                          onClick={() => onHandleDelete(Id)}
                        >
                          <BsTrashFill size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none divide-y">
                {/*header*/}
                <div className="flex flex-col justify-center items-start px-5 pt-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-bold pb-2">Form Edit Calon</h3>
                  <p>Update Data Calon dengan Teliti</p>
                </div>

                <div className="relative p-6 flex-auto">
                  <form action="" className="flex flex-col pt-5">
                    <div className="flex justify-between ">
                      <div className="flex flex-col">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="nama-calon"
                          >
                            Nama Calon
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="nama-calon"
                            type="text"
                            placeholder="Nama Calon..."
                            required
                          />
                        </div>
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="visi"
                          >
                            Visi
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="visi"
                            type="text"
                            placeholder="Visi Calon..."
                            required
                          />
                        </div>
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="misi"
                          >
                            Misi
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="misi"
                            type="text"
                            placeholder="Misi Calon..."
                            required
                          />
                        </div>
                      </div>
                      <div className="px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="foto-calon"
                        >
                          Foto Calon
                        </label>
                        <input
                          id="foto-calon"
                          type="file"
                          onChange={onHandleImage}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 mt-5">
                      <button
                        type="submit"
                        className="rounded-xl bg-orange-500 text-white font-bold px-3 py-2"
                      >
                        Tambah Calon
                      </button>
                      <button
                        className="rounded-xl bg-black text-white font-bold px-3 py-2"
                        onClick={() => setShowForm(false)}
                      >
                        Batalkan
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default KelolaCalon;
