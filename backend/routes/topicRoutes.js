const express = require("express");
const router = express.Router();

const {
    getTopics,
    gettopicBySlug,
    createTopic,
} = require("../controllers/topicController");

router.get("/", getTopics);
router.get("/:slug", gettopicBySlug);
router.post("/", createTopic);

module.exports = router;
