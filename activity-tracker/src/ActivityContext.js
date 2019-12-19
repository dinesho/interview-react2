import React, {useState, createContext} from "react";

export const ActivityContext = createContext();

export const ActivityProvider = (props) => {

    const [activities, setActivities] = useState([
        {
            description: 'Activity description',
            start: '1576762233701',
            end: '1576762253701'
        },
        {
            description: 'Activity description 2',
            start: '1576762333702',
            end: '1576772233701'
        },
        {
            description: 'Activity the active task',
            start: '1576762333703',
            end: '-1'
        },
    ]);


    return(
        <ActivityContext.Provider value={[activities, setActivities]}>
            {props.children}
        </ActivityContext.Provider>
    );
};

export default ActivityProvider;
