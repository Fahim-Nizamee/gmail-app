import templateImage from "@/public/images/templateImage.svg";
import dropdownArrow from "@/public/images/dropdownArrow.svg";
import refresh from "@/public/images/refresh.svg";
import menuDots from "@/public/images/menuDots.svg";
import arrowLeft from "@/public/images/arrowLeft.svg";
import arrowRight from "@/public/images/arrowRight.svg";
import starred from "@/public/images/starred.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const mails = [
    {
      id: 1,
      username: "Scarlytemplates",
      subject: "Check out my templates",
      mail_id: "randomdesign@gmail.com",
      message_top:
        "Hi, are you liking this template? Then try out my new template for mobile Gmail!",
      message_bottom:
        "Click link here >>> https://www.figma.com/community/file/984761507298963796 ",
      images: [
        {
          id:1,
          image: templateImage,
        },
      ],
      date: "June 25, 2018, 3:26PM",
    },
    {
      id: 2,
      username: "Fahim Nizamee",
      subject: "Demo templates",
      mail_id: "nizameef@gmail.com",
      message_top:
        "Hi, are you liking this template? Then try out my new template for mobile Gmail!",
      message_bottom:
        "Click link here >>> https://www.figma.com/community/file/984761507298963796 ",
      images: [
        {
          id:1,
          image: templateImage,
        },
      ],
      date: "June 25, 2018, 3:26PM",
    },
  ];
  return (
    <main>
      <div className="pt-2 flex justify-between px-2">
        <div className="flex gap-4">
          <div className="flex items-center">
            <div className="py-1 px-2  hover:bg-gray-200 rounded transition-all delay-50">
              <input className="cursor-pointer" type="checkbox" />
            </div>
            <button>
              <Image src={dropdownArrow} alt="dropdown" />
            </button>
          </div>
          <button>
            <Image src={refresh} height={14} alt="refresh" />
          </button>
          <button>
            <Image src={menuDots} alt="dropdown" />
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-xs text-gray-500">1-2</span>
          <button>
            <Image src={arrowLeft} alt="arrowLeft" />
          </button>
          <button>
            <Image src={arrowRight} alt="arrowRight" />
          </button>
        </div>
      </div>
      <div className="pt-6  flex justify-evenly">
        <button className="py-4 w-full text-start text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-200 px-4 border border-x-0 border-t-0 border-b-2 hover:border-b-blue-600 transition-all delay-50">
          Primary
        </button>
        <button className="py-4 w-full text-start text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-200 px-4 border border-x-0 border-t-0 border-b-2 hover:border-b-blue-600 transition-all delay-50">
          Promotion
        </button>
        <button className="py-4 w-full text-start text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-200 px-4 border border-x-0 border-t-0 border-b-2 hover:border-b-blue-600 transition-all delay-50">
          Social
        </button>
        <button className="py-4 w-full text-start text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-200 px-4 border border-x-0 border-t-0 border-b-2 hover:border-b-blue-600 transition-all delay-50">
          Updates
        </button>
      </div>
      <div className="">
        <ul>
          {mails.map((mail) => {
            return (
              <Link href={{
               pathname: `/${mail.id}`,
               query:{mail:encodeURIComponent(JSON.stringify(mail))}
              }}
                className="w-full border border-t-0 border-x-0 px-4 py-2 text-gray-700 text-sm hover:bg-gray-200 transition-all delay-50 grid  grid-cols-3 "
                key={mail.id}
              >
                <div className="w-full flex gap-4">
                  <input className="cursor-pointer" type="checkbox" />
                  <button>
                    <Image src={starred} alt="starred" />
                  </button>
                  <span>{mail.username}</span>
                </div>
                <div className="w-full">{mail.subject}</div>
                <div className="text-end">{mail.date}</div>
              </Link>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
