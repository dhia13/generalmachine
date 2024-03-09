import { MongoClient } from "mongodb";
import { useTranslation } from "react-i18next";
import ProductCard2 from "@/components/utilities/ProductCard2";
import Footer from "@/components/Ui/Footer";
export async function getStaticProps() {
  // Connect to MongoDB
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("test");
  const collection = db.collection("products");

  // Fetch product data
  const products = await collection.find({ isStared: true }).toArray();
  // Close MongoDB connection
  client.close();

  // Return product data as props
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
const ProductGrid = ({ products }) => {
  // Define any necessary state or props
  const { t } = useTranslation();
  return (
    <div className="max-w-[1400px] lg:w-[1400px] mx-auto mt-10">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 my-4 ml-2 lg:ml-0 dark:text-white">
        Products on Demand
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap- mx-auto max-w-[1400px] lg:w-[1400px] lg:overflow-x-scroll">
        {products.map((p, index) => (
          <div
            key={index}
            className="flex justify-center items-start  overflow-hidden mx-4 "
          >
            <ProductCard2 data={p} />
          </div>
        ))}
        {products.map((p, index) => (
          <div
            key={index}
            className="flex justify-center items-start  overflow-hidden mx-4"
          >
            <ProductCard2 data={p} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductGrid;
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.substr(0, maxLength)}...`;
}
