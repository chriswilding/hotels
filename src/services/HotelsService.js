import hotels from "../../data/example.json";

// Normally a fetch request or similar would be used to retrieve the list of hotel search results
// from the server. As no service is available for this data this stub service returns hard coded
// wrapped in a promise (so that it has the same interface and can be handled in the same way when
// retrieving the data using a network request)
class StubHotelsService {
  getHotels() {
    // eslint-disable-line class-methods-use-this
    return Promise.resolve(hotels);
  }

  getFacilityTypes() {
    // eslint-disable-line class-methods-use-this
    return Promise.resolve(["car park", "gym", "pool"]);
  }
}

export default StubHotelsService;
