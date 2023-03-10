import React from 'react'
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import Button from '../ui/Button';

import classes from './EventItem.module.css'

const EventItem = (props) => {
    const {title, image, time, location, date, id} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = location.replace(',', '\n')

  return (
    <li className={classes.item}>
        <img src={'/' + image} alt={title} />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={`/events/${id}`}>
                    <span>EXPLORE EVENT</span>
                    <span className={classes.icon} > <ArrowRightIcon /> </span>
                </Button>
            </div>
        </div>
    </li>
  )
}

export default EventItem
