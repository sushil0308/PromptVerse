import { Sidebar } from "@/components/sidebar"

export default function LearnLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-8 lg:px-8">
      <div className="flex gap-8">
        <Sidebar className="hidden lg:block" />
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </div>
  )
}
