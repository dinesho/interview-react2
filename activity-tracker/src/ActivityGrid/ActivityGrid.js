import React, {useContext} from 'react';
import {ActivityContext} from "../ActivityContext";
import {getDateTime, getDuration} from "../Util/Util";

function ActivityGrid() {

    const [activities, setActivities] = useContext(ActivityContext);

    return (
        <div className="activity-grid">
            <h4>Activity Grid</h4>
            <table>
                <thead>
                    <tr>
                        <th> Description</th>
                        <th> Start Time</th>
                        <th> End Time</th>
                        <th> Duration</th>
                    </tr>
                </thead>
                <tbody>
                {activities.map(activity => (
                    <tr key={activity.start}>
                        <td> {activity.description}</td>
                        <td> {getDateTime(activity.start)}</td>
                        <td> {getDateTime(activity.end)}</td>
                        <td> {getDuration(activity.start, activity.end)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ActivityGrid;
