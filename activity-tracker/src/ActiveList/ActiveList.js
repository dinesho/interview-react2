import React, {useContext} from 'react';
import {ActivityContext} from "../ActivityContext";
import {getDateTime, getDuration} from "../Util/Util";
import {Redirect, useHistory} from 'react-router-dom';

function ActiveList() {

    const [activities, setActivities] = useContext(ActivityContext);
    const history = useHistory();

    const endActivity = (id) =>{
        let activitiesCopy = activities;

        for(let i=0; i<activitiesCopy.length; i++){
            if(activitiesCopy[i].start === id)
            {
                activitiesCopy[i].end = (new Date()).getTime();
            }
        }

        setActivities(activities => activitiesCopy );
        sessionStorage.setItem("ACTIVITIES_DB", JSON.stringify(activities));

        history.push("/grid");
    };

    return (
        <div className="active-list">

            <h4>Activities In Progress</h4>

            {activities.filter(activity => activity.end < 0).map(activity => (
                <div className="activity" key={activity.start}>
                    <p>{activity.description}</p>
                    <p className="time">Time Passed (HH:MM:SS) : {getDuration(activity.start)}</p>
                    <button className="success" onClick={()=>endActivity(activity.start)} >End Activity</button>
                    <span className="clear"></span>
                </div>
            ))}

        </div>
    );
}

export default ActiveList;
