import { useEffect, useRef, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useContext } from "react";
import { State } from "@/context/context";
import styled from "styled-components";
import ModalVideo from "@/components/utilities/ModalVideo";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import Footer from "@/components/Ui/Footer";
import PageIllustration from "@/components/utilities/PageIlustration";
import Hero from "@/components/pages/Home/Hero";
import ProductsSection from "@/components/pages/Home/Products";
import Introduction from "@/components/pages/Home/Introduction";
import { MongoClient } from "mongodb";
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
export default function Home({ products }) {
  const { page } = useContext(State);
  const [animate, setAnimate] = useState(true);
  const productsRef = useRef(null);

  const Transition = useTransition(animate, {
    from: { left: "-100%", opacity: 0 },
    enter: { left: "0", opacity: 1 },
    leave: { left: "-100%", opacity: 0 },
  });

  useEffect(() => {
    if (page === "home") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [page]);

  const scrollProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full h-full mx-auto bg-white dark:bg-black">
      {Transition(
        (style, item) =>
          item && (
            <animated.div
              config={{ duration: 500 }}
              style={style}
              className="absolute w-full h-full bg-white dark:bg-black
              inset-0 flex flex-col z-50 "
            >
              <PageIllustration />
              {/* hero section */}
              <Hero scrollProducts={scrollProducts} />
              {/* Part one video presentation */}
              <ModalVideo
                thumb={VideoThumb}
                thumbWidth={1024}
                thumbHeight={576}
                thumbAlt="Modal video thumbnail"
                video="/videos/video.mp4"
                videoWidth={1920}
                videoHeight={1080}
              />
              {/* Details */}
              <Introduction />
              {/* products samples */}
              <ProductsSection productsRef={productsRef} products={products} />
              {/* footer */}
              <Footer />
            </animated.div>
          )
      )}
    </div>
  );
}
