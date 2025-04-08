import { useState } from "react"
import { Bell, Home, Settings, User, BarChart3, } from "lucide-react"
import { UserButton } from '@clerk/clerk-react';
import Admin_home from "./Admin_home"
import AdminStockList from "./adminStockView"
import UserManagment from "./Admin_usermangment";





function SidebarItem({ icon, label, active = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-3 cursor-pointer ${active ? "bg-red-900" : "hover:bg-gray-900"}`}
    >
      <span className="text-gray-400">{icon}</span>
      <span className={active ? "font-medium" : ""}>{label}</span>
    </div>
  )
}


function Dashboard() {
    
  const [activeMenu, setActiveMenu] = useState("Dashboard")

  const handleMenuClick = (menu) => {
    setActiveMenu(menu)
  }

  

  const renderContent = () => {
    switch (activeMenu) {
      case "User Management":
        return <UserManagment />
      case "Dashboard":
        return <Admin_home />
        case "Stocks & Assets":
        return <AdminStockList />
      default:
        return <div className="p-6">Select a menu item</div>
    }
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111] py-6 space-y-2">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-2xl font-bold text-white">StockVision Ai</h1>
        </div>
        <div className="border-b border-gray-800 mb-4"></div>
        <SidebarItem icon={<Home size={20} />} label="Dashboard" active={activeMenu === "Dashboard"} onClick={() => handleMenuClick("Dashboard")} />
        <SidebarItem icon={<BarChart3 size={20} />} label="Stocks & Assets" active={activeMenu === "Stocks & Assets"} onClick={() => handleMenuClick("Stocks & Assets")} />
        <SidebarItem icon={<User size={20} />} label="User Management" active={activeMenu === "User Management"} onClick={() => handleMenuClick("User Management")} />
        <SidebarItem icon={<Settings size={20} />} label="Settings" active={activeMenu === "Settings"} onClick={() => handleMenuClick("Settings")} />
      </aside>

      <div className="flex-1 overflow-auto">
      <header className="flex justify-between items-center p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold">StockVision Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Bell size={20} />
            </button>
            <button className="p-2">
                 <UserButton signOutRedirectUrl='/'
                     forceRedirectUrl={import.meta.env.VITE_ADMIN_EMAIL === 'ai.stockvision@gmail.com' ? '/admin' : '/'}
                     />
            </button>
          </div>
        </header>
        <main className="p-6 bg-gray-900 place-items-center">
        {renderContent()}
      </main>
      </div>
   
    </div>
  )
}

export default Dashboard

