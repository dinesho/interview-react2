// Calculates and returns the duration between two time stamps in
// Hours : Minutes : Seconds format
export  const getDuration = function(start,end = -1){
    let duration;

    if(end < 0)
    {
        let date = new Date();
        let now = date.getTime();

        duration = now - start;
    }
    else
        {
            duration = end - start;
        }

    //convert duration into seconds
    duration = Math.floor(duration/1000);

    // converting ms duration in to H:M:S
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration - hours*3600) / 60);
    let seconds = duration - (hours * 3600) - (minutes * 60);

    return hours+" : "+minutes+" : "+seconds;
};

// Returns the timestamp in Hour:Minute:Second Format
export const getDateTime = function (time) {
    if(time < 0)
    {
        return "In Progress";
    }

    let date = new Date(parseInt(time));
    return date.getHours() +":"+date.getMinutes()+":"+date.getSeconds();
};


export default getDuration;
