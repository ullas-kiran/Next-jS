import { NextPage } from "next";

interface Props {}

const ProductList: NextPage<Props> = ({}) => {
  return (
    <>
      <h1>ProductList</h1>
      <h2>Product1</h2>
      <h2>Product2</h2>
      <h2>Product3</h2>
    </>
  );
};

export default ProductList;
