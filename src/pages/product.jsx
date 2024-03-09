// import { TWCarousel } from "@/components/utilities/Carousel";
import React from "react";
import styled from "styled-components";

const product = () => {
  let product = {
    _id: {
      $oid: "65e9ca68e4b0d068618b3a60",
    },
    title: "Stainless Steel TANKS",
    description:
      "General Machines Products\nStainless Steel Tanks On Demand\nGeneral Machines is your go-to source for custom stainless steel tanks, tailored to meet your exact specifications and needs. Our \"Tanks On Demand\" service allows you to configure the ideal tank for your application, with flexibility in size, accessories, and purpose.\n\nCustomizable Dimensions\nWith our advanced manufacturing capabilities, we can construct stainless steel tanks in any desired dimension. Whether you need a compact tank for limited spaces or a massive vessel for industrial-scale operations, we've got you covered. Simply provide us with your required dimensions, and we'll craft the perfect tank to fit.\n\nIntegrated Motors and Pumps\nEnhance your tank's functionality with our range of integrated motors and pumps. Choose from various motor sizes and pump configurations to enable efficient liquid transfer, mixing, or circulation within your tank. Our experts will ensure seamless integration for optimal performance.\n\nFood-Grade and Oil-Grade Options\nGeneral Machines' stainless steel tanks are available in food-grade and oil-grade options, making them suitable for a wide range of applications. Whether you're handling edible liquids, oils, or industrial fluids, our tanks meet the highest standards of safety and hygiene.\n\nVersatile Liquid Handling\nFrom water and beverages to chemicals and oils, our tanks are designed to handle virtually any liquid with ease. The durable stainless steel construction ensures long-lasting performance and resistance to corrosion and wear, even in demanding environments.\n\nInstallation\nIn addition to manufacturing your custom stainless steel tank, General Machines offers professional installation services to ensure your tank is properly set up and integrated into your facility. Our team of experienced technicians will handle the entire installation process, from site preparation to final testing and commissioning, ensuring your tank is ready for seamless operation right out of the gate.\n\nWith General Machines' \"Tanks On Demand\" service, you have the power to create the perfect stainless steel tank tailored to your unique requirements. Contact us today, and our team of experts will guide you through the customization process, ensuring you receive a high-quality, functional tank that exceeds your expectations.\n\n",
    isStared: true,
    imgs: [
      "/images/Products/tank1.jpg",
      "/images/Products/tank14.jpg",
      "/images/Products/tank2.jpg",
      "/images/Products/tank3.jpg",
      "/images/Products/tank4.jpg",
      "/images/Products/tank5.jpg",
      "/images/Products/tank6.jpg",
    ],
    videos: [],
    createdAt: {
      $date: "2024-03-07T14:08:40.148Z",
    },
    updatedAt: {
      $date: "2024-03-07T14:08:40.148Z",
    },
    __v: 0,
  };
  return (
    <div className="bg-red-200 w-full h-full">
      {/* <div className="max-w-[1400px]">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <TWCarousel imgs={product.imgs} />
        <p>{product.description}</p>
        <p>{product.description}</p>
        <p>{product.description}</p>
      </div> */}
      {/* Add more product details */}
    </div>
  );
};

export default product;
const Content = styled.main`
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
