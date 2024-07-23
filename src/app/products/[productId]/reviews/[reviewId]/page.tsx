import { NextPage } from "next";

interface Props {
  params:any
}

const ProductDetails: NextPage<Props> = ({params}) => {
  return (
    <>
      <h1>ProductDetails{params.productId}</h1>
      <h1>Review{params.reviewId}</h1>
    </>
  );
};

export default ProductDetails;