const service = require("./theater.service")

async function list(req, res) {
    const theaters = await service.list()

    for(let theater of theaters) {
        const movies = await service.listMovies(theater.theater_id)

        theater["movies"] = movies
    }

    res.json({data: theaters})
}

async function listMovies(req, res, next) {
    if(res.locals.movie) {
        return res.json({data: await service.listTheaters(res.locals.movies.movie_id)})
    }
    next()
}

module.exports = {
    list: [listMovies, list],
}