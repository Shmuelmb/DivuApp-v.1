import React, {useState} from 'react'

//HOOK Always on top of component
const StartShift = () => {
    const [startShift, setStartShift] = useState(false);
    const [endShift, setEndShift] = useState(false);

    
    // use state is condition for true fase
    const isFan = false

    const toggleIsAdmin = () => {
    }
    
    //js logic
    return (
        <div>
       
            <button>התחל משמרת</button>
            <button>סיים משמרת</button>


        </div>
    )



}

export default StartShift;
