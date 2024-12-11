import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListing from "../actions/getFavoriteListing";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListing();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    <EmptyState
      title="No favorites found"
      subtitle="Looks like you have no favorite listings."
    />;
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default ListingPage;
