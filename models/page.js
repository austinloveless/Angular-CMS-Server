const mongoose = require("mongoose");

const pageSchema = mongoose.Schema({
  title: {
    type: String
  },
  slug: {
    type: String
  },
  content: {
    type: String
  },
  sidebar: {
    type: String
  }
});

const Page = mongoose.model("Page", pageSchema);

module.exports = Page;
