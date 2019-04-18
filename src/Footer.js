import React from 'react'

function Footer () {
    const firstName = "Pooja"
    const lastName = "Swapnil"
    const date = new Date()
    const hours = date.getHours()
    
    const styles = {
        fontSize :50 ,
        fontFamily: 'Cursive',
    }
    
    let ampm
    if (hours > 12){
        ampm = "PM"
        styles.color ='Blue'
    }else {
        ampm="AM"
        styles.color ='red'
    }
 

    return ( <div>
        <h3> My Full Name is :- {`${firstName} ${lastName}`}</h3>
        <h4 style={styles}>Current Time is : {date.getHours() % 12} {ampm}</h4>
        </div>
    )
}



//Arrow function
// const Footer = () => ({ <h1>Hello World</h1>})

// function practise (){
//     return (
//         <div><p>Some Paragrapph</p></div>
//     )
// }

// const practised = () => <h1>something</h1>

export default Footer