const { addToLikedMovies, getLikedmovies, removeFromLikedMovies } = require("../controllers/usercontroller");

const router = require("express").Router();
router.post("/add", addToLikedMovies);
router.get("liked/:email", getLikedmovies);
router.put("/delete", removeFromLikedMovies);
module.exports = router;