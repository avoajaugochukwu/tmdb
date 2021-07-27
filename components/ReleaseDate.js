import React from 'react'
import moment  from 'moment'

const ReleaseDate = ( { date }) => {
    // const { date } = props

    const date_string = moment(date).format('YYYY')
    return (
        <div>
          <span className="text-sm"> Release Year: { date_string }</span>
        </div>
    )
}

export default ReleaseDate