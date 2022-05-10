import React from 'react'
import './Management.scss'

import Cards from '../Cards/Cards'

const Management = () => {
  return (
    <div className='management--container'>
      <h1 style={{ width: '250px', margin: '0 auto', borderBottom: '1px solid black' }}>
        Conducere
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '10px' }}>
        <Cards cardTitle={''} firstName={'Mihai'} lastName={'Hanceriuc'} />
        <Cards cardTitle={''} firstName={'Emil-Vasile'} lastName={'Juravle'} />
        <Cards cardTitle={''} firstName={'Ovidiu'} lastName={'Munteanu'} />
        <Cards cardTitle={''} firstName={'Darie'} lastName={'Romaniuc'} />
        <Cards cardTitle={''} firstName={'Teodor-Sebastian'} lastName={'Sârghie'} />
        <Cards cardTitle={''} firstName={'Costel'} lastName={'Tataranu'} />
        <Cards cardTitle={'Presedinte'} firstName={'Mihai'} lastName={'Petruc'} />

        <Cards
          cardTitle={'Adunarea Generala a Actionarilor'}
          firstName={'Adrian'}
          lastName={'Arămescu '}
        />
        <Cards
          cardTitle={'Adunarea Generala a Actionarilor'}
          firstName={'Ovidiu'}
          lastName={' Hrițcu'}
        />
        <Cards cardTitle={'Director general'} firstName={'Dănuț'} lastName={'Matei'} />
      </div>
    </div>
  )
}

export default Management
