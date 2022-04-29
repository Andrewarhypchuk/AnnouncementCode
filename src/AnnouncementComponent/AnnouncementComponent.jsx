 import React from 'react';
 import { Link} from "react-router-dom";
 import classes from "./AnnouncementComponent.module.css";


const Announcement = ()=> {

    return (
        <div className={classes.container}>
            <h2>You can add Announcement to Announcement List!</h2>
            <Link className={classes.hyper} to="/create">Add</Link>
        </div>

    )

}

export default Announcement;
