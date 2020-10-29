const server = require('express').Router();
const { Players } = require('../db.js');

server.get('/', (req, res, next) => {
	Players.findAll({order: [
		['score', 'DESC'],
		], limit: 10 
	})
		.then(players => {
			res.send(players);
		})
		.catch(next);
});

server.post('/', (req, res, next) => {
	let {name, image} = req.body
	

	const addPlayers = req.body.players.map(player => {
		let score = Math.floor(Math.random() * (100 - 0)) + 0;
		return Players.create({ name: player.name, score: score, image: player.image })
	})
	Promise.all(addPlayers)
    .then((data) => {
      res.status(201);
      res.send(data);
    })
    .catch((error) => {
      next(error);
    });
});



module.exports = server;
