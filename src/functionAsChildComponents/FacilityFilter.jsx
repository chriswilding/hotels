const FacilityFilter = ({ requiredFacilities, hotels, ...props }) => {
  const filteredHotels = hotels.filter(hotel =>
    requiredFacilities.every(requiredFacility => hotel.Facilities.includes(requiredFacility))
  );

  const newProps = {
    ...props,
    hotels: filteredHotels
  };
  return props.children(newProps);
};

export default FacilityFilter;
