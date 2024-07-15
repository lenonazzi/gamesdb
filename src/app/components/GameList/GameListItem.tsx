import { ReactNode, useCallback, useEffect } from "react";
import { FaSteam } from "react-icons/fa";
import { SiEpicgames } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";
import { isPermissionGranted, requestPermission, sendNotification } from "@tauri-apps/api/notification";
import { GameListActions } from "./GameListActions";
import cn from "classnames";

type Platform = "steam" | "epic" | "nintendo"

type Game = {
  url: string
  title: string
  logo: string
  deadline: string
  plataform: Platform
}

interface GameListItemProps {
  game: Game
  type?: 'free' | 'upcoming'
}

const PLATFORM_SIZE = 16

export const GameListItem = ({ game, type = 'free' }: GameListItemProps) => {
  useEffect(() => {
    isPermissionGranted().then(async (permissionGranted) => {
      if (!permissionGranted) {
        requestPermission()
      }
    })
  }, [])

  const getPlatform = useCallback(() => {
    const platform: { [key in Platform]: ReactNode } = {
      "steam": <FaSteam size={PLATFORM_SIZE} />,
      "epic": <SiEpicgames size={PLATFORM_SIZE} />,
      "nintendo": <BsNintendoSwitch size={PLATFORM_SIZE} />
    }

    return platform[game.plataform]
  }, [game.plataform])

  return (
    <div
      className={cn("flex cursor-default items-center justify-between gap-2 rounded-md p-2", {
        'hover:bg-hover': type === 'free'
      })}
      onClick={() => {
        sendNotification({ title: 'New free games!', body: 'V-Rising, Fortnite, Super Mario Odyssey and more...'})
      }}
    >
      <div className="flex flex-row gap-x-4 items-center">
        <img
          className="w-10 h-10 rounded-md object-cover"
          src={game.logo}
        />

        <div className="flex flex-col gap-y-0.5">
          <span className="line-clamp-1">
            {game.title}
          </span>

          <span className="text-xs">
            {type === 'free' ? 'until' : 'available'} {game.deadline}
          </span>
        </div>
      </div>

      <div>
        {type === 'free'
          ? getPlatform()
          : <GameListActions
              url={game.url}
              notification={game.title === 'Fortnite'}
            />
        }
      </div>
    </div>
  )
}
