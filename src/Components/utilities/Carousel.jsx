import { Carousel } from "@material-tailwind/react";

export function TWCarousel({ imgs }) {
  console.log(imgs);
  return (
    <div className="w-full my-4 max-h-[500px] overflow-hidden flex justify-center items-center rounded-xl">
      <Carousel className="rounded-xl max-w-[92%]">
        {imgs.map((img) => (
          <img
            key={img}
            src={img}
            alt={`image${img}`}
            className="h-full w-full object-contain"
          />
        ))}
      </Carousel>
    </div>
  );
}
