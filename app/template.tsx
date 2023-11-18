import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          { children }
        </div>
      </div>
    </div>
  )
}
