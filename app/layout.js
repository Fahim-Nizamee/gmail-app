import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import bars from "@/public/images/bars.svg";
import calendarIcon from "@/public/images/calendarIcon.svg";
import categories from "@/public/images/categories.svg";
import categories2 from "@/public/images/categories2.svg";
import categories3 from "@/public/images/categories3.svg";
import categories4 from "@/public/images/categories4.svg";
import categories5 from "@/public/images/categories5.svg";
import compose from "@/public/images/compose.svg";
import contactIcon from "@/public/images/contactIcon.svg";
import drafts from "@/public/images/drafts.svg";
import gamilIcon from "@/public/images/gamilIcon.svg";
import helpIcon from "@/public/images/helpIcon.svg";
import inbox from "@/public/images/inbox.svg";
import menuAppsIcon from "@/public/images/menuAppsIcon.svg";
import more from "@/public/images/more.svg";
import noteTakerIocn from "@/public/images/noteTakerIocn.svg";
import plus from "@/public/images/plus.svg";
import profilePic from "@/public/images/profilePic.svg";
import searchIcon from "@/public/images/searchIcon.svg";
import searchOption from "@/public/images/searchOption.svg";
import sent from "@/public/images/sent.svg";
import settingsIcon from "@/public/images/settingsIcon.svg";
import snoozed from "@/public/images/snoozed.svg";
import starred from "@/public/images/starred.svg";
import MenuComponent from "@/app/components/MenuComponent";
import LabelComponent from "@/app/components/LabelComponent";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 h-screen`}>
        <nav className="flex items-center pt-3 ">
          <div className="w-1/6  px-5">
            <div className="flex items-center gap-3 ">
              <Image src={bars} alt="bars" />
              <Image src={gamilIcon} className="h-full"></Image>
              <div className="cursor-pointer text-2xl font-semibold text-gray-700">
                Gmail
              </div>
            </div>
          </div>
          <div className="w-5/6 px-4 ">
            <div className="flex justify-between items-center gap-6 mb-2">
              <div className="flex items-center bg-indigo-50 p-2  rounded-full w-full ">
                <div className="rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-200 h-8 w-8">
                  <Image src={searchIcon} alt="" />
                </div>

                <input
                  type="text"
                  placeholder="Search mail"
                  className="bg-transparent px-3 w-full outline-none pl-2"
                />
                <div className="rounded-full cursor-pointer flex items-center justify-center hover:bg-gray-200 h-8 w-8">
                  <Image src={searchOption} alt="" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 ">
                  <Image
                    className="h-full cursor-pointer"
                    src={helpIcon}
                    alt=""
                  />
                </div>
                <div className="w-6 h-6 ">
                  <Image
                    className="h-full cursor-pointer"
                    src={settingsIcon}
                    alt=""
                  />
                </div>
                <div className="w-6 h-6 ">
                  <Image
                    className="h-full cursor-pointer"
                    src={menuAppsIcon}
                    alt=""
                  />
                </div>
                <div className="w-8 h-8">
                  <Image
                    className="h-full cursor-pointer"
                    src={profilePic}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="h-auto flex">
          {/* Left sidebar  */}

          <div className="w-1/6">
            <div className="flex flex-col gap-1 ">
              <div className="px-4 mb-2">
                <button className="p-4 bg-[#C3E7FF] rounded-lg flex items-center gap-2">
                  <Image className="h-5" src={compose} alt="" />
                  <div>Compose</div>
                </button>
              </div>
              <MenuComponent />
              <div className="flex items-center justify-between hover:bg-[#D3E3FD] rounded-r-full pl-4 pr-4 mr-2 py-[2px] cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image className="h-full" src={more} alt="" />
                  </div>
                  <span>More</span>
                </div>
                <div></div>
              </div>
              <div className="mt-6 ">
                <div className="text-lg font-semibold mb-4 px-4 mr-2 flex justify-between items-center">
                  <h3>Labels</h3>
                  <button>
                    <Image className="h-full" src={plus} alt="" />
                  </button>
                </div>
                <LabelComponent />
              </div>
            </div>
          </div>
          {/* <!-- Main Content --> */}
          <div className="w-5/6 px-4">
            <div className="bg-white rounded-lg h-full">{children}</div>
          </div>
          {/* Right sidebar  */}
          <div className="pr-5 pt-4 flex flex-col items-center gap-6">
            <div className="w-4 h-4 cursor-pointer">
              <Image className="h-full" src={calendarIcon} alt="" />
            </div>
            <div className="w-4 h-4 cursor-pointer">
              <Image className="h-full" src={noteTakerIocn} alt="" />
            </div>
            <div className="w-4 h-4 cursor-pointer">
              <Image className="h-full" src={contactIcon} alt="" />
            </div>
            <hr className="border w-full" />
            <div className="w-4 h-4 cursor-pointer">
              <Image className="h-full" src={plus} alt="" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
