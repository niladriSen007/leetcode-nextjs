import { getCurrentUserRoleAction } from "@/features/auth/actions"
import Navbar from "@/features/home/components/navbar"
import { ReactNode } from "react"

const RootLayout = async ({ children }:
  Readonly<{
    children: ReactNode
  }>
) => {
  const userRoleResponse = await getCurrentUserRoleAction();
  return (
    <div>
      <Navbar userRole={userRoleResponse.data || "USER"} />
      {children}
    </div>
  )
}
export default RootLayout