import React, {useState, useContext} from 'react';
import {ActivityContext} from "../ActivityContext";

function NewActivity() {

    const [activities, setActivities] = useContext(ActivityContext);

    const [description, setDescription] = useState('');

    const updateName = (e) => {
        setDescription(e.target.value);
    };

    // Check the description and add the activity to the Activity context
    const addActivity = e => {
        e.preventDefault();

        if(description === '')
        {
            alert("Fill out the description");
        }
        else{
            let time = (new Date()).getTime();
            setActivities(prevActivities => [...prevActivities,{description: description, start: time, end: -1}]);
        }
    };

    return (
        <div className="new-activity">
            <form onSubmit={addActivity}>
                <p>Add description below and click "Start Activity" to clock in</p>
                <textarea onChange={updateName}  required> </textarea><br/>
                <button><i className="fas fa-hourglass-start"></i> Start Activity</button>
            </form>
        </div>
    );
}

export default NewActivity;
