import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";

const UpdateHeader = ({
  theme,
  handleContactForm,
  classes,
  success,
  open,
  handleClose,
  errMsg,
}) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");

  return (
    <div
      className="about-data"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <Link to="/dashboard">
          <ArrowBackIcon className={classes.back} />
        </Link>
        <div className="contacts--container">
          <h1 style={{ color: theme.primary }}>Update Header</h1>
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
                    <label htmlFor="ResumeUrl" className={classes.label}>
                      Resume Url
                    </label>
                    <textarea
                      id="ResumeUrl"
                      placeholder="Enter resume url..."
                      value={resumeUrl}
                      onChange={(e) => setResumeUrl(e.target.value)}
                      type="text"
                      name="ResumeUrl"
                      className={`form-input ${classes.input}`}
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
                      <p>{!success ? "Update" : "Updated"}</p>
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
};

export default UpdateHeader;
