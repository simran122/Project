import express from "express";

const router = express.Router();

const users = [

    {

        users: 199,
        visitors: 0,
    },
    {
        week: "Week 1",
        users: 100,
        visitors: 500,
    },
    {
        week: "Week 2",
        users: 150,
        visitors: 300,
        users: 450,

    },
    {
        week: "Week 3",
        users: 250,
        visitors: 400,
    },
    {
        week: "Week 4",
        users: 200,
        visitors: 450,
    },

];

router.get("/", (req, res) => {
    res.send(users);
});

export default router;
