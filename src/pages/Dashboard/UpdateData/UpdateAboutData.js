import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";

const UpdateAboutData = ({
  theme,
  handleContactForm,
  classes,
  success,
  open,
  handleClose,
  errMsg,
}) => {
  const [title, setTitle] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");

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
          <h1 style={{ color: theme.primary }}>Update About</h1>
          <div className="header-body">
            <div className="header-form">
              <form onSubmit={handleContactForm}>
                <Grid container spacing={3}>
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
                    <label htmlFor="Description1" className={classes.label}>
                      Description 1
                    </label>
                    <textarea
                      id="Description1"
                      placeholder="Type your description...."
                      value={description1}
                      onChange={(e) => setDescription1(e.target.value)}
                      type="text"
                      name="Description1"
                      className={`form-message ${classes.message}`}
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="Description2" className={classes.label}>
                      Description 2
                    </label>
                    <textarea
                      id="Description2"
                      placeholder="Type your description...."
                      value={description2}
                      onChange={(e) => setDescription2(e.target.value)}
                      type="text"
                      name="Description2"
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

export default UpdateAboutData;
