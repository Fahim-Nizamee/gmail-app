"use client";

import Image from "next/image";
import menuItems from "@/app/components/items/MenuItems";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

function MenuComponent() {
  const [selected, setSelected] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if(pathname!=='/')
      {
        const currentPath = pathname.split("/").pop();
        setSelected(currentPath);
      }
      else{
        setSelected(pathname);
      }
    
  }, [pathname]);

  function handleClick(id) {
    setSelected(id);
    console.log(id);
    router.push(`/${id}`);
  }

  return (
    <>
      {menuItems.map(({ id, icon, label, count }) => (
        <div
          key={id}
          className={`flex items-center justify-between pl-4 pr-4 mr-2 py-[2px] cursor-pointer rounded-r-full ${
            selected === id
              ? "bg-[#D3E3FD] font-semibold"
              : "hover:bg-[#D3E3FD]"
          }`}
          onClick={() => handleClick(id)}
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 flex items-center">
              <Image src={icon} alt={label} />
            </div>
            <span className="">{label}</span>
          </div>
          {count && <div>{count}</div>}
        </div>
      ))}
    </>
  );
}


export default MenuComponent;
