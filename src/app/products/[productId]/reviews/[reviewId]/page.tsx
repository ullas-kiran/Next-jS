import { NextPage } from "next";
import { notFound } from "next/navigation";
interface Props {
  params:any
}

const ProductDetails: NextPage<Props> = ({params}) => {

  if(params.reviewId>1000){
     notFound();
  }

  return (
    <>
      <h1>ProductDetails{params.productId}</h1>
      <h1>Review{params.reviewId}</h1>
    </>
  );
};

export default ProductDetails;