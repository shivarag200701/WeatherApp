import { useState } from "react";
import axios from "axios";
function ForecastSearch() {
    let [city,Setcity] = useState("");

    async function handleSearch(e) {
        e.preventDefault();
        if (!city.trim()) {
            console.log("Please enter a city name");
            return;
        }
        try{
            const response = await axios.get(
                `http://localhost:5000/api/forecast?city=${encodeURIComponent(city)}`
            );
            console.log(response.data);
        } catch (err) {
            console.log("error happened", err.message);
        }
        
    }

return( <>
<form onSubmit={handleSearch}>
    <input type="text" value={city} onChange={(e) => {Setcity(e.target.value)}} placeholder="Enter city name" />
    <button type="submit">Search</button>
</form>
</>);
}
export default ForecastSearch;