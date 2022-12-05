import React, { useContext, useEffect } from "react";
import type { MenuProps } from "antd";
import Content from "../../Content";
import { HomeOutlined, DashboardOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../../context/BoardContextProvider";

const items: MenuProps["items"] = [
  { label: "Home", key: "/", icon: <HomeOutlined /> },
  { label: "Boards", key: "boards", icon: <DashboardOutlined /> },
];

const HomeMenu: React.FC = () => {
  const { boardMenuShow, setBoardMenuShow } = useContext(BoardContext);

  const navigate = useNavigate();
  const onClickHandler = (e: any) => {
    navigate(e.key);
  };

  return (
    <>
      <div className="flex">
        <div>
          {/* <Menu
            onClick={(e: any) => onClickHandler(e)}
            style={{ width: 200 }}
            mode="inline"
            items={items}
          /> */}
        </div>
        <div>
          <Content />
        </div>
      </div>
    </>
  );
};

export default HomeMenu;
