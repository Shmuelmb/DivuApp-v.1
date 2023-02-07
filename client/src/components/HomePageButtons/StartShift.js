import React, {useState, useEffect} from 'react'

//HOOK Always on top of component
const StartShift = () => {
    const [startShift, setStartShift] = useState(false);

    
    // use state is condition for true fase

    function giveStartShift () {

        const currentStart = [startShift]
        console.log(currentStart)



    }



    useEffect(() => {
        let id = setInterval(() => {
            setStartShift(new Date().toLocaleTimeString());
        }, 1000);
    
        return () => clearInterval(id);
      }, []);

    //js logic
    return (
        <div>
                 
            <button onClick={giveStartShift}>התחל משמרת</button>
            <p>time of shift clicked : {startShift} </p>
            


        </div>
    )



}

export default StartShift;
