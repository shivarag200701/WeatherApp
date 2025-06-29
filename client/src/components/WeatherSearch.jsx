import { useState } from "react";
const WeatherSearch = () => {
  let [city, Setcity] = useState("");
  function handleSearch(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            Setcity(e.target.value);
          }}
          placeholder="Enter city name"
        />
      </form>
    </>
  );
};

export default WeatherSearch;
