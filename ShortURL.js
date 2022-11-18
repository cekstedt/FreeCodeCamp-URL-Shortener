// All logic related to mongodb.

const nanoid = require("nanoid");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_DB + "/shorturlDB");

const shortURLSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  ip_address: {
    type: String,
    required: true
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  },
  date: {
    type: String,
    default: Date.now
  }
});
const ShortURL = mongoose.model("ShortURL", shortURLSchema);

// Retrieve the URL associated with the given hash.
function getURL(hash) {
  // if (query.technologies) {
  //   query.technologies = { $all: query.technologies };
  // }
  //
  // return Project.find(query)
  //   .exec()
  //   .then(docs => {
  //     return docs;
  //   })
  //   .catch(err => {
  //     return err;
  //   });
}

// Create a new, "random" hash for the given URL, and save to DB.
function getHash(URL) {}

module.exports = {
  getURL,
  getHash
};
