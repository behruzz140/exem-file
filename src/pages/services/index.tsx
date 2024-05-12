import Product from "../../components/ui/products";

const index = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center gap-[40px]">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="flex justify-center gap-[40px] mt-[30px]">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="flex justify-center gap-[40px] mt-[30px]">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="flex justify-center gap-[40px] mt-[30px]">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="flex justify-center gap-[40px] mt-[30px]">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default index;
