const data = require('./data');

const getPlayerById = async (id) => {
    return data.find((player) => player.id === parseInt(id));
};

const getAllPlayers = async () => {
    return data;
};

const getTopPlayers = async (limit) => {
    const sorted = data.sort((a, b) => {
        return a.rank - b.rnk;
    });
    return sorted.slice(0, limit);
};