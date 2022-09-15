"use strict";

const { Router } = require("express"),
      ctrl = require("../controllers/sales"),
      mdwr = require("../middleware"),
      router = Router();

router.get("/", mdwr.checkEveryone, ctrl.getSales)
      .post("/", mdwr.checkEveryone, ctrl.postSales)
      .put("/", mdwr.checkAdmin, ctrl.putSales)
      .delete("/", mdwr.checkAdmin, ctrl.deleteSale);

module.exports = router;