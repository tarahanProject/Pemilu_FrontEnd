import PageHeading from "@/app/components/PageHeading";
import MyResponsivePie from "@/app/components/PieChart";

import { PIE_DATA as data } from "@/app/constant/pie";

const KelolaHasil = () => {
  return (
    <>
      <PageHeading title="Dashboard Admin | Kelola Perhitungan" />

      <MyResponsivePie data={data} />
    </>
  );
};

export default KelolaHasil;
