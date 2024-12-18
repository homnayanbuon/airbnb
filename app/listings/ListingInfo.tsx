"use client";

import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";

import useCountries from "@/app/hooks/useCountries";
import Avatar from "@/app/components/Avatar";
import ListingCategory from "./[listingId]/ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"));

interface ListingInfoProps {
  user: SafeUser | null;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  description: string;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  guestCount,
  roomCount,
  bathroomCount,
  description,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex items-center gap-2">
          <div>Hosted by {user?.name}</div>

          <Avatar src={user?.image} />
        </div>

        <div className="flex items-center gap-4 font-light text-neutral-500">
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>

      <hr />

      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}

      <hr />

      <div className="text-lg font-light text-neutral-500">{description}</div>

      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
