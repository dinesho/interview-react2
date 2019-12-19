import React, {useState, createContext} from "react";

export const ActivityContext = createContext();

export const ActivityProvider = (props) => {

    const [activities, setActivities] = useState([]);

    // If the app state is not set, fetch data from session storage if that exist
    if(activities.length === 0){
        let activitiesFromDB = JSON.parse(sessionStorage.getItem("ACTIVITIES_DB"));

        if(activitiesFromDB !== null && activitiesFromDB.length > 0){
            setActivities(activities => activitiesFromDB);
        }
    }
    else // Update the session storage when activity context changed
        {
            sessionStorage.setItem("ACTIVITIES_DB", JSON.stringify(activities));
        }

    return(
        <ActivityContext.Provider value={[activities, setActivities]}>
            {props.children}
        </ActivityContext.Provider>
    );
};

export default ActivityProvider;
