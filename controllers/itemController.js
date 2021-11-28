const Item = require('./../models/itemModel');
const APIFeatures = require('./../utils/apiFeatures');

exports.getAllItems = async (req, res) => {
  try {
    // sorting
    var sort = {};
    var match = {};
    // var pipeline = []; need to create aggregate pipeline later to make it easier to add
    if (parseInt(req.query.price)) {
      sort.price = parseInt(req.query.price);
    } else {
      if (parseInt(req.query.priceMin)) {
        match = { price: { $gte: parseInt(req.query.priceMin) } };
      }
      if (parseInt(req.query.priceMax)) {
        Object.assign(match.price, { $lte: parseInt(req.query.priceMax) });
      }
    }
    if (parseInt(req.query.createdAt)) {
      sort.createdAt = parseInt(req.query.createdAt);
    }
    // matching

    if (parseInt(req.query.purchasedYear)) {
      match.purchasedYear = parseInt(req.query.purchasedYear);
    }
    if (req.query.condition) {
      match.condition = req.query.condition;
    }
    console.log(sort);
    const items = await Item.find(match).sort(sort);

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: items.length,
      data: {
        items,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    // Item.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        item,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createItem = async (req, res) => {
  try {
    // const newItem = new Item({})
    // newItem.save()

    const newItem = await Item.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        item: newItem,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        item,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
