import { useState } from "react"

const Calendar = () => {
    let [Days,setDays] = useState([])
    function GenrateDay(){
        let arr = []
        for (let i = 0; i <= 30; i++) {
            arr.push(<li key={i}>{i}</li>)
        }
        setDays(arr)
    }
    GenrateDay()
  return (
    <div data = {Days}>
    </div>
  )
}



export default Calendar
