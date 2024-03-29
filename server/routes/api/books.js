const express = require("express");
const router = express.Router();

// Load Book model
const Book = require("../../models/book");

// @route GET api/books/test
// @description tests books route
// @access Public
router.get("/test", (req, res) => res.send("teste api books sucesso!"));

// @route GET api/books
// @description Get all books
// @access Public
router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json({ nobooksfound: "Livros não encontrados!" }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json({ nobookfound: "Livro nao localizado" }));
});

// @route POST api/books
// @description add/save book
// @access Public
router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.json({ msg: "Livro incluido com sucesso" }))
    .catch(err => res.status(400).json({ error: "Erro na inclusao do livro: " + err }));
});

// @route PUT api/books/:id
// @book description update
// @access Public
router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((book) => res.json({ mgs: "Livro excluido com sucesso" }))
    .catch((err) => res.status(404).json({ error: "Livro nao localizado" }));
});

module.exports = router;
