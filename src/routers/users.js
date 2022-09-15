"use strict";

const { Router } = require("express"),
      ctrl = require("../controllers/users"),
      mdwr = require("../middleware"),
      router = Router();

router.get("/", mdwr.checkAdmin,ctrl.getUsers)
      .get("/:id", mdwr.checkAdmin, ctrl.getUsersId)
      .post("/", mdwr.checkAdmin,ctrl.postUser)
      .delete("/", mdwr.checkAdmin,ctrl.deleteUser);

module.exports = router;