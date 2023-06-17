import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineHome } from "react-icons/ai";
import isEmail from "validator/lib/isEmail";
import axios from "axios";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone, FiAtSign } from "react-icons/fi";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  // FaYoutube,
  // FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";

import "./BlogPage.css";
import { SingleBlog } from "../../components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { blogData } from "../../data/blogData";
import { headerData } from "../../data/headerData";
import { contactsData } from "../../data/contactsData";
import { socialsData } from "../../data/socialsData";

function Dashboard() {
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const filteredArticles = blogData.filter((blog) => {
    const content = blog.title + blog.description + blog.date;
    return content.toLowerCase().includes(search.toLowerCase());
  });

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
        fontFamily: 'var(--primaryFont)',
        fontWeight: 500,
        transition: 'border 0.2s ease-in-out',
        '&:focus': {
            border: `4px solid ${theme.primary600}`,
        },
    },
    message: {
        border: `4px solid ${theme.primary80}`,
        backgroundColor: `${theme.secondary}`,
        color: `${theme.tertiary}`,
        fontFamily: 'var(--primaryFont)',
        fontWeight: 500,
        transition: 'border 0.2s ease-in-out',
        '&:focus': {
            border: `4px solid ${theme.primary600}`,
        },
    },
    label: {
        backgroundColor: `${theme.secondary}`,
        color: `${theme.primary}`,
        fontFamily: 'var(--primaryFont)',
        fontWeight: 600,
        fontSize: '0.9rem',
        padding: '0 5px',
        transform: 'translate(25px,50%)',
        display: 'inline-flex',
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
    submitBtn: {
        backgroundColor: theme.primary,
        color: theme.secondary,
        transition: '250ms ease-in-out',
        '&:hover': {
            transform: 'scale(1.08)',
            color: theme.secondary,
            backgroundColor: theme.tertiary,
        },
    },
  }));

  const classes = useStyles();

  return (
    <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        {/* <title>{headerData.name} | Blog</title> */}
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
        {/* <div className="blog--search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Seach blog..." className={classes.search}/>
                </div> */}
        {/* <div className="blogs--container">
                    <Grid className="blog-grid" container direction="row" alignItems="center" justifyContent="center">
                        {filteredArticles.reverse().map(blog => (
                            <SingleBlog 
                                theme={theme}
                                title={blog.title}
                                desc={blog.description}
                                date={blog.date}
                                image={blog.image}
                                url={blog.url}
                                key={blog.id}
                                id={blog.id}
                            />
                        ))}
                    </Grid>
                </div> */}

        <div
          className="header-data"
          id="contacts"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="contacts--container">
            <h1 style={{ color: theme.primary }}>Header</h1>
            <div className="header-body">
              <div className="header-form">
                <form onSubmit={handleContactForm}>
                <Grid container spacing={3}>
                
                  <div className="input-container">
                    <label htmlFor="Name" className={classes.label}>
                      Name
                    </label>
                    <input
                      id="Name"
                      placeholder="Enter name..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="Name"
                      className={`form-input ${classes.input}`}
                      autoComplete="name"
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="Title" className={classes.label}>
                      Title
                    </label>
                    <input
                      id="Title"
                      placeholder="Your title..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      name="Title"
                      className={`form-input ${classes.input}`}
                      autoComplete="title"
                    />
                  </div>
                
                  <div className="input-container">
                    <label htmlFor="Description" className={classes.label}>
                      Description
                    </label>
                    <textarea
                      id="Description"
                      placeholder="Type your description...."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      name="Description"
                      className={`form-message ${classes.message}`}
                    />
                  </div>

                  <div className="submit-btn">
                    <button type="submit" className={classes.submitBtn}>
                      <p>{!success ? "Send" : "Sent"}</p>
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
              <div className="contacts-details"></div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
