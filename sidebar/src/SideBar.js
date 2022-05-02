import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPenToSquare,
  faUserPlus,
  faCalendarDays,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import "./SideBar.css";

function SideBarToggle(props) {
  return (
    <a
      id="SideBarToggle"
      href="/open side bar"
      onClick={(event) => {
        event.preventDefault();
        props.onChange_sidebarState();
      }}
    >
      <FontAwesomeIcon icon={faBars} />
    </a>
  );
}

function DivisionLine() {
  return <hr class="DivisionLine" />;
}

function ProfileMenu(props) {
  return (
    <div id="ProfileMenu">
      <img id="ProfileMenuImg" src={props.image} alt="" />
      <p id="ProfileMenuText">
        <p id="ProfileMenuName">{props.name}</p>
        <p id="ProfileMenuCode">코드: {props.code}</p>
      </p>
      <p id="ProfileMenuIcon">
        <Menu icon={faPenToSquare} link="/profile"></Menu>
      </p>
    </div>
  );
}

function Menu(props) {
  return (
    <a class="Menu" href={props.link}>
      <p class="MenuIcon">
        <FontAwesomeIcon icon={props.icon} />
      </p>
      <p class="MenuText">{props.text}</p>
    </a>
  );
}

function Menus(props) {
  const menuList = props.menuList;
  const html = [];

  for (let i = 0; i < menuList.length; i++) {
    html.push(
      <Menu
        icon={menuList[i].icon}
        text={menuList[i].text}
        link={menuList[i].link}
      ></Menu>
    );
    html.push(<DivisionLine></DivisionLine>);
  }

  return <div id="Menus">{html}</div>;
}

function IntroMenu() {
  return (
    <div id="IntroMenu">
      <p id="IntroMenuText">
        소프트웨어 마에스트로 13기 미니 프로젝트
        <br />팀 12 - 권순현, 김XX, 이OO, 전XX, 황OO
      </p>
    </div>
  );
}

function LogoutMenu() {
  return (
    <div id="LogoutMenu">
      <Menu icon={faRightFromBracket} text="로그아웃" link="/#"></Menu>
    </div>
  );
}

function OpenedSideBar(props) {
  const user = { image: "", name: "권순현", code: 123456};

  const menuList = [
    { icon: faUserPlus, text: "친구 추가 요청", link: "/#" },
    { icon: faCalendarDays, text: "날짜별 친구 보기", link: "/#" },
    { icon: faGear, text: "설정", link: "/#" },
  ];

  return (
    <div id="OpenedSideBar">
      <SideBarToggle
        onChange_sidebarState={() => {
          props.onChange_sidebarState();
        }}
      ></SideBarToggle>
      <DivisionLine></DivisionLine>
      <ProfileMenu
        image={user.code}
        name={user.name}
        code={user.code}
      ></ProfileMenu>
      <DivisionLine></DivisionLine>
      <Menus menuList={menuList}></Menus>
      <IntroMenu></IntroMenu>
      <DivisionLine></DivisionLine>
      <LogoutMenu></LogoutMenu>
    </div>
  );
}

function ClosedSideBar(props) {
  return (
    <div id="ClosedSideBar">
      <SideBarToggle
        onChange_sidebarState={() => {
          props.onChange_sidebarState();
        }}
      ></SideBarToggle>
    </div>
  );
}

function Sidebar() {
  const [sidebarState, set_sidebarState] = useState("off");

  if (sidebarState === "off") {
    return (
      <ClosedSideBar
        onChange_sidebarState={() => {
          set_sidebarState("on");
        }}
      ></ClosedSideBar>
    );
  } else {
    return (
      <OpenedSideBar
        onChange_sidebarState={() => {
          set_sidebarState("off");
        }}
      ></OpenedSideBar>
    );
  }
}

export default Sidebar;
