import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@mui/material/CardActions";
import bell from "../images/belll.svg";
import { Link, useHistory } from "react-router-dom";
import {
  selectNoticeEntities,
  fetchNotices,
} from "../../redux/slices/noticesSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../redux/slices/employeeSlice";
import { fetchPayrolls } from "../../redux/slices/payrollSlice";

const images = process.env.PUBLIC_URL + "/img/bellbg1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  text: {
    padding: theme.spacing(2),
  },

  images: {
    width: "75%",

    position: "relative",
    top: "-120px",
    left: "-10px",
    "@media (max-width:960px)": {
      top: "-570px",
      left: "86px",
      width: "45%",
    },
  },

  imagesb: {
    width: "12rem",
    marginLeft: "25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  events: {
    fontSize: "3rem",
    position: "relative",
    top: "-50px",
    left: "670px",
    "@media (max-width:960px)": {
      left: "146px",
      width: "45%",
    },
  },
  card: {
    width: "100%",
    height: "auto",
    padding: theme.spacing(2),
  },
  cardss: {
    marginLeft: "20px",
    marginRight: "20px",

    borderRadius: "150px",

    fontSize: "1.5rem",
  },
  upper: {
    marginTop: "500px",
  },
  buttonone: {
    paddingLeft: "15px",
    paddingRight: "15px",
    background: "#FFE061",
    paddingTop: "8px",
    border: "2px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10px",
    borderRadius: "5px",
    marginLeft: "115px",

    marginBottom: "7px",
    color: "black",
    textTransform: "none",
    width: "40%",
    fontSize: "18px",
  },
  buttontwo: {
    position: "relative",
    left: "68rem",
    border: "none",
    paddingLeft: "15px",
    paddingRight: "15px",
    background: "#FFE061",
    paddingTop: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10px",
    borderRadius: "5px",
    marginBottom: "7px",
    color: "black",
    textTransform: "none",
    width: "100%",
    fontSize: "18px",
  },

  links: {
    textDecoration: "none",
    width: "100%",
    fontSize: "13px !important",
    fontWeight: "bold",
  },
  textt: {
    color: "black",
    fontSize: "4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "900",
    "@media (max-width:960px)": {
      fontSize: "2rem",
    },
  },
  texth: {
    color: "red",
    fontSize: "28px",
    marginLeft: "55px",
    textAlign: "center",
    "@media (max-width:960px)": {
      fontSize: "20px",
      marginLeft: "2px",
      marginTop: "80px",
    },
  },
  textss: {
    fontSize: "20px",
    lineHeight: "27px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "15px",
    color: "black",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const NoticeBoard = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotices());
    dispatch(fetchEmployees());
    dispatch(fetchPayrolls())
  }, []);

  const handleSubmit = (noticeId) => (event) => {
    event.preventDefault();
    history.push({ pathname: `/NoticeDetail/${noticeId}` });
  };

  const notices = useSelector(selectNoticeEntities);
  const loadingStatus = useSelector((state) => state.notices.status);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <h3 className={classes.texth} style={{}}>
              Ambassader Human resource system
            </h3>
            <div className={classes.textt}>
              Check Out <br></br> list of <br></br> Announcements
            </div>
            <div className={classes.textss}>
              <p>
                This HR system will handle Announcements, employments
                information,<br></br> voting system for elections payment status
                for the employess. It will <br></br> simplify the system and
                make it easy to handle the human resource
              </p>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <img src={images} alt="Image" className={classes.images} />
          </Grid>
        </Grid>

        <div className={classes.events}>Events</div>
        <Grid>
          <Link className={classes.links} to="/AddNotice">
            <button className={classes.buttontwo}> Add Notice</button>
          </Link>
        </Grid>

        <Grid container spacing={5} className={classes.cardss}>
          {loadingStatus === "loading" ? (
            <div>
              <div className="loader" />
            </div>
          ) : (
            Object.values(notices).map((notice) => (
              <Grid item lg={4} xs={12} key={notice.id}>
                <Card sx={{ maxWidth: 300 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    image={bell}
                    className={classes.imagesb}
                  />

                  <CardContent>
                    <Typography
                      style={{
                        color: "black",
                        fontSize: "20px",
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: "900",
                      }}
                    >
                      {notice.title}
                    </Typography>

                    <Typography
                      style={{
                        color: "black",
                        fontSize: "18px",
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                        lineHeight: "30px",
                        padding: "15px",
                      }}
                    >
                      {notice.subject}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link className={classes.links}>
                      <button
                        className={classes.buttonone}
                        onClick={handleSubmit(notice._id)}
                      >
                        Read More
                      </button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </div>
  );
};
export default NoticeBoard;
