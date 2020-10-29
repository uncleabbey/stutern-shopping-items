class ItemController {
  constructor() {
    this.id = 0;
    this.store = [];
  }
  getAllItems = (req, res) => {
    return res.status(200).json({
      message: "succesfully retrieved all item",
      store: this.store,
    });
  };
  addItem = (req, res) => {
    const { name, price } = req.body;
    this.id++;
    const item = {
      id: this.id,
      name,
      price,
    };
    this.store.push(item);
    return res.status(201).json({
      message: "succesfully created an item",
      item,
    });
  };
  getItem = (req, res) => {
    const { id } = req.params;
    const item = this.store.find((val) => val.id === Number(id));
    if (!item) {
      return res.status(404).json({
        message: "item not found",
      });
    }
    return res.status(200).json({
      message: "succesfully retrieved an item",
      item,
    });
  };
  modifyItems = (req, res) => {
    const { id } = req.params;
    const item = this.store.find((val) => val.id === Number(id));
    if (!item) {
      return res.status(404).json({
        message: "item not found",
      });
    }
    const { name, price } = req.body;
    item.name = name;
    item.price = price;
    return res.status(202).json({
      message: "succesfully modified an item",
      item,
    });
  };
  deleteItem = (req, res) => {
    const { id } = req.params;
    const itemIndex = this.store.findIndex((item) => item.id === Number(id));
    if (itemIndex === -1) {
      return res.status(404).json({
        message: "item not found",
      });
    }
    this.store.splice(itemIndex, 1);
    return res.status(204).json({
      message: `succesfully modified an item ${id}`,
    });
  };
}

module.exports = ItemController;