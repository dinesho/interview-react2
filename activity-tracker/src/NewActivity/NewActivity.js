import React from 'react';

function NewActivity() {
    return (
        <div className="new-activity">
            <p>Add description below and click "Start Activity" to clock in</p>
            <textarea></textarea><br/>
            <button>Start Activity</button>
        </div>
    );
}

export default NewActivity;
