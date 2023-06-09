import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineHome } from "react-icons/ai";
import isEmail from "validator/lib/isEmail";
import axios from "axios";

import "./Dashboard.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { contactsData } from "../../data/contactsData"; 
import UpdateHeader from "./UpdateData/UpdateHeaderData";
import UpdateAboutData from "./UpdateData/UpdateAboutData";
import UpdateEducationData from "./UpdateData/UpdateEducationData";
import UpdateExperienceData from "./UpdateData/UpdateExperienceData";
import UpdateProjectsData from "./UpdateData/UpdateProjectsData";
import UpdateAchievementsData from "./UpdateData/UpdateAchievementsData";
import UpdateBlogData from "./UpdateData/UpdateBlogData";

function Dashboard() {
  const { theme } = useContext(ThemeContext);

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

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && title && description) {
      if (isEmail(title)) {
        const responseData = {
          name: name,
          title: title,
          description: description,
        };

        axios.post(contactsData.sheetAPI, responseData).then((res) => {
          console.log("success");
          setSuccess(true);
          setErrMsg("");

          setName("");
          setTitle("");
          setDescription("");
          setOpen(false);
        });
      } else {
        setErrMsg("Invalid email");
        setOpen(true);
      }
    } else {
      setErrMsg("Enter all the fields");
      setOpen(true);
    }
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
    message: {
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
    search: {
      color: theme.tertiary,
      width: "40%",
      height: "2.75rem",
      outline: "none",
      border: "none",
      borderRadius: "20px",
      padding: "0.95rem 1rem",
      fontFamily: "'Noto Sans TC', sans-serif",
      fontWeight: 500,
      fontSize: "0.9rem",
      backgroundColor: theme.secondary,
      boxShadow:
        theme.type === "dark"
          ? "inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060"
          : "inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030",
      "&::placeholder": {
        color: theme.tertiary80,
      },
      [t.breakpoints.down("sm")]: {
        width: "350px",
      },
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
    back: {
      color: theme.primary,
      position: "relative",
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

  const buttons = [
    "Header",
    "About",
    "Education",
    "Experience",
    "Projects",
    "Achievements",
    "Blogs",
  ];

  const classes = useStyles();

  return (
    <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>Dashboard | {headerData.name}</title>
      </Helmet>
      <div
        className="blogPage--header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>Dashboard</h1>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="btn--container">
              <Grid
                className="blog-grid"
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                style={{ paddingTop: "10vh", paddingLeft: "10vw" }}
              >
                {buttons.map((button, index) => (
                  <Grid item xs={4} sm={4} md={3} key={index}>
                    <div className="submit-btn">
                      <Link to={`update-${button.toLowerCase()}`}>
                        <button type="submit" className={classes.submitBtn}>
                          <p>{button}</p>
                        </button>
                      </Link>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          }
        />

        <Route
          path="/update-header"
          element={
            <UpdateHeader
              theme={theme}
              handleContactForm={handleContactForm}
              classes={classes}
              success={success}
              open={open}
              handleClose={handleClose}
              errMsg={errMsg}
            />
          }
        />

        <Route
          path="/update-about"
          element={
            <UpdateAboutData
              theme={theme}
              handleContactForm={handleContactForm}
              classes={classes}
              success={success}
              open={open}
              handleClose={handleClose}
              errMsg={errMsg}
            />
          }
        />

        <Route
          path="/update-education"
          element={
            <UpdateEducationData
              theme={theme}
              handleContactForm={handleContactForm}
              classes={classes}
              success={success}
              open={open}
              handleClose={handleClose}
              errMsg={errMsg}
            />
          }
        />

        <Route
          path="/update-experience"
          element={
            <UpdateExperienceData
              theme={theme}
              handleContactForm={handleContactForm}
              classes={classes}
              success={success}
              open={open}
              handleClose={handleClose}
              errMsg={errMsg}
            />
          }
        />

        <Route
          path="/update-projects"
          element={
            <UpdateProjectsData
              theme={theme}
              handleContactForm={handleContactForm}
              classes={classes}
              success={success}
              open={open}
              handleClose={handleClose}
              errMsg={errMsg}
            />
          }
        />

        <Route
          path="/update-achievements"
          element={
            <UpdateAchievementsData
              theme={theme}
              handleContactForm={handleContactForm}
              classes={classes}
              success={success}
              open={open}
              handleClose={handleClose}
              errMsg={errMsg}
            />
          }
        />

        <Route
          path="/update-blogs"
          element={
            <UpdateBlogData
              theme={theme}
              handleContactForm={handleContactForm}
              classes={classes}
              success={success}
              open={open}
              handleClose={handleClose}
              errMsg={errMsg}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Dashboard;
