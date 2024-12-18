"use client";

import { IconType } from "react-icons";

interface ListingCategoryProps {
  icon: IconType;
  label: string;
  description: string;
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
  label,
  description,
  icon: Icon,
}) => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-4">
        <Icon size={40} className="" />

        <div className="flex flex-col">
          <div className="text-lg font-semibold">{label}</div>
          <div className="font-light text-neutral-500">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ListingCategory;
