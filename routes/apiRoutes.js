const axios = require("axios");
const router = require("express").Router();

router.get("/articles", (req, res) => {
    axios
        .get("http://api.nytimes.com/svc/search/v2/api-key=f75a6d317c154249a3a6bf8ccc642330", { params: req.query })
        .then (({ data: { results } }) => res.json(results))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
