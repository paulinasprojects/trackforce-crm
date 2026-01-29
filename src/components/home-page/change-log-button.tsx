import { LiaArrowRightSolid } from "react-icons/lia";

import { Link } from "react-router-dom"

const ChangeLogButton = () => {
  return (
    <div className="text-white mb-6">
      <div className="flex items-center gap-4 outline outline-2 outline-[#383838] p-2 rounded-md  wrapper">
        <button className="text-sm bg-[#242424] rounded px-2.5 py-1.5">Change log update</button>
        <span className="hidden xl:block text-xs">Workflow feature is now available!</span>
        <Link to="/changelog" className="underline underline-offset-2 font-medium text-[#6F8EFE] text-xs hover:text-[#6F8EFE]/80 transition duration-200 inline-flex items-center gap-2.5">
          Read Update
          <LiaArrowRightSolid className="size-4" />
        </Link>
      </div>
    </div>
  )
}

export default ChangeLogButton