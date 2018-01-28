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
    console.log("component did mount was called");
    const hotelsService = new HotelsService();
    hotelsService.getFacilityTypes().then(facilityTypes => {
      const requiredFacilityTypes = facilityTypes.reduce((acc, facilityType) => {
        acc[facilityType] = false;
        return acc;
      }, {});

      this.setState({
        requiredFacilityTypes
      });
    });
  }

  render() {
    return <HotelSearchResultsPage {...this.state} />;
  }
}

export default HotelSearchResultsPageContainer;
