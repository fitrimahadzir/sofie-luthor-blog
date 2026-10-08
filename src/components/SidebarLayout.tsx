import type { ReactNode } from 'react'
import Sidebar from './Sidebar'

/**
 * Two-column layout: main content on the left, <Sidebar /> on the right.
 * Remove the sidebar from a page by replacing <SidebarLayout>…</SidebarLayout>
 * with its children directly.
 */
export default function SidebarLayout({ children }: { children: ReactNode }) {
  return (
    <div className="sidebar-layout">
      <div className="sidebar-layout__main">{children}</div>
      <aside className="sidebar-layout__side">
        <Sidebar />
      </aside>
    </div>
  )
}
