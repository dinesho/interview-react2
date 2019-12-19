import React, {useContext} from 'react';
import {ActivityContext} from "../ActivityContext";
import {getDateTime, getDuration} from "../Util/Util";

function ActiveList() {

    const [activities, setActivities] = useContext(ActivityContext);

    return (
        <div className="active-list">

            <h4>Activities In Progress</h4>

            {activities.filter(activity => activity.end < 0).map(activity => (
                <div className="activity" key={activity.start}>
                    <p>{activity.description}</p>
                    <p className="time">Time Passed (HH:MM:SS) : {getDuration(activity.start)}</p>
                    <button className="success">End Activity</button>
                    <span className="clear"></span>
                </div>
            ))}

        </div>
    );
}

export default ActiveList;
