import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";

const UpdateProjectsData = ({
  theme,
  handleContactForm,
  classes,
  success,
  open,
  handleClose,
  errMsg,
}) => {
  const [id, setId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [tags, setTags] = useState("");
  const [code, setCode] = useState("");
  const [demo, setDemo] = useState("");
  const [image, setImage] = useState("");

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
          <h1 style={{ color: theme.primary }}>Update Projects</h1>
          <div className="header-body">
            <div className="header-form">
              <form onSubmit={handleContactForm}>
                <Grid container spacing={3}>
                  <div className="input-container">
                    <label htmlFor="ID" className={classes.label}>
                      ID
                    </label>
                    <input
                      id="ID"
                      placeholder="Enter id..."
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      type="text"
                      name="ID"
                      className={`form-input ${classes.input}`}
                      autoComplete="ID"
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="projectName" className={classes.label}>
                      Project Name
                    </label>
                    <input
                      id="projectName"
                      placeholder="Enter project name..."
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      type="text"
                      name="projectName"
                      className={`form-input ${classes.input}`}
                      autoComplete="projectName"
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="projectDesc" className={classes.label}>
                      Project Description
                    </label>
                    <input
                      id="projectDesc"
                      placeholder="Enter project Desc..."
                      value={projectDesc}
                      onChange={(e) => setProjectDesc(e.target.value)}
                      type="text"
                      name="projectDesc"
                      className={`form-input ${classes.input}`}
                      autoComplete="projectDesc"
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="tags" className={classes.label}>
                      Tags (comma seperated)
                    </label>
                    <input
                      id="tags"
                      placeholder="e.g- react, bootstrap, git, etc."
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      type="text"
                      name="tags"
                      className={`form-input ${classes.input}`}
                      autoComplete="tags"
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="code" className={classes.label}>
                      Code Url
                    </label>
                    <input
                      id="code"
                      placeholder="Enter code url..."
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      type="text"
                      name="code"
                      className={`form-input ${classes.input}`}
                      autoComplete="code"
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="demo" className={classes.label}>
                      Demo Url
                    </label>
                    <input
                      id="demo"
                      placeholder="Enter live project url..."
                      value={demo}
                      onChange={(e) => setDemo(e.target.value)}
                      type="text"
                      name="demo"
                      className={`form-input ${classes.input}`}
                      autoComplete="demo"
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="image" className={classes.label}>
                      Image Url
                    </label>
                    <input
                      id="image"
                      placeholder="Enter image url..."
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      type="text"
                      name="image"
                      className={`form-input ${classes.input}`}
                      autoComplete="image"
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

export default UpdateProjectsData;
