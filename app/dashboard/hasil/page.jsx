"use client";
import { useEffect, useState } from "react";

import PageHeading from "@/app/components/PageHeading";
import MyResponsivePie from "@/app/components/PieChart";

import { getDataCount } from "@/services/count";

const KelolaHasil = () => {
  const [dataCount, setDataCount] = useState([]);
  const PIE_DATA = dataCount?.map((item) => {
    return {
      id: item.name,
      label: item.name === "" ? "not_selected" : item.name,
      value: item.jumlah_pemilih,
    };
  });

  const fetchData = async () => {
    const data_count = await getDataCount();
    setDataCount([...data_count.payload]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PageHeading title="Dashboard Admin | Kelola Perhitungan" />
      <MyResponsivePie data={PIE_DATA} />
    </>
  );
};

export default KelolaHasil;
