import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import EmptyState from "../components/EmptyState";
import ProperitesClient from "./PropertiesClient";

const PropertyPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unathorized" subtitle="Please login!" />;
  }

  const listings = await getListings({ userId: currentUser.id });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Look like you havent reserved any trips"
      />
    );
  }
  return <ProperitesClient listings={listings} currentUser={currentUser} />;
};

export default PropertyPage;
