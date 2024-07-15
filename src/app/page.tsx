"use client";

import { emit } from "@tauri-apps/api/event";
import dynamic from "next/dynamic";
import Separator from "./components/Separator";
import GameList from "./components/GameList";
// import { useNotitifcation } from "./hooks/useNotification";
import { useEffect, useMemo } from "react";
import Tab, { type TabItem} from "./components/Tab";
import { isPermissionGranted, requestPermission } from "@tauri-apps/api/notification";

const MenuItem = dynamic(() => import("./components/MenuItem"), {
  ssr: false,
});

export default function Home() {
  // const { emitNotification } = useNotitifcation()

  // useEffect(() => {
  //   console.log('🚀 | file: page.tsx | line 18 | notification')
  //   emitNotification('New free games!', 'V-Rising, Fortnite and more!')
  // }, [])

  const tabs: TabItem[] = useMemo(() => [
    { label: "Free Games", icon: "truck" },
    { label: "Upcoming Games", icon: "box" }
  ], [])

  return (
    <div className="h-screen flex flex-col gap-2 rounded-md border border-primary/30 py-1.5 text-sm text-primary">
      {/* <div className="flex flex-col flex-1 overflow-hidden"> */}
        <Tab
          items={tabs}
          initialIndex={0}
        >
          <Tab.Page pageIndex={0}>
            <GameList>
              <GameList.Item game={{
                url: 'https://store.steampowered.com/app/1604030/V_Rising/',
                title: 'V-Rising',
                logo: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1604030/d18204000a839feb84393b3d860c17cd4a4b269c.jpg',
                deadline: '18/10/2024',
                plataform: 'steam'
              }} />

              <GameList.Item game={{
                url: 'https://store.steampowered.com/app/1604030/V_Rising/',
                title: 'Fortnite',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png',
                deadline: '18/10/2024',
                plataform: 'epic'
              }} />

              <GameList.Item game={{
                url: 'https://store.steampowered.com/app/1604030/V_Rising/',
                title: 'Super Mario Odyssey',
                logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/711fffe2-ea41-4265-9741-b6b99b13c7c7/dealmy0-1db6874c-b175-42c4-8d5c-e5d5358871be.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcxMWZmZmUyLWVhNDEtNDI2NS05NzQxLWI2Yjk5YjEzYzdjN1wvZGVhbG15MC0xZGI2ODc0Yy1iMTc1LTQyYzQtOGQ1Yy1lNWQ1MzU4ODcxYmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JDJXfhgGuN9zK7jFcVnUKJNhPuP_IcF9K-AuR8sVauo',
                deadline: '18/10/2024',
                plataform: 'nintendo'
              }} />

              <GameList.Item game={{
                url: 'https://store.steampowered.com/app/1604030/V_Rising/',
                title: 'V-Rising Testing long string now what is going on',
                logo: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1604030/d18204000a839feb84393b3d860c17cd4a4b269c.jpg',
                deadline: '18/10/2024',
                plataform: 'steam'
              }} />
            </GameList>
          </Tab.Page>

          <Tab.Page pageIndex={1}>
            <GameList>
              <GameList.Item
                type="upcoming"
                game={{
                  url: 'https://store.steampowered.com/app/1604030/V_Rising/',
                  title: 'V-Rising',
                  logo: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/1604030/d18204000a839feb84393b3d860c17cd4a4b269c.jpg',
                  deadline: '18/10/2024',
                  plataform: 'steam'
                }}
              />

              <GameList.Item
                type="upcoming"
                game={{
                  url: 'https://store.steampowered.com/app/1604030/V_Rising/',
                  title: 'Fortnite',
                  logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Fortnite_F_lettermark_logo.png',
                  deadline: '18/10/2024',
                  plataform: 'steam'
                }}
              />
            </GameList>
          </Tab.Page>
        </Tab>
      {/* </div> */}

      <Separator />

      <nav className="flex select-none flex-col px-1">
        <MenuItem>About GamesDB...</MenuItem>
        <MenuItem onClick={() => emit("quit")}>Check for updates</MenuItem>
      </nav>

      <Separator />

      <nav className="flex select-none flex-col px-1">
        <MenuItem>Settings</MenuItem>
        <MenuItem hotkey="mod+Q" onClick={() => emit("quit")}>
          Quit
        </MenuItem>
      </nav>
    </div>
  );
}
