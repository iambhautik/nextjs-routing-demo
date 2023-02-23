import { useRouter } from 'next/router'
import React from 'react'

import { getEventById } from '../../dummy-data.js'

const EventDetailPage = () => {

  const { query : {eventId }} = useRouter()

  const singleEventById = getEventById(eventId)

  if(!singleEventById){
    return <p>No event found</p>
  }

  return (
    <div>
      <h1>Event details page</h1>
    </div>
  )
}

export default EventDetailPage
