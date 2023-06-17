import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";

const UpdateEducationData = ({
  theme,
  handleContactForm,
  classes,
  success,
  open,
  handleClose,
  errMsg,
}) => {
  const [id, setId] = useState("");
  const [institution, setInstitution] = useState("");
  const [course, setCourse] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  return (
    <div
      className="about-data"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Update Education</h1>
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
                  <label htmlFor="institution" className={classes.label}>
                    Institution
                  </label>
                  <input
                    id="institution"
                    placeholder="Enter institution name..."
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    type="text"
                    name="institution"
                    className={`form-input ${classes.input}`}
                    autoComplete="institution"
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="course" className={classes.label}>
                    Course Name
                  </label>
                  <input
                    id="course"
                    placeholder="Enter course name..."
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    type="text"
                    name="course"
                    className={`form-input ${classes.input}`}
                    autoComplete="course"
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="startyear" className={classes.label}>
                    Start Year
                  </label>
                  <input
                    id="startyear"
                    placeholder="Year course started..."
                    value={startYear}
                    onChange={(e) => setStartYear(e.target.value)}
                    type="text"
                    name="startyear"
                    className={`form-input ${classes.input}`}
                    autoComplete="startyear"
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="endyear" className={classes.label}>
                    End Year
                  </label>
                  <input
                    id="startyear"
                    placeholder="Year course ended..."
                    value={endYear}
                    onChange={(e) => setEndYear(e.target.value)}
                    type="text"
                    name="endyear"
                    className={`form-input ${classes.input}`}
                    autoComplete="endyear"
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

export default UpdateEducationData;
