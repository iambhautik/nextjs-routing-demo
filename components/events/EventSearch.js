import React, { useRef } from 'react'
import Button from '../ui/Button'
import classes from './events-search.module.css'

const EventSearch = (props) => {

    const yearRef = useRef()
    const monthRef = useRef()

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const handleFormSubmit = (e) => {
        e.preventDefault();

        props.onSearch({year: yearRef.current.value, month: monthRef.current.value})
    };

  return (
    <form className={classes.form} onSubmit={handleFormSubmit}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor='year' >Year</label>
                <select ref={yearRef} id='year' >
                    <option value='2021' >2021</option>
                    <option value='2022' >2022</option>
                </select>
            </div>

            <div className={classes.control}>
                <label htmlFor='month' >Month</label>
                <select ref={monthRef} id='month' >
                    {months.map((month, i) => {
                        return <option key={i} value={i + 1}>{month}</option>
                    })}
                </select>
            </div>
        </div>
        <Button>Find Event</Button>
    </form>
  )
}

export default EventSearch
