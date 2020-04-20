import React from 'react'

import './styles.scss'
import ProductsList from '../../components/ProductsList'

function Home() {
  return (
    <div className="home-container">
      <ProductsList />
    </div>
  )
}

export default Home