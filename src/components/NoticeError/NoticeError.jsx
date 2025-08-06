import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { selectError } from "../../redux/contactSlice";

export default function NoticeError() {
  const error = useSelector(selectError);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {error}
      </Alert>
    </Snackbar>
  );
}
