import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import SearchInput from "./search-input"
import AuthButton from "@/modules/auth/ui/components/auth-button"

export const HomeNavbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
        <div className="flex items-center gap-4 w-full">
          {/* Menu and logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <SidebarTrigger />
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image src="/logo.svg" alt="logo" height={32} width={32} />
                  <p className="text-xl font-semibold tracking-tight">NewTube</p>
                </div>
              </Link>
          </div>
          {/* Search bar */}
          <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
              <SearchInput />
          </div>
          
          <div className="flex-shrink-0 items-center flex gap-4">
            <AuthButton />
          </div>
        </div>
      </div>
  )
}