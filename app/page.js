import templateImage from "@/public/images/templateImage.svg";
export default function Home() {
  const mails = [
    {
      username: "Scarlytemplates",
      subject: "Check out my templates",
      mail_id: "randomdesign@gmail.com",
      message_top:
        "Hi, are you liking this template? Then try out my new template for mobile Gmail!",
      message_bottom:
        "Click link here >>> https://www.figma.com/community/file/984761507298963796 ",
      images: [
        {
          image_1: templateImage,
        },
      ],
      date: "June 25, 2018, 3:26PM",
    },
    {
      username: "Fahim Nizamee",
      subject: "Demo templates",
      mail_id: "nizameef@gmail.com",
      message_top:
        "Hi, are you liking this template? Then try out my new template for mobile Gmail!",
      message_bottom:
        "Click link here >>> https://www.figma.com/community/file/984761507298963796 ",
      images: [
        {
          image_1: templateImage,
        },
      ],
      date: "June 25, 2018, 3:26PM",
    },
  ];
  return ( <main>
    <ul>
      <li className="w-full border">
        <input type="checkbox" />
      </li>
    </ul>
  </main>);
}
