"use strict";

const { Router } = require("express"),
      mdwr = require("../middleware"),
      ctrl = require("../controllers/salesDate"),
      router = Router();

router.get("/day", mdwr.checkAdmin, ctrl.salesDay)
      .get("/month", mdwr.checkAdmin, ctrl.salesMonth);

module.exports = router;