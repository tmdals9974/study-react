import { PlusOutlined } from "@ant-design/icons";
import { Input, message, Tag } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../state";

export default function TagList() {
  const user = useSelector((state) => state.user.user);
  const tags = user?.tag ? user.tag.split(",").map((item) => item.trim()) : [];
  const dispatch = useDispatch();

  const [isAdd, setIsAdd] = useState(false);
  const [tempTag, setTempTag] = useState("");
  function onAdd() {
    setIsAdd(true);
    setTempTag("");
  }

  function onSave() {
    if (!tempTag) {
      setIsAdd(false);
    } else if (tags.includes(tempTag)) {
      message.error("이미 같은 태그가 있습니다.");
    } else {
      const newTag = user?.tag ? `${user.tag}, ${tempTag}` : tempTag;
      dispatch(actions.fetchUpdateUser({ user, key: "tag", value: newTag, fetchKey: "tag" }));
      setIsAdd(false);
    }
  }

  function onDelete(tag) {
    const newTag = tags.filter((item) => item !== tag).join(", ");
    dispatch(actions.fetchUpdateUser({ user, key: "tag", value: newTag, fetchKey: "tag" }));
  }

  return (
    <>
      {tags.map((item) => (
        <Tag key={item} closable onClose={() => onDelete(item)}>
          {item}
        </Tag>
      ))}
      {!isAdd && (
        <Tag onClick={onAdd}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
      {isAdd && (
        <Input
          autoFocus
          type="text"
          size="small"
          style={{ width: 100 }}
          value={tempTag}
          onChange={(e) => setTempTag(e.target.value)}
          onBlur={() => setIsAdd(false)}
          onPressEnter={onSave}
        />
      )}
    </>
  );
}
