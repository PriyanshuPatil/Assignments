const express = require("express");
const {
  getPodcast,
  getSinglePodcast,
  addPodcast,
  deletePodcast,
  updatePodcast,
} = require("../controller/Podcast.controller");
const podcastRouter = express.Router();
podcastRouter.get("/", getPodcast);
podcastRouter.get("/:id", getSinglePodcast);
podcastRouter.post("/", addPodcast);
podcastRouter.patch("/:id", updatePodcast);
podcastRouter.delete("/:id", deletePodcast);
module.exports = { podcastRouter };
