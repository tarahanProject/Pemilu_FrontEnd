import { IoIosPeople } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { MdPieChart } from "react-icons/md";

export const MENU_ITEMS_ADMIN = [
  {
    icon: <IoIosPeople size={20} />,
    name: "Kelola Penduduk",
    path: "/dashboard/penduduk",
  },
  {
    icon: <MdPieChart size={20} />,
    name: "Perhitungan",
    path: "/dashboard/hasil",
  },
  {
    icon: <IoPeople size={20} />,
    name: "Kelola Calon",
    path: "/dashboard/calon",
  },
];
