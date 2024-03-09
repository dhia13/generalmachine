import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ProductCard2 = ({ data }) => {
  const { imgs, title, description, _id } = data;
  const { t } = useTranslation();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${_id}`);
  };
  return (
    <div
      key={_id}
      className="group relative m-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <div className="relative h-[350px] sm:h-[450px]  rounded-md overflow-hidden ">
          <img
            src={imgs[0]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover  opacity-100 group-hover:opacity-0"
          />

          <img
            src={imgs[1]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 dark:text-white">
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </h3>
          <p className="mt-1.5 text-pretty text-xs text-gray-500 dark:text-gray-300">
            {`${truncateText(t(`${description}`), 100)}... `}
            <Link href={`/Product/${_id}`}>
              <a className="text-blue-500 hover:text-blue-700 cursor-pointer">
                show more
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.substr(0, maxLength)}...`;
}
