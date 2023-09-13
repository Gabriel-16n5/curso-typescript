import { Game } from "../protocols/game-protocol";
import connection from "../database/database";

async function getGames() {
  const result = await connection.query<Game>(`SELECT * FROM games`);
  console.log(result.rows)
  return result.rows;
}

async function createGame(game: Game) {
  return await connection.query<Game>(`
  INSERT INTO games (title, platform)
      VALUES ($1, $2)
`, [game.title, game.platform]);
}

async function getGameByTitleAndPlatform(game: Game) {
  const result = await connection.query<Game>(`
  SELECT * FROM games
    WHERE title = $1 AND platform = $2
  `,
    [game.title, game.platform]
  );
  console.log(result.rows)
  return result.rows;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;