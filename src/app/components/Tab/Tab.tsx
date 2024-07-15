import { PropsWithChildren } from "react"

// import { icons } from "config.icons"
import { TabHeader } from "./TabHeader"
import TabProvider from "./TabProvider"

export type TabItem = {
  label: string,
  // icon: keyof typeof icons
} | null

export interface TabProps extends PropsWithChildren {
  items: TabItem[]
  initialIndex?: number
}

export const Tab = ({
  items,
  initialIndex = 0,
  children
}: TabProps) => (
  <TabProvider>
    <TabHeader
      items={items}
      initialIndex={initialIndex}
    />

    {children}
  </TabProvider>
)
