import { useTab } from "./TabProvider"
import type { TabProps } from "./Tab"
import { useEffect } from "react"
import classNames from "classnames"

type TabHeaderProps = Pick<TabProps, 'items'> & {
  initialIndex: number
}

export const TabHeader = ({ items, initialIndex }: TabHeaderProps) => {
  const { activeIndex, setActiveIndex } = useTab()

  useEffect(() => {
    setActiveIndex(initialIndex)
  }, [initialIndex])

  return (
    <div className="flex flex-row items-center text-center px-3">
      {items.map((item, index) => {
        if (!item) {
          return null
        }

        return (
          <div
            className={classNames('border-b p-2 grow', {
              'border-b-regalNightshade-500': activeIndex === index,
              'border-b-transparent': activeIndex !== index
            })}
            key={`${item.label}-${index}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.label}
          </div>
        )
      })}
    </div>
  )
}
