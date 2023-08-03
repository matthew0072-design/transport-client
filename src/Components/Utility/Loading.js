import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    
loading: {
    display: "flex",
    alignItems: "center",
    width: "10rem",
    justifyContent: "center",
},

pulse: {
    display: "inline-block",
    position: "relative",
    height: "3rem",
    width: "3rem",
    backgroundColor: "tomato",
    borderRadius: "50%",
    margin: "0 0.5rem",
    animation: "pulse 3s infinite",
    animationDelay: "(3s / 3)",
},
}));

export default function Loading() {

const classes = useStyles()

    return(
        <div className={classes.loading}>
            <span className={classes.pulse}></span>
        </div>
    )
}