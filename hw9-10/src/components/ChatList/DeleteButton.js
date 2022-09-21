import { remove } from "@firebase/database";
import { getChatsRefById } from "../../services/firebase";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from "@mui/material/IconButton";
import { getMessagesRefByChatId } from "../../services/firebase";
// eslint-disable-next-line 
import { useEffect, useCallback, useState } from "react";
// eslint-disable-next-line
import { useDispatch } from "react-redux";

export const DeleteButton = ({ id }) => {
  // const dispatch = useDispatch();
  const handleDeleteChat = () => {
    remove(getChatsRefById(id));
    remove(getMessagesRefByChatId(id));
  };

  return (
    <div>
      <IconButton
        onClick={handleDeleteChat}
        aria-label="delete"
        className="deleteButton"
      >
        <DeleteOutlineIcon fontSize="small" />
      </IconButton>
    </div>
  );
};
