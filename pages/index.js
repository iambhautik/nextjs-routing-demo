import { getFeaturedEvents } from '@/dummy-data'
import React from 'react'
import EventList from './../components/events/EventList';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  )
}

export default HomePage
