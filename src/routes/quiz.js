var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/implementar", function (req, res) {
    quizController.implementar(req, res);
});

router.get("/ranking", function (req, res) {
    quizController.ranking(req, res);
});

router.get("/ranking/:id", function (req, res) {
    quizController.rankingindi(req, res);
});



module.exports = router;
