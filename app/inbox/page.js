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

export default function Home() {
  return (
    <main>
      <div className="p-4">
        <div className="pb-10 flex justify-between">
          <div className="flex">
            <button className="mr-10">
              <Image src={longArrowLeft} alt="" />
            </button>
            <div className="flex gap-4">
              <button>
                <Image src={archive} alt="" />
              </button>
              <button>
                <Image src={report} alt="" />
              </button>
              <button>
                <Image src={trash} alt="" />
              </button>
              <div className="border h-full"></div>
              <button>
                <Image src={mark} alt="" />
              </button>
              <button>
                <Image src={clock} alt="" />
              </button>
              <button>
                <Image src={done} alt="" />
              </button>
              <div className="border h-full"></div>
              <button>
                <Image src={archiveRemove} alt="" />
              </button>
              <button>
                <Image src={undo} alt="" />
              </button>
              <button>
                <Image src={menuDots} alt="" />
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500 text-sm">1-16 of 16</span>
            <button>
              <Image src={arrowLeft} alt="" />
            </button>
            <button>
              <Image src={arrowRight} alt="" />
            </button>
          </div>
        </div>
        <div className="pl-14 mb-8 flex justify-between ">
          <div className="flex gap-2 items-center">
            <span className="text-lg text-gray-700 ">
              Check out my templates
            </span>
            <span className="rounded text-sm text-gray-500 bg-gray-200 h-5  flex items-center gap-1 px-1">
              Inbox
              <Image className="h-2" src={cross} alt="" />
            </span>
          </div>
          <div className="flex gap-4">
            <button>
              <Image src={print} alt="" />
            </button>
            <button>
              <Image src={share} alt="" />
            </button>
          </div>
        </div>
        <div className="flex  justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gray-300 rounded-full">
              <Image className="h-full w-full" src={profilePic} alt="" />
            </div>
            <div>
              <div className="flex items-center">
                <div className="font-bold text-lg">Scarlytemplates</div>
                <div className="text-sm text-gray-500">
                  &lt;randomdesign@gmail.com&gt;
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span>to me</span>
                <Image src={dropdownArrow} alt="" />
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 flex items-start gap-4">
            <span>June 25, 2018, 3:26 PM</span>
            <div className="flex gap-4 pt-[3px]">
              <button>
                <Image src={starred} alt="" />
              </button>
              <button>
                <Image src={reply} alt="" />
              </button>
              <button>
                <Image src={more} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className=" pl-14">
          <div className="text-gray-700 mb-4 w-80">
            Hi, are you liking this template? Then try out my new template for
            mobile Gmail!
          </div>
          <div className="mb-4 text-gray-700 ">
            Click link here &gt;&gt;&gt;
            <a
              className="hover:text-blue-600"
              href="https://www.figma.com/community/file/984761507298963796"
            >
              https://www.figma.com/community/file/984761507298963796
            </a>
          </div>
          <Image
            src={templateImage}
            alt="Template Image"
            className=" rounded-lg mb-4"
          />
          <div className="flex gap-4">
            <button className="px-4 py-2 border hover:bg-gray-200 rounded-full flex items-center gap-2">
              <Image src={reply} alt="" /> Reply
            </button>
            <button className="px-4 py-2 border hover:bg-gray-200 rounded-full flex items-center gap-2">
              <Image src={forward} alt="" />
              Forward
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
