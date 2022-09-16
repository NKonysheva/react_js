import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Link, Outlet } from "react-router-dom";

import "../ChatList/style.scss";

import { MessageList } from "../MessageList";

const chats = [
  { id: "chat1", name: "Chat1" },
  { id: "chat2", name: "Chat2" },
  { id: "chat3", name: "Chat3" },
];
// const [chatList, setChatList] = useState




export const ChatList = () => (
  <>
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {chats.map((chat) => (
        <ListItem className="chat_li" key={chat.id} alignItems="flex-start">
          <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          <button className="chat__button">
            &times;
          </button>
        </ListItem>
      ))}
    </List>
    <Outlet />
  </>
);
