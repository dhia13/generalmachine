import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const ProductCard1 = ({ data }) => {
  const { imgs, title, description, _id } = data;
  const { t } = useTranslation();
  return (
    <div
      id={_id}
      key={_id}
      className="group block cursor-pointer my-4 px-2 w-[300px]"
    >
      <div className="relative h-[350px] sm:h-[450px] w-[300px] rounded-md overflow-hidden">
        <img
          src={imgs[0]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />

        <img
          src={imgs[1]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>

      <div className="mt-3">
        <h3 className="text-sm text-gray-700 dark:text-gray-200 group-hover:underline group-hover:underline-offset-4">
          {t(`${title}`)}
        </h3>

        <p className="mt-1.5 text-pretty text-xs text-gray-500 dark:text-gray-300">
          {`${truncateText(t(`${description}`), 100)}... `}
          <Link href={`/Product/${_id}`}>
            <a className="text-blue-500 hover:text-blue-700">show more</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProductCard1;
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.substr(0, maxLength)}...`;
}
