"use client";

import { Range } from "react-date-range";

import Celendar from "@/app/components/inputs/Celendar";
import Button from "@/app/components/Button";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className="bg-white border-[1px] border-neutral-200 overflow-hidden rounded-xl">
      <div className="flex items-center gap-2 p-4">
        <div className="text-2xl font-semibold">$ {price}</div>

        <div className="font-light text-neutral-600">night</div>
      </div>

      <hr />

      <Celendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />

      <hr />

      <div className="p-4">
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </div>

      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>

        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
