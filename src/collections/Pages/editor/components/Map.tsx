import { ComponentConfig } from '@measured/puck'
import React from 'react'

export interface MapProps {
  address: string
  height: number
}

export const Map: ComponentConfig<MapProps> = {
  label: 'Google Map',
  fields: {
    address: { type: 'text', label: 'Address or Location' },
    height: { type: 'number', label: 'Height (px)' },
  },
  defaultProps: {
    address: 'Eiffel Tower, Paris',
    height: 400,
  },
  render: ({ address, height }) => {
    const encodedAddress = encodeURIComponent(address)
    const src = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    return (
      <div className="w-full rounded-lg overflow-hidden bg-muted">
        <iframe
          width="100%"
          height={height}
          src={src}
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          title="Google Map"
        />
      </div>
    )
  },
}
