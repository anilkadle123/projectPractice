import React, { Component,useState } from 'react';
import DatePicker  from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

const DatePick=()=>{

    const [startDate,setDate]=useState(new Date())
    const handleChange=date=>{
        setDate(date);
    }
    return(
        <div>
            <DatePicker selected={startDate}
            onChange= {handleChange}
            dateFormat="dd/MM/yyyy"
            />
        </div>
    )
}
export default DatePick
