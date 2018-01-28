import HotelsService from "../../src/services/HotelsService";
import hotels from "../../data/example.json";

describe("HotelsService", () => {
  let service;

  beforeEach(() => {
    service = new HotelsService();
  });

  it("returns an array of hotels", () => {
    expect(service.getHotels()).resolves.toEqual(hotels);
  });

  it("returns an array of facility types", () => {
    expect(service.getFacilityTypes()).resolves.toEqual(["car park", "gym", "pool"]);
  });
});
