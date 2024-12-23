'use client';

import { useDashboardContext } from "./provider";


// The overlay will only be visible on small screens to emphasize the focus on Sidebar when it is open.
export function Overlay() {
  const { isOpen, closeSidebar } = useDashboardContext();
  return (
    <div
      onClick={closeSidebar}
      className={
        isOpen
          ? 'fixed left-0 top-0 z-30 h-screen w-screen bg-white opacity-40 lg:bg-transparent'
          : ''
      }
    />
  );
}