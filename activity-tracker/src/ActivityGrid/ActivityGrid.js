import React, {useContext} from 'react';
import {ActivityContext} from "../ActivityContext";
import {getDateTime, getDuration} from "../Util/Util";

function ActivityGrid() {

    const [activities] = useContext(ActivityContext);

    // Show the table of activities if there are activities in the system
    if(activities.length > 0)
    {
        return (
            <div className="activity-grid">
                <h4>Activity History </h4>
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
    else // Display an alert showing no activities
        {
            return (
                <div className="alert"> <i className="fas fa-folder-open"></i> No activity records were found</div>
            );
        }

}

export default ActivityGrid;
