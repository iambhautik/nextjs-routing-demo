import EventList from '@/components/events/EventList'
import EventSearch from '@/components/events/EventSearch'
import { getAllEvents } from '@/dummy-data'
import { useRouter } from 'next/router'
import React from 'react'

const AllEventsPage = () => {

  const allEvents = getAllEvents()
  const router = useRouter()

  const onSearch = ({month, year}) => {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }

  return (
    <div>
      <EventSearch onSearch={onSearch} />
      <EventList items={allEvents} />
    </div>
  )
}

export default AllEventsPage
