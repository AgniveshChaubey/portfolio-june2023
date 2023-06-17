import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { Snackbar, IconButton, SnackbarContent } from "@material-ui/core";

const UpdateExperienceData = ({
  theme,
  handleContactForm,
  classes,
  success,
  open,
  handleClose,
  errMsg,
}) => {
  const [id, setId] = useState("");
  const [company, setCompany] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  return (
    <div
      className="about-data"
      id="contacts"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Update Experience</h1>
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
                  <label htmlFor="company" className={classes.label}>
                    Company Name
                  </label>
                  <input
                    id="company"
                    placeholder="Enter company name..."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    name="company"
                    className={`form-input ${classes.input}`}
                    autoComplete="company"
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="jobtitle" className={classes.label}>
                    Job Title
                  </label>
                  <input
                    id="jobtitle"
                    placeholder="Enter  job title..."
                    value={jobtitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    type="text"
                    name="jobtitle"
                    className={`form-input ${classes.input}`}
                    autoComplete="jobtitle"
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
                    id="endtyear"
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

export default UpdateExperienceData;
