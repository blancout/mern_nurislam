/*
module.exports = mongoose => {
  var BookSchema = mongoose.Schema(
    {
      title: String,
      isbn: String,
      author: String,
      description: String,
      published_date: Date, 
      publisher: String,
      update_date: Date
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Book = mongoose.model("book", BookSchema);
  return Book;
};
*/

/*
const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  isbn: String,
  author: String,
  description: String,
  published_date: Date, 
  publisher: String,
  update_date: Date
  }
);

module.exports = Book = mongoose.model("book", BookSchema);
*/

const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  isbn: {type: String, required: true},
  author: {type: String, required: true},
  description: {type: String},
  published_date: {type: Date},
  publisher: {type: String},
  updated_date: {type: Date, default: Date.now}
});

module.exports = Book = mongoose.model("book", BookSchema);
