const knex = require("../db/connection")

const list = () => {
    return knex("theaters").select("*")
}

const listTheaters = (movieId) => {
    return knex("theater as t")
    .join("movies_theater as mt", "t.theater_id", "mt.theater_id")
    .where({movie_id: movieId})
    .select("t.*", "mt.is_showing", "mt.movie_id")
}

const listMovies = (theaterId) => {
    return knex("movies_theaters as mt")
    .join("movies as movs", "movs.movie_id", "mt.movie_id")
    .where({theater_id: theaterId})
    .select("movs.*", "mt.is_showing", "mt.theater_id")    
}

module.exports = {
    list,
    listTheaters,
    listMovies,
}