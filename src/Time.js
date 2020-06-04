import React from "react"

function Time(){
    const date=new Date()
    const hours=date.getHours()
    let timeOfTheDay

    const styles=
    {
    
    }

    if(hours<12)
    {    
        timeOfTheDay="Moring"
        styles.backgroundColor="yellow"
        styles.fontSize=70
        styles.color="red"
    }
    else if(hours>=12 && hours<17)
    {    
        timeOfTheDay="Afernoon"
        styles.backgroundColor="orange"
        styles.fontSize=50
        styles.color="green"
    }    
    else
    {    
        timeOfTheDay="Night"
        styles.backgroundColor="lightBlue"
        styles.fontSize=30
        styles.color="purple"
    }   
   
    return (
    <div>
        <h1>Good {timeOfTheDay}!!</h1>
        <h3 style={styles}>It's {` ${timeOfTheDay} `}</h3>
    </div>
    )
}

export default Time