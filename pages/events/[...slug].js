import EventList from '@/components/events/EventList'
import ResultsTitle from '@/components/events/results-title'
import Button from '@/components/ui/Button'
import { getFilteredEvents } from '@/dummy-data'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

const FilteredEventPage = () => {

  const router = useRouter()

  const urlData = router.query.slug;

  if(!urlData){
    return <p className='center' >Loading...</p>
  }

  const [year, month] = urlData;

  if(isNaN(+year) || isNaN(+month) || +year < 2021 || +year > 2030 || +month < 1 || +month > 12) {
    return (
      <Fragment>
        <p className='center'>Something went wrong...</p>
        <div className='center'>
          <Button link='/events' >Show All Events</Button>
        </div>
      </Fragment>
    )

  }

  const filteredEvents = getFilteredEvents({month: +month, year: +year})

  if(filteredEvents.length === 0 || !filteredEvents){
    return (
      <Fragment>
        <p className='center'>No events found</p>
        <div className='center m_5'>
          <Button link='/events' >Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(+year, +month -1)

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventPage
