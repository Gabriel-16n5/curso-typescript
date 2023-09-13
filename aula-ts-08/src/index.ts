import { Game } from "../protocols/game-protocol";

const game:Game = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. É opcional (para jogos ainda não lançados).
}

const jojo:Game = {
    id: 2,
    platform: {
        id: 2,
        name: "PC"
    },
    title: "Medivia",
    publisher: "Medivia",
    launch: "2011-09-12" // pode ser um Date. É opcional (para jogos ainda não lançados).
}

const games:Game[] = [game, jojo];

function play(game:Game){
    
    console.log(games);
}
play(game)