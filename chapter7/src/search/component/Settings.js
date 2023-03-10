import { SettingFilled } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd";
import React from "react";

/**
 * 
 * @param {object} param
 * @param {() => void} param.logout
 */
export default function Search({ logout }) {
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={logout}>๋ก๊ทธ์์</Menu.Item>
        </Menu>
      }
      trigger={["click"]}
      placement="bottomRight"
    >
      <Button shape="circle" icon={<SettingFilled />} />
    </Dropdown>
  );
}
