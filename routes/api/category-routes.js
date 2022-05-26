const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET /api/categories
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
  })
  .then(categories => {
    res.json(categories)
  });
  // ADD CATCH STATEMENT
});

// GET /api/categories/"id"
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    // be sure to include its associated Products
  })
  .then(categories => {
    res.json(categories)
  });
  // ADD CATCH STATEMENT
});

// CREATE /api/categories
router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(categories => res.json(categories))
    // ADD CATCH STATEMENT
});

// UPDATE /api/categories/"id"
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(categories => res.json(categories))
  // ADD CATCH STATEMENT 
});

// DELETE /api/categories/"id"
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(categories => {
    res.json(categories)
  })
});

module.exports = router;
