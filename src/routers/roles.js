"use strict";

const { Router } = require("express"),
      ctrl = require("../controllers/roles"),
      mdwr = require("../middleware"),
      router = Router();

router.get("/", mdwr.checkAdmin,ctrl.getRoles)
      .post("/", mdwr.checkAdmin,ctrl.postRoles);

module.exports = router;