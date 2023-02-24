import EventList from '@/components/events/EventList'
import { getAllEvents } from '@/dummy-data'
import React from 'react'

const AllEventsPage = () => {

  const allEvents = getAllEvents()

  return (
    <div>
      <EventList items={allEvents} />
    </div>
  )
}

export default AllEventsPage
