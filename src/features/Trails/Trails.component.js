import React, { useEffect, useState } from 'react'
import { TrailsMap } from './components/MapContainer'
import './Trails.scss'
import Select from 'react-select'
import { getRoutes } from '../../services/api'

const trailsMock = [
  {
    name: 'ruta 1',
    stops: [
      {
        name: 'oprire 1',
        lng: 26.243191320939573,
        lat: 47.64144666358986
      },
      {
        name: 'oprire 2',
        lng: 26.2583155303629,
        lat: 47.64087744601483
      }
    ]
  },
  {
    name: 'ruta 2',
    stops: [
      {
        name: 'oprire 1',
        lng: 26.24688538916322,
        lat: 47.64144666358986
      },
      {
        name: 'oprire 2',
        lng: 26.262255273764783,
        lat: 47.64657467817785
      }
    ]
  }
]

const Trails = () => {
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(null),
    [trails, setTrails] = useState([]),
    [selectOptions, setSelectOptions] = useState([])

  const handleSelectChange = (selectedOption) => {
    setSelectedRouteIndex(selectedOption.value)
  }

  useEffect(async () => {
    const newTrails = await getRoutes()
    setTrails(newTrails)
    setSelectOptions(
      newTrails.map((trail, index) => ({
        value: index,
        label: trail.name
      }))
    )
  }, [])

  return (
    <div className='trails'>
      <h1>Trasee autobuze</h1>
      <div className='select'>
        <div className='trails__select-label'>Selecteaza ruta: </div>
        <Select
          options={selectOptions}
          onChange={handleSelectChange}
          defaultValue={selectOptions?.[0]}
        />
      </div>

      <TrailsMap selectedRouteIndex={selectedRouteIndex} trails={trails} />
    </div>
  )
}

export default Trails
