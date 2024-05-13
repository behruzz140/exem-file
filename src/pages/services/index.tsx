import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Product from '../../components/ui/products'
import {ProductModalAdd} from "@modals"
import { Table } from "../../components/ui";
import  useProductStore from "../../store/products"


function index() {

  const [countPage , setCountPage] = useState(1);
  const [countLimit] = useState(10);
  const {  data, isLoader, getProduct, deleteProduct , totlCount} = useProductStore();

  const allCount = Math.ceil(totlCount/ countLimit)


  useEffect(() => {
    getProduct({ page: countPage, limit: countLimit , name:"" });
  }, [countPage]);


  const theder = [
    { title: "Number", value: "t/r" },
    { title: "Product Name", value: "product_name" },
    { title: "color", value: "color" },
    { title: "Size", value: "size" },
    { title: "Count", value: "count" },
    { title: "Cost", value: "cost" },
    { title: "Action", value: "action3" },
  ];
  return (
    <>
     <ToastContainer/>
      <div className="flex items-center justify-between py-3">
     
        <div className="flex items-center ml-[1070px]">
          <ProductModalAdd/>
        </div>
      </div>

      <Table heders={theder}  body={data} skelatonLoader={isLoader} deletIdData={deleteProduct}/> 

     
      <div className="flex items-center justify-end gap-3">
    
      <div className="flex justify-center gap-[30px]">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      
      </div>
      <div className="flex justify-center gap-[30px] mt-7">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      
    </>
  );
}

export default index;
