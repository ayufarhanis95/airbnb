import { useState } from 'react'
import Navbar from "./components/Navbar"
import Img from "./components/Img"
import Cards from "./components/Cards"
import Data from "./components/Data"

function App() {
  const cards = Data.map(function(item){
    return (
      <Cards 
      key={item.id}
      item={item}
      />
    )
  })

  return (
      <div>
        <Navbar />
        <Img />
        <section className="cards-list">
        {cards}
        </section>
        
    
      </div>
  )
}

export default App
