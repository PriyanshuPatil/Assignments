const { podcastModel } = require("../model/podcast.model");

const getPodcast = async (req, res) => {
  const id = req.query.id;
  try {
    if (id) {
      const Podcast_Data = await podcastModel.find({ project_id: id });
      res.send(Podcast_Data);
    } else {
      const Podcast_Data = await podcastModel.find();
      res.send(Podcast_Data);
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const getSinglePodcast = async (req, res) => {
  const id = req.params.id;
  try {
    const Podcast_Data = await podcastModel.findById(id);
    if (Podcast_Data) {
      res.send(Podcast_Data);
    } else {
      res.send({ msg: "Podcast is Not Present" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const addPodcast = async (req, res) => {
  try {
    const new_Podcast = new podcastModel(req.body);
    await new_Podcast.save();
    res.status(201).send({ msg: "Podcast Succesfully Added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const updatePodcast = async (req, res) => {
  const id = req.params.id;
  const text = req.query.text;
  console.log(text);
  try {
    const Podcast_Data = await podcastModel.findById(id);
    if (Podcast_Data.length == 0) {
      res.status(400).send({ msg: "No Data Present" });
    } else {
      const Podcast_Data = await podcastModel.findByIdAndUpdate(id, {
        link: text,
      });
      await Podcast_Data.save();
      res.status(201).send({ msg: "Podcast Succesfully Updated" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const deletePodcast = async (req, res) => {
  const id = req.params.id;
  try {
    const Podcast_Data = await podcastModel.findByIdAndDelete(id);
    res.send({ msg: "Podcast Succesfully Deleted" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

module.exports = {
  getPodcast,
  getSinglePodcast,
  addPodcast,
  deletePodcast,
  updatePodcast,
};
