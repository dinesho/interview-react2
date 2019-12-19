import React, {useState, createContext} from "react";

export const ActivityContext = createContext();

export const ActivityProvider = (props) => {
    const [activity, setActivity] = useState([
        {
            description: 'Activity description',
            start: '1000',
            end: '1500'
        },
        {
            description: 'Activity description 2',
            start: '2000',
            end: '2500'
        },
    ]);

    return(
        <ActivityContext.Provider value={'Hello'}>
            {props.children}
        </ActivityContext.Provider>
    );
};

export default ActivityProvider;
