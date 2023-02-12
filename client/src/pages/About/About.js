import {Typography, withStyles,} from "@material-ui/core";
import React, {Component} from "react";
import FeedBack from "./FeedBack";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ContactCard from "./ContactCard";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
const useStyles = (theme) => ({
    root: {
        width: 'auto',
        display: "grid",
        margin: "2em",
        gridTemplateColumns: "3fr 2fr",
        gridColumnGap: "70px",
    },

    paragraphStyling: {
        padding: '0 3%',
        lineHeight: '1.5',
        textTransform: "full-width",
        fontSize: '20px',
        textIndent: '50px',
        textAlign: 'justify',
        letterSpacing: '2px',
    },


    Developers: {
        display: "flex",
        margin: "3em",
        gridTemplateColumns: "13fr 13fr",
        gridColumnGap: "280px",
    },
    large: {
        width: '100px',
        height: "100px",
    },
    developer: {
        marginLeft: "-10px",
        marginRight: '-10px'
    },
    footer1:{
        display:'flex',
        flexDirection:'row',
        marginTop:'40px',
        width:'100%',

    },

    contactInfo:{
        marginTop:'-30px',
        maxWidth: '60%',
        padding: '60px'
    }
    ,

    card1:{
        marginTop:'16px',
        marginRight:'30px',
        marginLeft:'40px',
        maxWidth:'50%'
    },

    contact:{
        marginTop:'20px',
        marginBottom:'30px'
    }

});

class About extends Component {
    onSubmit = (email, feedback) => {
        console.log(email, feedback);
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Card className={classes.root}>
                    <div>
                        <div
                            className="aboutContent"
                            style={{textAlign: "center", margin: "2em "}}>
                            <Typography variant="h4">Ambassador</Typography>

                                <Typography>
                                    <p className={classes.paragraphStyling}>
                                    Ambassador human resource system is a solution which is used to manage human resource system for 
                                    Ambassador's human resouces. It handles voting system, Dashboard and also payment status. The system 
                                    is built in to simplify and make the resource management system effecient and easy to manage.
                                    </p>
                                </Typography>

                        </div>
                    </div>
                    <div className="feedback">
                        <FeedBack onSubmit={this.onSubmit}/>
                    </div>
                </Card>
                

        </div>
        );
    }
}

export default withStyles(useStyles, {withTheme: true})(About);
