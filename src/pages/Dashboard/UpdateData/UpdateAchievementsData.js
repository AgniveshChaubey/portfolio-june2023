import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";

const UpdateAchievementsData = ({
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
  const [details, setdetails] = useState("");
  const [date, setDate] = useState("");
  const [field, setField] = useState("");
  const [image, setImage] = useState("");

  return (
    <div
      className="about-data"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Update Achievements</h1>
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
                  <label htmlFor="details" className={classes.label}>
                   Details
                  </label>
                  <input
                    id="details"
                    placeholder="Enter details...."
                    value={details}
                    onChange={(e) => setdetails(e.target.value)}
                    type="text"
                    name="details"
                    className={`form-input ${classes.input}`}
                    autoComplete="details"
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
                  <label htmlFor="field" className={classes.label}>
                    Field
                  </label>
                  <input
                    id="field"
                    placeholder="e.g- Web Dev, DevOps, etc."
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    type="text"
                    name="field"
                    className={`form-input ${classes.input}`}
                    autoComplete="field"
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

export default UpdateAchievementsData;
