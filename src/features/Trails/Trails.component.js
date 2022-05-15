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

      <div
        style={{
          padding: '100px'
        }}
      >
        <h2>TRASEE AUTOBUZE</h2>
        <h3>
          <span>Linia 1</span>&nbsp; -&nbsp; &nbsp;&nbsp;
          <strong>
            CINEMA &nbsp;BURDUJENI - CALEA OBCINILOR FLORI&nbsp;&nbsp;
            <span>via MĂRĂȘEȘTI</span>
          </strong>
          <strong>&nbsp;</strong>(16,0 km)
        </h3>
        <p>
          <strong>Cinema</strong>&nbsp; - Orizont - IRIC - Carrefour - Bazar - Sala Sporturilor -
          Grup Școlar - Centru - Bancă - Policlinică - Catedrală - Curcubeu - Mobilă -{' '}
          <strong>Obcini Flori</strong>&nbsp;(ultima stație) -&nbsp;
          <strong>Întoarcere semafor parc -&nbsp;</strong>Obcini Flori - Mobilă - Curcubeu - Nordic
          - Catedrală - Policlinică - Bancă - Centru&nbsp;- Grup Școlar - Sala Sporturilor - Bazar -
          Carrefour - Orizont&nbsp; -&nbsp;<strong>Cinema</strong>
        </p>
        <p>&nbsp;</p>
        <h3>
          <span>Linia 2</span>&nbsp; -&nbsp; &nbsp;&nbsp;
          <strong>GARA &nbsp;BURDUJENI</strong>&nbsp;-&nbsp;<strong>Cartierul &nbsp;OBCINI</strong>
          &nbsp; via SPITAL (20,1 km)
        </h3>
        <p>
          <strong>Gara Burdujeni&nbsp;</strong>- Comlemn - Cantină - Moldova - Orizont - IRIC -
          Carrefour - Iulius Mall - Bazar - Sala Sporturilor - Grup Școlar - Centru - Bancă -
          Policlinică - Spitalul Judeţean - Metro&nbsp;- <strong>Corduș</strong> - Școala nr. 9 -
          Obcini Flori - Mobilă - Curcubeu - Nordic - Catedrală - Policlinică - Bancă - Centru -
          Grup Școlar - Sala Sporturilor - Iulius Mall - Bazar - Carrefour - Orizont - Moldova -
          Cantină - Ramiro - Cartier ANL -&nbsp;<strong>Gara Burdujeni</strong>
        </p>
        <p>&nbsp;</p>
        <h3>
          <span>Linia 3</span>&nbsp; -&nbsp; &nbsp;&nbsp;
          <strong>GARA &nbsp;BURDUJENI</strong>&nbsp;-&nbsp;
          <strong>Fabrica de rulmenţi Şcheia</strong>&nbsp;şi retur (24,1km)
        </h3>
        <p>
          <strong>Gara Burdujeni</strong>&nbsp;- Comlemn - Cantină - Moldova - Orizont - IRIC -
          Carrefour - Bazar - Sala Sporturilor - Grup Școlar - Centru - Bancă - Policlinică -
          Spitalul Judeţean - Obcini Flori - Pasaj CFR Vest - Centură -&nbsp;
          <strong>Rulmentul</strong>&nbsp;- Jumbo - Bermas - Gara Suceava Vest - Mobilă - Curcubeu -
          Nordic - Catedrală - Policlinică - Bancă - Centru - Grup Școlar - Sala Sporturilor - Bazar
          - Carrefour - Orizont - Moldova - Cantina - Ramiro - Cartier ANL -&nbsp;
          <strong>Gara Burdujeni</strong>
        </p>
        <p>&nbsp;</p>
        <h3>
          <span>Linia 4&nbsp;</span> -&nbsp; &nbsp;&nbsp;
          <strong>CINEMA &nbsp;BURDUJENI</strong>&nbsp;-&nbsp;
          <strong>Cartierul &nbsp;OBCINI</strong>&nbsp;via MĂRĂȘEȘTI (22 km)
        </h3>
        <p>
          <strong>Cinema</strong>&nbsp;- Depozit - Torino - Piaţă - Orizont - IRIC - Carrefour -
          Iulius Mall - Bazar - Sala Sporturilor - Grup Școlar - Centru - Bancă - Policlinică -
          Catedrală - Curcubeu - Mobilă - Obcini Flori - Metro -&nbsp;Corduş&nbsp;-
          <strong> Bloc IRE</strong>&nbsp;- Alimentara - Şcoala „Ion Creangă” - Obcini Flori -
          Mobilă - Curcubeu - Confecţia - Universitate - Policlinică - Bancă - Centru&nbsp;- Grup
          Școlar - Sala Sporturilor - Iulius Mall - Bazar - Carrefour - Orizont - Piaţă - Torino -
          Depozit&nbsp;- Spital Neuro -&nbsp;<strong>Cinema</strong>
        </p>
        <p>&nbsp;</p>
        <h3>
          <span>Linia 5</span>&nbsp; -&nbsp; &nbsp;&nbsp;
          <strong>GARA Suceava NORD IȚCANI</strong>&nbsp;-&nbsp;
          <strong>Cartierul &nbsp;OBCINI</strong>&nbsp;via SPITAL (17,8 km)
        </h3>
        <p>
          <strong>Gara Iţcani</strong>&nbsp;- Pasarelă - Străduinţa - Betty Ice - Petrom - TPL SA-
          Sticlă - Grup Școlar - Centru - Bancă - Policlinică&nbsp;- Spitalul Judeţean - Metro
          -&nbsp;<strong>Corduş</strong>&nbsp;-{' '}
          <span>&nbsp;Bloc IRE&nbsp;- Alimentara -&nbsp;</span>
          Şcoala nr.9 - Obcini Flori - Mobilă - Curcubeu - Nordic - Catedrală&nbsp;- Policlinică -
          Bancă - Centru - Grup Școlar - Sticlă - TPL SA - Petrom - Selgros - Străduinţa - Pasarelă
          -&nbsp;<strong>Gara Iţcani</strong>
        </p>
        <p>&nbsp;</p>
        <h3>
          <span>Linia 21</span>&nbsp; -&nbsp; &nbsp;
          <strong>&nbsp;BURDUJENI</strong>&nbsp;SAT -&nbsp;
          <strong>Fabrica de rulmenți Șcheia&nbsp;</strong>&nbsp;şi retur (26,6 km)
        </h3>
        <p>
          <strong>Burdujeni Sat</strong>&nbsp;- Şcoala nr. 6 - Cinema - Orizont - IRIC - Carrefour -
          Bazar - Sala Sporturilor - Grup Școlar - Centru - Bancă - Policlinică - Catedrală -
          Curcubeu - Mobilă - Pasaj CFR Vest - Centură -&nbsp;<strong>Rulmentul</strong>&nbsp;-
          Jumbo - Bermas&nbsp;- Gara Suceava Vest - Mobilă - Curcubeu - Nordic - Catedrală -
          Policlinică - Bancă - Centru - Grup Școlar - Sala Sporturilor - Bazar&nbsp;- Carrefour -
          Orizont - Cinema - Şcoala nr. 6 -&nbsp;<strong>Burdujeni Sat</strong>
        </p>
        <p>&nbsp;</p>
        <h3>
          <span>Linia 28</span>&nbsp; -&nbsp; &nbsp;&nbsp;
          <strong>CINEMA &nbsp;BURDUJENI</strong>&nbsp;- GARA DE NORD IȚCANI&nbsp; și retur (14,7
          km)
        </h3>
        <p>
          <strong>Cinema</strong>&nbsp;- Depozit - Torino - Piaţa Burdujeni - Orizont - IRIC -
          Carrefour - Bazar - Sala Sporturilor - Sticlă - TPL SA - Petrom - Selgros&nbsp;-
          Străduinţa - Pasarelă -&nbsp;<strong>Gara Iţcani</strong>&nbsp;- Pasarelă - Străduinţa -
          Betty Ice - Petrom - TPL SA - Sticlă - Bazar - Carrefour - Orizont&nbsp;- Piaţa Burdujeni
          - Torino - Depozit - Spital Neuro -&nbsp;<strong>Cinema</strong>
        </p>
        <p>&nbsp;</p>
      </div>
    </div>
  )
}

export default Trails
