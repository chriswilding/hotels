import React, { Component } from "react";

import HotelSearchResultsPage from "../components/HotelSearchResultsPage";
import HotelsService from "../services/HotelsService";

class HotelSearchResultsPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      order: "descending",
      requiredFacilities: []
    };

    this.setOrder = this.setOrder.bind(this);
  }

  componentDidMount() {
    const hotelsService = new HotelsService();
    Promise.all([hotelsService.getFacilityTypes(), hotelsService.getHotels()]).then(
      ([facilityTypes, hotels]) => {
        const requiredFacilities = facilityTypes.reduce((acc, facilityType) => {
          acc[facilityType] = false;
          return acc;
        }, {});

        this.setState({
          hotels,
          requiredFacilities
        });
      }
    );
  }

  render() {
    const requiredFacilities = Object.keys(this.state.requiredFacilities).filter(facility => {
      return this.state.requiredFacilities[facility];
    });
    return (
      <HotelSearchResultsPage
        {...this.state}
        requiredFacilities={requiredFacilities}
        setOrder={this.setOrder}
      />
    );
  }

  setOrder(order) {
    this.setState({ order });
  }
}

export default HotelSearchResultsPageContainer;
