import { PropsWithChildren } from "react"
import classNames from "classnames"

import { useTab } from "./TabProvider"

interface TabPageProps extends PropsWithChildren {
  pageIndex: number
}

export const TabPage = ({ pageIndex, children }: TabPageProps) => {
  const { activeIndex } = useTab()

  return (
    <div className={classNames('flex-1 overflow-hidden', {
      "hidden": activeIndex !== pageIndex
    })}>
      {children}
    </div>
  )
}
