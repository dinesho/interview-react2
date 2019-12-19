import React, {useContext} from 'react';
import {ActivityContext} from "../ActivityContext";
import { getDuration} from "../Util/Util";
import { useHistory} from 'react-router-dom';

function ActiveList() {

    const [activities, setActivities] = useContext(ActivityContext);
    const history = useHistory();

    let activitiesInProgress = 0;

    // Traverse through the json object array and update the activity that has marked ended.
    const endActivity = (id) =>{
        let activitiesCopy = activities;

        for(let i=0; i<activitiesCopy.length; i++){
            if(activitiesCopy[i].start === id)
            {
                activitiesCopy[i].end = (new Date()).getTime();
            }
        }

        // Update the activity context and session storage
        setActivities(activities => activitiesCopy );
        sessionStorage.setItem("ACTIVITIES_DB", JSON.stringify(activities));

        // Redirect to activity grid to show completed activities
        history.push("/grid");
    };

    // Counts activities in progress
    for(let i=0; i<activities.length; i++)
    {
        if(activities[i].end === -1)
            activitiesInProgress++;
    }

    return (
        <div className="active-list">

            {/*Show title if there are any active activities*/}
            {activitiesInProgress > 0 ? (<h4>Activities In Progress</h4>) : ('')}

            {/*Loop through activities and print active activities*/}
            {activities.filter(activity => activity.end < 0).map(activity => (
                <div className="activity" key={activity.start}>
                    <p>{activity.description}</p>
                    <p className="time">Time Passed - {getDuration(activity.start) } <span className="small">(HH:MM:SS)</span> </p>
                    <button className="success" onClick={()=>endActivity(activity.start)} > <i className="fas fa-hourglass-end"></i> End Activity</button>
                    <span className="clear"></span>
                </div>
            ))}

        </div>
    );
}

export default ActiveList;
