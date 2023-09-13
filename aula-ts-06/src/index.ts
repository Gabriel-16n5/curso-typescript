const game:{
    id: number;
    platform: {
        id: number;
        name: string;
    };
    title: string;
    publisher: string;
    launch?: string | Date;
} = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. É opcional (para jogos ainda não lançados).
}

const jojo:{
    id: number;
    platform: {
        id: number;
        name: string;
    };
    title: string;
    publisher: string;
    launch?: string | Date;
} = {
    id: 2,
    platform: {
        id: 2,
        name: "PC"
    },
    title: "Medivia",
    publisher: "Medivia",
    launch: "2011-09-12" // pode ser um Date. É opcional (para jogos ainda não lançados).
}

const games: {
    id: number;
    platform: {
        id: number;
        name: string;
    };
    title: string;
    publisher: string;
    launch?: string | Date;
}[] = [game, jojo];

function play(game:{
    id: number;
    platform: {
        id: number;
        name: string;
    };
    title: string;
    publisher: string;
    launch?: string | Date;
}){
    
    console.log(games);
}
play(game)