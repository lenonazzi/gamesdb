import { PropsWithChildren } from "react"

export const GameList = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col py-1 px-1 overflow-y-auto">
      {children}
    </div>
  )
}
