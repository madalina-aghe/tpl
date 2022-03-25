import './Anunturi.scss'
import React from 'react'
//import busesImg from '../../../assets/images/autobuze-electrice.jpeg'
import busesImg from '../../../Assets/images/autobuze-electrice.jpeg'

const mockAnunturi = [
  {
    descriere:
      '\tÎncepând de luni 7 martie a.c. se reintroduce linia 1 de autobuz între orele 7.00 - 19.00 pentru \
  reducerea timpului de deplasare din zona Obcini - George Enescu în zona Burdujeni.\n Plecările sunt din 20 în 20 \
  minute de la Cinema Burdujeni începând cu ora 7.00. Linia 1 are următorul traseu: Cinema - Orizont - IRIC - Carrefour \
  - Bazar - Sala Sporturilor - Grupul școlar - Centru - Bancă - Policlinică - Catedrală - Curcubeu - Mobilă - Calea Obcinilor \
  Flori (ultima stație) - Întoarcere semafor parc - Calea Obcinilor Flori - Mobilă - Curcubeu - Nordic - Catedrală - Policlinică \
  - Bancă - Centru - Grupul școlar - Sala Sporturilor - Bazar - Carrefour - Orizont - Cinema LINIA 1 NU CIRCULĂ PE LA IULIUS MALL, \
  PIAȚA BURDUJENI ȘI NU INTRĂ ÎN CARTIERUL OBCINI.',
    titlu: 'REINTRODUCEREA LINIEI 1',
    fotografie: busesImg,
    dataPublicarii: new Date()
  },
  {
    descriere:
      '\tÎncepând de luni 7 martie a.c. se reintroduce linia 1 de autobuz între orele 7.00 - 19.00 pentru \
  reducerea timpului de deplasare din zona Obcini - George Enescu în zona Burdujeni.\n Plecările sunt din 20 în 20 \
  minute de la Cinema Burdujeni începând cu ora 7.00. Linia 1 are următorul traseu: Cinema - Orizont - IRIC - Carrefour \
  - Bazar - Sala Sporturilor - Grupul școlar - Centru - Bancă - Policlinică - Catedrală - Curcubeu - Mobilă - Calea Obcinilor \
  Flori (ultima stație) - Întoarcere semafor parc - Calea Obcinilor Flori - Mobilă - Curcubeu - Nordic - Catedrală - Policlinică \
  - Bancă - Centru - Grupul școlar - Sala Sporturilor - Bazar - Carrefour - Orizont - Cinema LINIA 1 NU CIRCULĂ PE LA IULIUS MALL, \
  PIAȚA BURDUJENI ȘI NU INTRĂ ÎN CARTIERUL OBCINI.',
    titlu: 'REINTRODUCEREA LINIEI 1',
    fotografie: busesImg,
    dataPublicarii: new Date()
  }
]

const Anunturi = () => {
  return (
    <div className='anunturi'>
      <div className='anunturi__title'>Anunturi</div>
      <div className='anunturi__content'>
        {mockAnunturi.map((anunt, index) => (
          <div key={index} className='anunt'>
            <div className='anunturi__content-title'>{anunt.titlu}</div>

            {anunt.descriere}
            <div className='anunturi__content-date'>{anunt.dataPublicarii}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Anunturi }
