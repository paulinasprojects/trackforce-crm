import { LiaArrowRightSolid } from "react-icons/lia";

import { Link } from "react-router-dom"

const ChangeLogButton = () => {
  return (
    <div className="text-white mb-6">
      <div className="flex items-center gap-4 outline outline-2 outline-[#383838] p-2 rounded-md">
        <button className="text-sm font-inter bg-[#242424] rounded px-2.5 py-1.5">Change log update</button>
        <span className="hidden xl:block text-[12px] font-inter">Workflow feature is now available!</span>
        <Link to="/changelog" className="underline underline-offset-2 font-medium font-inter text-[#6F8EFE] text-[12px] hover:text-[#6F8EFE]/80 transition duration-200 inline-flex items-center gap-2.5">
          Read Update
          <LiaArrowRightSolid className="size-4" />
        </Link>
      </div>
    </div>
  )
}

export default ChangeLogButton