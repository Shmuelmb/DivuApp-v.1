import React, {useState,useEffect} from 'react'

const EndShift = () => {
    const [endShift, setEndShift] = useState(false);
    const timeNow = new Date().toLocaleTimeString();

    const toggleIsAdmin = () => {
    }

    useEffect(() => {
        let id = setInterval(() => {
          setEndShift(new Date().toLocaleTimeString());
        }, 1000);
    
        return () => clearInterval(id);
      }, []);
    
    //js logic
    return (
        <div>
       
            <button>סיים משמרת</button>
            <p>{timeNow}</p>


        </div>
    )
}

export default EndShift