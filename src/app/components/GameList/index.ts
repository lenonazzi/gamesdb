import {
  GameList,
} from "./GameList"

import { GameListItem } from "./GameListItem"

interface GameListStatics {
  Item: typeof GameListItem
}

// @ts-expect-error
GameList.Item = GameListItem;

export default GameList as typeof GameList & GameListStatics
