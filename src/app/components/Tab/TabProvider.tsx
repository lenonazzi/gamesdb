import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type FC,
  type PropsWithChildren
} from "react"

interface TabContext {
  activeIndex: number,
  setActiveIndex: Dispatch<SetStateAction<number>>
}

const TabContext = createContext<TabContext>({
  activeIndex: 0,
  setActiveIndex: () => void 0
})

const TabProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <TabContext.Provider
      value={{
        activeIndex,
        setActiveIndex
      }}>
      {children}
    </TabContext.Provider>
  )
}

export const useTab = () => {
  const context = useContext(TabContext)

  if (!context) {
    throw new Error("useTab must be used within an TabProvider")
  }

  return context
}

export default TabProvider
