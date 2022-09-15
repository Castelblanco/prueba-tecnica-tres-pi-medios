"use strict";

const { Router } = require("express"),
      ctrl = require("../controllers/products"),
      mdwr = require("../middleware"),
      router = Router();

router.get("/", mdwr.checkEveryone, ctrl.getProducts)
      .post("/", mdwr.checkAdmin, ctrl.postProducts);

module.exports = router;