import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import useCategoryStore from "../../store/categors";

import Table from "../../components/ui/table-category";
import { CategorMadalAdd } from "../../components/modals/index";

function index() {
  const [countPage] = useState(1);
  const [countLimit] = useState(10);
  const { isLoader, data, getData, deleteData, totlCount } = useCategoryStore();

  const allCount = totlCount / countLimit;
  console.log(allCount);

  useEffect(() => {
    getData({ page: countPage, limit: countLimit });
  }, []);

  const theder = [
    { title: "", value: "id" },
    { title: "Number", value: "t/r" },
    { title: "Category", value: "category_name" },
    { title: "Action", value: "action" },
  ];

  

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-between py-3">
        <div className="flex center gap-[6px] bg-blue p-[6px] text-[#fff] rounded-md hover:bg-sky-500 duration-300">
          {" "}
          <FullscreenIcon />
          FULL SCREEN
        </div>
        <div className="flex items-center gap-2">
          <CategorMadalAdd />
        </div>
      </div>

      <Table
        heders={theder}
        body={data}
        skelatonLoader={isLoader}
        deletIdData={deleteData}
      />
      <div className="flex items-center justify-end gap-3">
        <button className="py-1 px-1 border rounded-lg hover:shadow-md duration-200 cursor-pointer ">
          <ArrowLeftIcon />
        </button>
        <span className="text-[20px] text-center">1</span>
        <button className="py-1 px-1 border rounded-lg hover:shadow-md duration-200 cursor-pointer ">
          <ArrowRightIcon />
        </button>
      </div>
    </>
  );
}

export default index;
