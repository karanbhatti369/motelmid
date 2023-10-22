const express = require('express');
const router = express.Router();

router.get('/player/:id', async (req, res) => {
    const id = req.params.id
    const player = await player.getPlayerById(id);
    res.json(player);
});

router.get('/players', async (req, res) => {
    const players = await player.getAllPlayers();
    res.json(players);
});

router.get('/plas/top/:limit', async (req, res) => {
    const limit = req.params.limit;
    const players = await player.getTopPlays(limit);
    res.json(players);
});

module.exports = router;