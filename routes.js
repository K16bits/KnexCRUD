const express = require("express")
const router = express.Router()

const { create } = require("./controllers/create")
const { read } = require("./controllers/read")
const { deleteData } = require("./controllers/delete")
const { update } = require("./controllers/update")

router.post("/",create);
router.get("/",read);
router.delete("/",deleteData);
router.put("/",update);

module.exports = router;