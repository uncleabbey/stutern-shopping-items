const express = require("express");
const ItemController = require("../controller");

const router = new express.Router();
const itemCtrl = new ItemController();
const { addItem, deleteItem, getAllItems, getItem, modifyItems } = itemCtrl;
router.route("").get(getAllItems).post(addItem);

router.route("/:id").get(getItem).patch(modifyItems).delete(deleteItem);

module.exports = router;
