import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  List,
  ListItem,
  withStyles,
  makeStyles,
} from "@material-ui/core/index";
import { Redirect, Link } from "react-router-dom";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import { compose } from "recompose";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    maxHeight: 80,
    paddingRight: 10,
    paddingLeft: 20,
    boxShadow: "opx 6px 10px rgba(0,0,0,0.15)",
    "&ul": {
      padding: "0px !important",
      margin: "0px !important",
    },
    "& li": {
      padding: 0,
      margin: 0,
      minWidth: 100,
      "& a": {
        width: "100%",
        textTransform: "none",
        borderRadius: "5px",
        lineHeight: "26px",
        "& span": {
          width: "100%",
        },
      },
    },

    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 10,
      maxHeight: "1000px",
      "& li": {
        marginBottom: "5px",
        backgroundColor: "rgba(185,185,185,0.13)",
        "& a": {
          width: "100%",
          padding: "5px 20px ",
          marginRight: "10px",
          textTransform: "none",
          borderRadius: "5px",
          lineHeight: "26px",
          "& span": {
            justifyContent: "left",
          },
        },
      },
    },
  },
  links: {
    textDecoration: "none",
    width:'100%',
    fontSize: "13px !important",
    fontWeight: "bold",
  },
  searchBar: {
    height: "40px",
    marginTop: "10px",
  },
  listContainer: {
    display: "flex",
    justifyContent: "space-between",
    width:'35rem'
  },
  listContainerMobile: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  LogoTextNavbar: {
    display: "block",
    textDecoration: "none",
    color: "inherit",
  },
}));

function NavTabs(props) {
  const [isHumActive, setHumActive] = useState(false);

  const classes = useStyles();

 
  const onButtonClick = () => {
    setHumActive(!isHumActive);
  };
  const isAuthenticated = () => {
    
      return (
        <React.Fragment>
          {" "}
          <ListItem>
            <Link to="Noticeboard" className={classes.links}>
              <Button className={classes.links}>Notice Board</Button>{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Link to="vote" className={classes.links}>
              <Button className={classes.links}>Vote</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="EvaluationForm" className={classes.links}>
              <Button className={classes.links}>Evaluation</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="Employees" className={classes.links}>
              <Button className={classes.links}>Employees</Button>
            </Link>
          </ListItem>
        </React.Fragment>
      );
    
  };

  const navOptions = () => {
    if (isWidthDown("sm", props.width)) {
      if (isHumActive) {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "stretch",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "30px", margin: 0, color: "black" }}>
                  <Link to={"/"} className={classes.LogoTextNavbar}>
                    <span style={{ color: "#ee662d" }}>A</span>mbassador
                  </Link>
                </h3>
              </div>
              <div className={classes.hamburgerIcon}>
                <button onClick={onButtonClick}>
                  <i
                    className="fas fa-bars fa-2x"
                    style={{ color: "black" }}
                  ></i>
                </button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <List className={classes.listContainerMobile}>
                {isAuthenticated()}
              </List>
            </div>
          </div>
        );
      } else {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex" }}>
         
              <h3 style={{ fontSize: "30px", margin: 0, color: "black" }}>
                <Link to={"/"} className={classes.LogoTextNavbar}>
                  <span style={{ color: "#ee662d" }}>A</span>mbassador
                </Link>
              </h3>
            </div>
            {/*<Grid item sm={4} >
                            <SearchBar className={classes.searchBar}/>
                        </Grid>*/}
            <div>
              <div className={classes.hamburgerIcon}>
                <button onClick={onButtonClick}>
                  <i
                    className="fas fa-bars fa-2x"
                    style={{ color: "black" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div style={{ display: "flex" }}>
              
                  
              <h3 style={{ fontSize: "30px", margin: 0, color: "black" }}>
                <Link className={classes.LogoTextNavbar} to={"/"}>
                  <span style={{ color: "#ee662d" }}>A</span>mbassador
                </Link>
              </h3>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <List className={classes.listContainer}>{isAuthenticated()}</List>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <AppBar className={classes.root} position="fixed">
      {navOptions()}
    </AppBar>
  );
}

export default compose(withStyles(useStyles), withWidth())(NavTabs);
