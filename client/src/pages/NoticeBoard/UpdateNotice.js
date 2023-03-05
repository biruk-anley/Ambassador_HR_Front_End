import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import { Link } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { selectNoticeEntities, updateNotice } from "../../redux/slices/noticesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

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
    top: "-40px",
    left: "620px",
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
    position: "relative",
    top: "10px",
    left: "280px",

    width: "90%",
    display: "flex",

    borderRadius: "150px",

    fontSize: "1.5rem",
  },
  upper: {
    marginTop: "500px",
  },
  buttonone: {
    background: "#FFE061",
    paddingTop: "8px",
    border: "1px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10px",
    borderRadius: "5px",
    position: "relative",
    left: "75%",

    marginBottom: "7px",
    color: "black",
    textTransform: "none",
    width: "20%",
    fontSize: "18px",
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

const UpdateNotice = () => {
  const classes = useStyles();
  const notice_id = useParams()["id"]
  const notice = useSelector(selectNoticeEntities)[notice_id]
  const [title, setTitle] = useState(notice.title)
  const [subject, setSubject] = useState(notice.subject)
  const dispatch = useDispatch();
  const history = useHistory();

  const onUpdate = async (e) => {
    await dispatch(updateNotice({
      _id: notice_id,
      title: title,
      subject: subject
    }))
    history.push({ pathname: "/Noticeboard"});
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <div className={classes.events}>Update Notices</div>
        <Grid container spacing={5} className={classes.cardss}>
          <Grid item lg={8} xs={8}>
            <Card sx={{ maxWidth: 300 }}>
              <CardContent></CardContent>
              <CardActions>
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
                  Title
                </Typography>
                <Box
                  sx={{
                    width: 730,
                    maxWidth: "100%",
                    paddingLeft: "58px",
                  }}
                >
                  <TextField
                    fullWidth
                    id="fullWidth"
                    variant="outlined"
                    placeholder= "Enter the title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}

                  />
                </Box>
              </CardActions>

              <CardActions>
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
                  Description
                </Typography>
                <Box
                  sx={{
                    width: 670,
                    maxWidth: "100%",
                  }}
                >
                  <TextField
                    fullWidth
                    id="fullWidth"
                    multiline
                    rows="4"
                    variant="outlined"
                    value={subject}
                    placeholder="Enter some description about the notice."
                    onChange={event => setSubject(event.target.value)}
                  />
                </Box>
              </CardActions>
              <CardActions></CardActions>
              <Link className={classes.links}>
                <button className={classes.buttonone} onClick={onUpdate}>Done</button>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid>
        <div></div>
      </Grid>
    </div>
  );
};
export default UpdateNotice;
