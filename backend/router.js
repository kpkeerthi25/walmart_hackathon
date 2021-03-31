const con = require("../db/dbconn");

const router = require("express").Router();
const db = require("../db/dbserver");

router.get("/:id", async (req, res) => {
  const totalSaved = await db.getCostSaved(req.params.id);
  const totalProducts = await db.getOrderCount(req.params.id);
  const mostProfitableProductList = await db.getMostProfitableOrders(
    req.params.id
  );
  const costliestPurchaseList = await db.getCostlyProduct(req.params.id);
  const categoryData = await db.getCategoryBreakup(req.params.id);
  const monthList = await db.getMonthBreakup(req.params.id);
  const imported = await db.getImportedData(req.params.id);

  const importData = {
    local: imported[0].count,
    imported: imported[1].count,
  };

  const title_tmp = await db.getTitle(req.params.id);
  console.log(title_tmp[0]);

  const data = {
    totalSaved: totalSaved[0].cost_saved,
    totalProducts: totalProducts[0].order_count,
    mostProfitableProductList,
    costliestProductList: costliestPurchaseList,
    categoryDataList: categoryData,
    monthList,
    importData,
    title: title_tmp[0].category + " man",
  };

  res.send(data);
});

// {​​​​​​​​

// longestInCartList: [{​​​​​​​​name: '', image: '', price: 0}​​​​​​​​],

// {​​​​​​​​
// brandList: [],
// categoryData: {​​​​​​​​
// items: {​​​​​​​​labels: [], data: []}​​​​​​​​,
// cost: {​​​​​​​​labels: [], data: []}​​​​​​​​,
// discount: {​​​​​​​​labels: [], data: []}​​​​​​​​,
//   }​​​​​​​​,
// totalSaved: 0, done.......
// mostProfitableProductList: [{​​​​​​​​name: '', image: '', price: 0}​​​​​​​​],
// totalProducts: 17852,
// longestInCartList: [{​​​​​​​​name: '', image: '', price: 0}​​​​​​​​],
// importData: {​​​​​​​​local: 0, imported: 0}​​​​​​​​,
// monthList: {​​​​​​​​
// items: [0, 0, 0],
// cost: [0, 0, 0],
// discount: [0, 0, 0],
//   }​​​​​​​​,
// title: 'Ajay AT',
// }​​​​​​​​

router.get("/product", (req, res) => {
  db.getProducts().then((val) => {
    res.send(val);
  });
});

router.get("/product/:id", (req, res) => {
  db.getProductDetails(req.params.id).then((val) => {
    res.send(val);
  });
});

// For costliest Purchase

router.get("/costliest_purchase/:id", (req, res) => {
  db.getCostlyProduct(req.params.id).then((val) => {
    res.send(val);
  });
});

// For Amount Saved

router.get("/cost_saved/:id", (req, res) => {
  db.getCostSaved(req.params.id).then((val) => {
    res.send(val);
  });
});

// For no. of orders

router.get("/order_count/:id", (req, res) => {
  db.getOrderCount(req.params.id).then((val) => {
    res.send(val);
  });
});

// For Most Profit Purchase

router.get("/profited_orders/:id", (req, res) => {
  db.getMostProfitableOrders(req.params.id).then((val) => {
    res.send(val);
  });
});

module.exports = router;
