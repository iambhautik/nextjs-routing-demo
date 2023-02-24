import EventContent from '@/components/event-detail/event-content.js'
import EventLogistics from '@/components/event-detail/event-logistics.js'
import EventSummary from '@/components/event-detail/event-summary.js'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

import { getEventById } from '../../dummy-data.js'

const EventDetailPage = () => {

  const { query : {eventId }} = useRouter()

  const singleEventById = getEventById(eventId)

  if(!singleEventById){
    return <p>No event found</p>
  }

  return (
    <Fragment>
      <EventSummary title={singleEventById.title} />
      <EventLogistics date={singleEventById.date} address={singleEventById.location} image={singleEventById.image} imageAlt={singleEventById.title} />
      <EventContent>
        <p>{singleEventById.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage
