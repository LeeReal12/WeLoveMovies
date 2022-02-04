const router = require("express").Router()
const controller = require("./movies.controller")
const reviewsRouter = require("../reviews/reviews.router")
const theatersRouter = require("../theaters/theater.router")
const methodNotAllowed = require("../errors/methodNotAllowed")

router.use("/:movieId/theaters", controller.validateMovieId, theatersRouter)

router.use("/:movieId/reviews", controller.validateMovieId, reviewsRouter)

router
  .route("/:movieId")
  .get(controller.read)
  .all(methodNotAllowed)

router
  .route("/")
  .get(controller.list)
  .all(methodNotAllowed)




module.exports = router