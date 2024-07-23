import { NextPage } from "next";

interface Props {
  params:any
}

const ProductDetails: NextPage<Props> = ({params}) => {
  console.log("params",params);
  return (
    <>
      <h1>ProductDetails{params.productId}</h1>
    </>
  );
};

export default ProductDetails;