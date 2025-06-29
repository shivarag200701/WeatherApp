const moongose = require("mongoose");

const favoriteCitySchema = new moongose.Schema({
  city: {
    type: String,
    required: true,
    trim: true,
  },
  weather: {
    temp: Number,
    condition: String,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const favoriteCity = moongose.model("favoriteCity", favoriteCitySchema);

module.exports = favoriteCity;
