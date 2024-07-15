import { FaExternalLinkAlt } from "react-icons/fa"
import { IoNotifications } from "react-icons/io5"
import { IoNotificationsOffSharp } from "react-icons/io5";

interface GameListActionsProps {
  url: string
  notification: boolean
}

export const GameListActions = ({ url, notification }: GameListActionsProps) => {
  return (
    <div className="flex flex-row gap-x-2">
      <FaExternalLinkAlt />

      {notification
        ? <IoNotifications />
        : <IoNotificationsOffSharp />
      }
    </div>
  )
}
