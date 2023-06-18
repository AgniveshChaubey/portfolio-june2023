import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import CloseIcon from "@material-ui/icons/Close";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import axios from "axios";

import "./Login.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { contactsData } from "../../data/contactsData";

function Login() {
  const { theme, isLoggedIn, handleIsLoggedIn } = useContext(ThemeContext);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const useStyles = makeStyles((t) => ({
    input: {
      border: `4px solid ${theme.primary80}`,
      backgroundColor: `${theme.secondary}`,
      color: `${theme.tertiary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 500,
      transition: "border 0.2s ease-in-out",
      "&:focus": {
        border: `4px solid ${theme.primary600}`,
      },
    },
    label: {
      backgroundColor: `${theme.secondary}`,
      color: `${theme.primary}`,
      fontFamily: "var(--primaryFont)",
      fontWeight: 600,
      fontSize: "0.9rem",
      padding: "0 5px",
      transform: "translate(25px,50%)",
      display: "inline-flex",
    },
    home: {
      color: theme.secondary,
      position: "absolute",
      top: 25,
      left: 25,
      padding: "7px",
      borderRadius: "50%",
      boxSizing: "content-box",
      fontSize: "2rem",
      cursor: "pointer",
      boxShadow:
        theme.type === "dark"
          ? "3px 3px 6px #ffffff40, -3px -3px 6px #00000050"
          : "3px 3px 6px #ffffff40, -3px -3px 6px #00000050",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        color: theme.tertiary,
        transform: "scale(1.1)",
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
      },
    },
    submitBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      transition: "250ms ease-in-out",
      "&:hover": {
        transform: "scale(1.08)",
        color: theme.secondary,
        backgroundColor: theme.tertiary,
      },
    },
  }));

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 201) {
          handleIsLoggedIn(true);
        } else {
          handleIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.log("some error occured!", error);
      });
  };

  const classes = useStyles();

  return (
    <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div
        className="blogPage--header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>Login</h1>
      </div>
      <div
        className="contacts-body"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid>
            <div className="input-container">
              <label htmlFor="username" className={classes.label}>
                Username:
              </label>
              <input
                required
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className={`form-input ${classes.input}`}
              />
            </div>
            <div>
              <label htmlFor="password" className={classes.label}>
                Password:
              </label>
              <input
                required
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className={`form-input ${classes.input}`}
              />
            </div>
            {isLoggedIn ? (
              <div className="submit-btn">
                <Link to="/dashboard">
                  <button type="submit" className={classes.submitBtn}>
                    <p>Go to dashboard</p>
                    <div className="submit-icon">
                      <AiOutlineSend
                        className="send-icon"
                        style={{
                          animation: !success
                            ? "initial"
                            : "fly 0.8s linear both",
                          position: success ? "absolute" : "initial",
                        }}
                      />
                      <AiOutlineCheckCircle
                        className="success-icon"
                        style={{
                          display: !success ? "none" : "inline-flex",
                          opacity: !success ? "0" : "1",
                        }}
                      />
                    </div>
                  </button>
                </Link>
              </div>
            ) : (
              <div className="submit-btn">
                <button type="submit" className={classes.submitBtn}>
                  <p>Login</p>
                  <div className="submit-icon">
                    <AiOutlineSend
                      className="send-icon"
                      style={{
                        animation: !success
                          ? "initial"
                          : "fly 0.8s linear both",
                        position: success ? "absolute" : "initial",
                      }}
                    />
                    <AiOutlineCheckCircle
                      className="success-icon"
                      style={{
                        display: !success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                  </div>
                </button>
              </div>
            )}
          </Grid>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <SnackbarContent
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
            style={{
              backgroundColor: theme.primary,
              color: theme.secondary,
              fontFamily: "var(--primaryFont)",
            }}
            message={errMsg}
          />
        </Snackbar>
      </div>
    </div>
  );
}

export default Login;
