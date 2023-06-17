import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";

const UpdateBlogData = ({
  theme,
  handleContactForm,
  classes,
  success,
  open,
  handleClose,
  errMsg,
}) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  return (
    <div
      className="about-data"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Update Blogs</h1>
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
                  <label htmlFor="title" className={classes.label}>
                    Title
                  </label>
                  <input
                    id="title"
                    placeholder="Enter title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    name="title"
                    className={`form-input ${classes.input}`}
                    autoComplete="title"
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="description" className={classes.label}>
                   Description
                  </label>
                  <input
                    id="description"
                    placeholder="Enter description...."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    name="description"
                    className={`form-input ${classes.input}`}
                    autoComplete="description"
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="date" className={classes.label}>
                    Date
                  </label>
                  <input
                    id="date"
                    placeholder="e.g- Aug 28, 2022"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="text"
                    name="date"
                    className={`form-input ${classes.input}`}
                    autoComplete="date"
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
  );
};

export default UpdateBlogData;
