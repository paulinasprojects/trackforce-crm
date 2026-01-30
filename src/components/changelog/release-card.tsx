import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import type { Release } from "../../lib/types";
import { cn } from "../../lib/utils";

interface Props {
  release: Release;
}

const ReleaseCard = ({ release }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const formDate = (dateStr: string) => {
    const [year, month] = dateStr.split('-');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  }

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      "Reporting's": "bg-emerald-500/90",
      "Automation": "bg-amber-500/90",
      "CRM": "bg-red-500/90",
      "Communication": "bg-purple-500/90",
      "Sales": "bg-green-500/90",
      "Analytics": "bg-blue-500/90",
    };
    return colors[tag] || "bg-gray-500";
  }

  return (
    <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition duration-300">
      <div className="flex md:flex-row flex-col gap-4">
        <div className="flex-1">
          <div className="mb-4">
            <div className="text-gray-400 text-sm mb-2">
              {formDate(release.date)} - Version {release.version}
            </div>
            <div className="flex gap-2 mb-3">
              <span className={`${getTagColor(release.tags.releaseType)} text-white text-xs px-2 py-1 rounded`}>
                {release.tags.releaseType}
              </span>
              <span className={`${getTagColor(release.tags.productArea)} text-white text-xs px-2 py-1 rounded`}>
                {release.tags.productArea}
              </span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3 mt-2">{release.title}</h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">{release.description}</p>
          <div className="mb-4">
            <p className="text-white text-sm font-medium mb-2">
              Key Benefits:
            </p>
          </div>
          {expanded && release.benefits && (
            <ul className="space-y-1">
              {release.benefits.map((benefit, idx) => (
                <li key={idx} className="text-gray-400 text-sm flex items-start">
                  <span className="text-white mr-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => setExpanded(!expanded)}
            className="text-blue-400 text-sm hover:text-blue-300 transition-colors inline-flex items-center gap-1"
          >
            See {expanded ? "less" : "more"}
            <IoChevronDown
              className={cn(`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`)}
            />
          </button>
        </div>
        <div className="">
          <img src={release.image} alt="" className="w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default ReleaseCard