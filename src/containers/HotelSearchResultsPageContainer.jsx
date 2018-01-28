import React, { Component } from "react";

import HotelSearchResultsPage from "../components/HotelSearchResultsPage";
import HotelsService from "../services/HotelsService";

class HotelSearchResultsPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      requiredFacilityTypes: []
    };
  }

  componentDidMount() {
    const hotelsService = new HotelsService();
    Promise.all([hotelsService.getFacilityTypes(), hotelsService.getHotels()]).then(
      ([facilityTypes, hotels]) => {
        const requiredFacilityTypes = facilityTypes.reduce((acc, facilityType) => {
          acc[facilityType] = false;
          return acc;
        }, {});

        this.setState({
          hotels,
          requiredFacilityTypes
        });
      }
    );
  }

  render() {
    return <HotelSearchResultsPage {...this.state} />;
  }
}

export default HotelSearchResultsPageContainer;
