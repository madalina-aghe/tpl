import React, { useRef, useState } from 'react'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import PropTypes from 'prop-types'

const mapboxToken =
  'pk.eyJ1IjoibWFkYWxpbmEtYWdoZW9yZ2hpZXNlaSIsImEiOiJjbDFubWVyd2swMGZ3M2luMTIxeTU3NnpyIn0.GhY4EbrkeXVm2JtCoeT6Hw'

const TrailsMap = ({ selectedRouteIndex, trails }) => {
  const [selectedStopIndex, setSelectedStopIndex] = useState(null)

  const mapRef = useRef(null)

  const selectedStop =
    selectedRouteIndex !== null && selectedStopIndex !== null
      ? trails[selectedRouteIndex].stops[selectedStopIndex]
      : null

  const handleClosePopup = () => {
    setSelectedStopIndex(null)
  }

  return (
    <ReactMapGl
      ref={mapRef}
      initialViewState={{
        longitude: 26.243191320939573,
        latitude: 47.64144666358986,
        zoom: 12
      }}
      style={{ width: 'calc(100% - 200px)', height: 400, margin: 'auto' }}
      mapboxAccessToken={mapboxToken}
      mapStyle='mapbox://styles/mapbox/streets-v10'
    >
      {selectedRouteIndex !== null && (
        <>
          {trails[selectedRouteIndex]?.stops?.map((marker, index) => (
            <Marker
              longitude={marker.lng}
              latitude={marker.lat}
              key={index}
              onClick={() => setSelectedStopIndex(index)}
            />
          ))}
          {selectedStopIndex !== null && (
            <Popup
              mapRef={mapRef}
              longitude={selectedStop.lng}
              latitude={selectedStop.lat}
              onClose={handleClosePopup}
              closeButton={true}
              closeOnClick={false}
            >
              {selectedStop.name}
            </Popup>
          )}
        </>
      )}
    </ReactMapGl>
  )
}

TrailsMap.propTypes = {
  selectedRouteIndex: PropTypes.number,
  trails: PropTypes.any
}

export { TrailsMap }
