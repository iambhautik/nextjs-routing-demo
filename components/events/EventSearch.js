import React from 'react'
import Button from '../ui/Button'
import classes from './events-search.module.css'

const EventSearch = (props) => {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  return (
    <form className={classes.form}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor='year' >Year</label>
                <select id='year' >
                    <option value='2021' >2021</option>
                    <option value='2022' >2022</option>
                </select>
            </div>

            <div className={classes.control}>
                <label htmlFor='month' >Month</label>
                <select id='month' >
                    {months.map((month, i) => {
                        return <option value={i + 1}>{month}</option>
                    })}
                </select>
            </div>
        </div>
        <Button>Find Event</Button>
    </form>
  )
}

export default EventSearch
