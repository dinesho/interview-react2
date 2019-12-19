import React from 'react';

function ActivityGrid() {
    return (
        <div className="activity-grid">
            <table>
                <tr>
                    <th> Description</th>
                    <th> Start Time</th>
                    <th> End Time</th>
                    <th> Duration</th>
                </tr>
                <tr>
                    <td> This is the activity description</td>
                    <td> 9.55.56</td>
                    <td> 10.30.56</td>
                    <td> 00:30:36</td>
                </tr>
                <tr>
                    <td> This is the activity description</td>
                    <td> 9.55.56</td>
                    <td> 10.30.56</td>
                    <td> 00:30:36</td>
                </tr>
                <tr>
                    <td> This is the activity description</td>
                    <td> 9.55.56</td>
                    <td> 10.30.56</td>
                    <td> 00:30:36</td>
                </tr>
                <tr>
                    <td> This is the activity description</td>
                    <td> 9.55.56</td>
                    <td> 10.30.56</td>
                    <td> 00:30:36</td>
                </tr>
            </table>
        </div>
    );
}

export default ActivityGrid;
