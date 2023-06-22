import React from "react";
import ItemOFNavigation from "./ItemOfNavigation";
import homeImg from "../../images/home.png";
import homeImgBlue from "../../images/homeBlue.png";
import audienceImg from "../../images/audience.png";
import audienceImgBlue from "../../images/audienceBlue.png";
import chatImg from "../../images/chatBubble.png";
import chatImgBlue from "../../images/chatBubbleBlue.png";
import contractImg from "../../images/contract.png";
import contractImgBlue from "../../images/contractBlue.png";
import scheduleImg from "../../images/schedule.png";
import scheduleImgBlue from "../../images/scheduleBlue.png";
import userImg from "../../images/user.png";
import userImgBlue from "../../images/userBlue.png";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ItemOFNavigation
        srcImg={homeImg}
        srcImgActive={homeImgBlue}
        title="Главная"
        href="/"
      />
      <ItemOFNavigation
        srcImg={audienceImg}
        srcImgActive={audienceImgBlue}
        title="Аудитории"
        href="/audiences"
      />
      <ItemOFNavigation
        srcImg={scheduleImg}
        srcImgActive={scheduleImgBlue}
        title="Расписания"
        href="/schedules"
      />
      <ItemOFNavigation
        srcImg={chatImg}
        srcImgActive={chatImgBlue}
        title="Поддержка"
        href="/support"
      />
      <ItemOFNavigation
        srcImg={contractImg}
        srcImgActive={contractImgBlue}
        title="Заявки"
        href="/contracts"
      />
      <ItemOFNavigation
        srcImg={userImg}
        srcImgActive={userImgBlue}
        title="Профиль"
        href="/profile"
      />
    </nav>
  );
}
