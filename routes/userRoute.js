const express = require("express");
const { create, find, findO, findId, update, update2, supp, suppMany, chain } = require("../handlers/handler");
const userRouter = express.Router();

userRouter.post("/create",create);
userRouter.get("/find",find)
userRouter.get("/findone",findO)
userRouter.get("/findid/:id",findId)
userRouter.put("/update",update)
userRouter.put("/update2",update2)
userRouter.delete("/delete/:id",supp)
userRouter.delete("/delete2/:name",suppMany)
userRouter.get("/chaine",chain)

module.exports = userRouter;