import EventList from '@/components/events/EventList'
import EventSearch from '@/components/events/EventSearch'
import { getAllEvents } from '@/dummy-data'
import React from 'react'

const AllEventsPage = () => {

  const allEvents = getAllEvents()

  return (
    <div>
      <EventSearch />
      <EventList items={allEvents} />
    </div>
  )
}

export default AllEventsPage
