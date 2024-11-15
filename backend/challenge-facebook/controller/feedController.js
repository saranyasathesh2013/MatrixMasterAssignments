const feed = require("../model/feed");

const getAllFeed = (req, res) => {
  feed
    .find()
    .then((result) => {
      res.render("index", { feedsInfo: result, error: null });
    })
    .catch((error) => console.log(error));
};

const saveFeed = (req, res) => {
  let newFeed = new feed(req.body);
  newFeed
    .save()
    .then(() => {
      res.redirect("/feed");
    })
    .catch((error) => {
      feed
        .find()
        .then((result) => {
          res.render("index", {
            feedsInfo: result,
            error: {message: error.message},
          });
        })
        .catch((err) => {
          console.error("Error fetching feeds: ", err);
          res.render("index", {
            feedsInfo: [],
            error: {message: "Failed to save post. Error in fetching data."},
          });
        });
    });
};

const viewFeed = (req, res) => {
  feed
    .findById(req.params.feedId)
    .then((result) => {
      res.render("viewFeed", { feedInfo: result });
    })
    .catch((error) => console.log(error));
};

const deleteFeed = (req, res) => {
  feed
    .findByIdAndDelete(req.params.feedId)
    .then(() => res.redirect("/feed"))
    .catch((error) => console.log(error));
};

const renderEditPage = (req, res) => {
  feed
    .findById(req.params.feedId)
    .then((result) => res.render("editFeed", { feedInfo: result }))
    .catch((error) => console.log(error));
};

const updateFeed = (req, res) => {
  feed
    .findByIdAndUpdate(req.params.feedId, req.body)
    .then(() => {
      res.redirect("/feed");
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getAllFeed,
  saveFeed,
  viewFeed,
  deleteFeed,
  renderEditPage,
  updateFeed,
};
