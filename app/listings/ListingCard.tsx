"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservations, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import HeartButton from "../components/HeartButton";
import Button from "../components/Button";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservations;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="aspect-square w-full relative overflow-hidden rounded-xl">
        <Image
          fill
          alt="listing"
          src={data.imageSrc}
          className="object-cover h-full w-full group-hover:scale-110 transition"
        />
        <div className="absolute top-3 right-3">
          <HeartButton listingId={data.id} currentUser={currentUser} />
        </div>
      </div>

      <div className="font-semibold text-lg">
        {location?.region}, {location?.label}
      </div>

      <div className="font-light text-neutral-500 text-sm my-2">
        {reservationDate || data.category}
      </div>

      <div className="flex items-center gap-1">
        <div className="font-semibold">$ {price}</div>

        {!reservation && <div className="font-light">night</div>}
      </div>

      {onAction && actionLabel && (
        <Button
          disabled={disabled}
          small
          label={actionLabel}
          onClick={handleCancel}
        />
      )}
    </div>
  );
};

export default ListingCard;
