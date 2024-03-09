import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import { TWCarousel } from "@/components/utilities/Carousel";
import styled from "styled-components";

export async function getStaticPaths() {
  // Connect to MongoDB
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("generalmachines");
  const collection = db.collection("products");

  // Fetch all product ids
  const products = await collection.find({}, { _id: 1 }).toArray();
  console.log(products);
  const paths = products.map((product) => ({
    params: { id: product._id.toString() },
  }));

  // Close MongoDB connection
  client.close();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Connect to MongoDB
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("test");
  const collection = db.collection("products");

  // Fetch product data
  const product = await collection.findOne({ _id: new ObjectId(params.id) });
  // Close MongoDB connection
  client.close();

  // Return product data as props
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

export default function Page({ product }) {
  const router = useRouter();
  console.log(product);
  return (
    <Content>
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <TWCarousel imgs={product.imgs} />
      <p>{product.description}</p>
      {/* Add more product details */}
    </Content>
  );
}
const Content = styled.main`
  overflow-y: auto;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  margin-left: 10px;
  margin-right: 10px;
  &::-webkit-scrollbar {
    width: 1px;
    height: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c084fc;
  }
`;
