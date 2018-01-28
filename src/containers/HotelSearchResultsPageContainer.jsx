import React, { Component } from "react";

import HotelSearchResultsPage from "../components/HotelSearchResultsPage";
import HotelsService from "../services/HotelsService";

class HotelSearchResultsPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      order: "default",
      requiredFacilities: {}
    };

    this.setOrder = this.setOrder.bind(this);
    this.setRequiredFacility = this.setRequiredFacility.bind(this);
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
        availableFacilities={this.state.requiredFacilities}
        requiredFacilities={requiredFacilities}
        setOrder={this.setOrder}
        setRequiredFacility={this.setRequiredFacility}
      />
    );
  }

  setOrder(order) {
    this.setState({ order });
  }

  setRequiredFacility(facility) {
    this.setState(prevState => {
      const newState = {
        requiredFacilities: {
          ...prevState.requiredFacilities
        }
      };

      newState.requiredFacilities[facility] = !prevState.requiredFacilities[facility];

      return newState;
    });
  }
}

export default HotelSearchResultsPageContainer;
