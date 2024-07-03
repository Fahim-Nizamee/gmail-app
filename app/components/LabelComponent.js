"use client";

import Image from "next/image";
import labels from "@/app/components/items/labels";

function LabelComponent() {

  return (
    <>
      {labels.map(({ id, icon, label, count }) => (
        <div
          key={id}
          className={`flex items-center justify-between pl-4 pr-4 mr-2 py-[2px] cursor-pointer rounded-r-full hover:bg-[#D3E3FD]`}
          
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 flex items-center">
              <Image src={icon} alt={label} />
            </div>
            <span>{label}</span>
          </div>
          {count && <div>{count}</div>}
        </div>
      ))}
    </>
  );
}

export default LabelComponent;
