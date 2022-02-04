const knex = require("../db/connection")

function list(isShowing) {
  if(isShowing){
    return knex("movies as movs")
        .join("movies_theaters as mt", "movs.movie_id", "mt.movie_id")
        .distinct("mt.movie_id")
        .select("movs.*")
        .where({is_showing: true})
  }
    return knex("movies")
      .select("*")
}

function read(movieId) {
  return knex("movies")
    .select("*")
    .where({movie_id: movieId})
    .first()
  
}


module.exports = {
  list,
  read,
}