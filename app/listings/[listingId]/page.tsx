import getListingById from "@/app/actions/getListingById";
import getCurrentUser from "@/app/actions/getCurrentUser";

import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservation from "@/app/actions/getReservation";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservation(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
};

export default ListingPage;
