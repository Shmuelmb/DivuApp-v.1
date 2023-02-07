import React, {useState, useEffect} from 'react'

//HOOK Always on top of component
const StartShift = () => {
    const [startShift, setStartShift] = useState(false);

    
    // use state is condition for true fase

    function giveStartShift () {

        const currentStart = {startShift}
        console.log(currentStart)


    }

    useEffect(() => {
        const date = new Date().getDate() //current date
        const month = new Date().getMonth() + 1 //current month
        const year = new Date().getFullYear() //current year
        const hours = new Date().getHours() //current hours
        const min = new Date().getMinutes() //current minutes
        const sec = new Date().getSeconds() //current seconds
        setStartShift(
            date + '/' + month + '/' + year + '    ' +  hours + ':' + min + ':' + sec
        )
    }, )

    useEffect(() => {
        let id = setInterval(() => {
            setStartShift(new Date().toLocaleTimeString());
        }, 1000);
    
        return () => clearInterval(id);
      }, []);

    const isFan = false

    const toggleIsAdmin = () => {
    }
    
    //js logic
    return (
        <div>
       
            <button onClick={giveStartShift}>התחל משמרת</button>
            <p>{startShift}</p>
            


        </div>
    )



}

export default StartShift;
