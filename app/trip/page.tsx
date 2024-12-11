import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservation";
import EmptyState from "../components/EmptyState";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unathorized" subtitle="Please login!" />;
  }

  const reservations = await getReservation({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Look like you havent reserved any trips"
      />
    );
  }
  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;
