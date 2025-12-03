import { onBoardUserAction } from "@/features/auth/actions"

const page = async () => {
  await onBoardUserAction();
  return (
    <div>page</div>
  )
}
export default page