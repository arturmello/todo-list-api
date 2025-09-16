import Router from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Task routes funcionando!");
});

export default router;