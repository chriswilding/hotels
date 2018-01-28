import React from "react";

import HotelList from "./HotelList";
import hotels from "../../data/example.json";

const App = () => <HotelList hotels={hotels} />;

export default App;
