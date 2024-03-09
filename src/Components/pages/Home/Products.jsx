import ProductCard1 from "@/components/utilities/ProductCard1";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ProductsSection = ({ productsRef, products }) => {
  const router = useRouter(); // Initialize useRouter hook if you're using Next.js routing
  const { t } = useTranslation();
  return (
    <div
      ref={productsRef}
      className="flex flex-col px-4  w-full h-full justify-center items-start gap-4 mx-auto max-w-[1400px] l bg-white dark:bg-black "
    >
      <h1 className="text-3xl font-semibold">{t("ProductsOnDemand")}</h1>
      <Products className="flex  items-center w-full h-full  overflow-x-auto gap-2">
        {products.map((p) => (
          <ProductCard1 data={p} />
        ))}
        <p
          className="flex-nowrap whitespace-nowrap mx-4 cursor-pointer hover:text-semibold  hover:border-b pr-4 border-blue-200"
          onClick={() => router.push(`/Products`)}
        >
          More...
        </p>
      </Products>
    </div>
  );
};

export default ProductsSection;
const Products = styled.main`
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 3px;
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
