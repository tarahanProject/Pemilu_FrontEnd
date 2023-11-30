"use client";
import { useState, useEffect } from "react";

import PageHeading from "@/app/components/PageHeading";
import Button from "@/app/components/elements/Button";

import { getDataPenduduk, generaTokenPenduduk } from "@/services/penduduk";

const TABLE_HEAD = ["ID", "Nama Penduduk", "NIK", "Token"];

const KelolaPenduduk = () => {
  const [showModal, setShowModal] = useState(false);
  const [dataPenduduk, setDataPenduduk] = useState([]);
  const [token, setToken] = useState("");

  const fetchData = async () => {
    const data_penduduk = await getDataPenduduk();
    setDataPenduduk([...data_penduduk.Data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onHandleGenerateToken = async (id) => {
    setToken("");
    try {
      setShowModal(true);
      const data = await generaTokenPenduduk(id);
      fetchData();
      setToken(data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageHeading title="Dashboard Admin | Kelola Penduduk" />
      <div className="bg-white m-5 rounded-lg">
        <div className="overflow-x-auto h-screen p-5">
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
              {dataPenduduk.map(({ Id, Name, Nik, Status }) => (
                <tr key={Id}>
                  <td>{Id}</td>
                  <td>{Name}</td>
                  <td>{Nik}</td>
                  <td>
                    <div className="flex gap-3">
                      <div>
                        {Status === "false" ? (
                          <Button
                            text={"Generate Token"}
                            onClick={() => onHandleGenerateToken(Id)}
                            className={"p-3 bg-green-500 text-white rounded-xl"}
                          />
                        ) : (
                          <p>Token Sudah Digunakan</p>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none divide-y">
                {/*header*/}
                <div className="flex flex-col justify-center items-start px-5 pt-5 pb-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-bold pb-2">Token Penduduk</h3>
                  <p>Catat Token atau Hapalkan Token dibawah ini!</p>
                </div>
                <div className="relative p-6 flex-auto">
                  <p>{token}</p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
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

export default KelolaPenduduk;
