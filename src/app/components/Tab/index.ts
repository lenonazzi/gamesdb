import {
  Tab,
  type TabItem,
  type TabProps
} from "./Tab"

import { TabPage } from "./TabPage"

interface TabStatics {
  Page: typeof TabPage
}

export type {
  TabItem,
  TabProps
}

// @ts-expect-error
Tab.Page = TabPage;

export default Tab as typeof Tab & TabStatics
