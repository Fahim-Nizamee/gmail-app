"use client"

import Image from "next/image";
import clock from "@/public/images/clock.svg";
import cross from "@/public/images/cross.svg";
import done from "@/public/images/done.svg";
import dropdownArrow from "@/public/images/dropdownArrow.svg";
import forward from "@/public/images/forward.svg";
import longArrowLeft from "@/public/images/longArrowLeft.svg";
import mark from "@/public/images/mark.svg";
import menuDots from "@/public/images/menuDots.svg";
import print from "@/public/images/print.svg";
import reply from "@/public/images/reply.svg";
import report from "@/public/images/report.svg";
import templateImage from "@/public/images/templateImage.svg";
import trash from "@/public/images/trash.svg";
import undo from "@/public/images/undo.svg";
import archive from "@/public/images/archive.svg";
import archiveRemove from "@/public/images/archiveRemove.svg";
import arrowLeft from "@/public/images/arrowLeft.svg";
import arrowRight from "@/public/images/arrowRight.svg";
import share from "@/public/images/share.svg";
import profilePic from "@/public/images/profilePic.svg";
import starred from "@/public/images/starred.svg";
import more from "@/public/images/more.svg";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Message({ params }) {
  const searchParams = useSearchParams();
  const mail = searchParams.get("mail");

  if (!mail) {
    return <div>Loading...</div>;
  }

  const mailObj = JSON.parse(decodeURIComponent(mail));

  return (
    <main>
      <div className="p-4">
        <div className="pb-10 flex justify-between">
          <div className="flex items-center">
            <Link href={'/'} className="mr-10">
              <Image src={longArrowLeft} alt="longArrowLeft" />
            </Link>
            <div className="flex gap-4">
              <button>
                <Image src={archive} alt="archive" />
              </button>
              <button>
                <Image src={report} alt="report" />
              </button>
              <button>
                <Image src={trash} alt="trash" />
              </button>
              <div className="border h-full"></div>
              <button>
                <Image src={mark} alt="mark" />
              </button>
              <button>
                <Image src={clock} alt="clock" />
              </button>
              <button>
                <Image src={done} alt="done" />
              </button>
              <div className="border h-full"></div>
              <button>
                <Image src={archiveRemove} alt="archiveRemove" />
              </button>
              <button>
                <Image src={undo} alt="undo" />
              </button>
              <button>
                <Image src={menuDots} alt="menuDots" />
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500 text-sm">1-16 of 16</span>
            <button>
              <Image src={arrowLeft} alt="arrowLeft" />
            </button>
            <button>
              <Image src={arrowRight} alt="arrowRight" />
            </button>
          </div>
        </div>
        <div className="pl-14 mb-8 flex justify-between ">
          <div className="flex gap-2 items-center">
            <span className="text-lg text-gray-700 ">{mailObj.subject}</span>
            <span className="rounded text-sm text-gray-500 bg-gray-200 h-5  flex items-center gap-1 px-1">
              Inbox
              <Image src={cross} alt="cross" />
            </span>
          </div>
          <div className="flex gap-4">
            <button>
              <Image src={print} alt="print" />
            </button>
            <button>
              <Image src={share} alt="share" />
            </button>
          </div>
        </div>
        <div className="flex  justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gray-300 rounded-full">
              <Image className="h-full w-full" src={profilePic} alt="profilePic" />
            </div>
            <div>
              <div className="flex items-center">
                <div className="font-bold text-lg">{mailObj.username}</div>
                <div className="text-sm text-gray-500">
                  &lt;{mailObj.mail_id}&gt;
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span>to me</span>
                <Image src={dropdownArrow} alt="dropdownArrow" />
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 flex items-start gap-4">
            <span>{mailObj.date}</span>
            <div className="flex gap-4 pt-[3px]">
              <button>
                <Image src={starred} alt="starred" />
              </button>
              <button>
                <Image src={reply} alt="reply" />
              </button>
              <button>
                <Image src={more} alt="more" />
              </button>
            </div>
          </div>
        </div>
        <div className=" pl-14">
          <div className="text-gray-700 mb-4 w-80">{mailObj.message_top}</div>
          <div className="mb-4 text-gray-700 ">{mailObj.message_bottom}</div>
          {mailObj.images.map(image => {
            return(
              <Image
              key={image.id}
              src={image.image}
              alt="Template Image"
              className=" rounded-lg mb-4"
            />
            )
            
          })}

          <div className="flex gap-4">
            <button className="px-4 py-2 border hover:bg-gray-200 rounded-full flex items-center gap-2">
              <Image src={reply} alt="reply" /> Reply
            </button>
            <button className="px-4 py-2 border hover:bg-gray-200 rounded-full flex items-center gap-2">
              <Image src={forward} alt="forward" />
              Forward
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
