import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservation";
import ReservationClient from "../api/reservations/ReservationClient";

import EmptyState from "../components/EmptyState";

const ReservationPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorzied" subtitle="Please login" />;
  }

  const reservations = await getReservation({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Look like you have no reservations on your properties"
      />
    );
  }
  return (
    <ReservationClient reservations={reservations} currentUser={currentUser} /> 
  );
};

export default ReservationPage;
