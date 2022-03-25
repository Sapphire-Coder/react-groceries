import React, { useEffect, useState } from 'react'
import './App.css'
import Grocery from './grocery'
import groceries from './groceries'

const App = () => {
  
  const [grList, setGrList] = useState(groceries)

  const addItem = e => {
    e.preventDefault()
    setGrList(grList.concat([{
      item: document.querySelector('input[name="item"]').value,
      brand: document.querySelector('input[name="brand"]').value,
      units: document.querySelector('input[name="units"]').value,
      quantity: document.querySelector('input[name="quantity"]').value,
      isPurchased: false
    }]))
  }
  
  useEffect(() => {
    document.querySelector('#btn').addEventListener('click', addItem)
    document.querySelector('input[name="item"]').value = null
    document.querySelector('input[name="brand"]').value = null
    document.querySelector('input[name="units"]').value = null
    document.querySelector('input[name="quantity"]').value = null
    return () => document.removeEventListener('click', addItem)
  }, [grList])


  return (
    <div>
      <h1>Groceries List</h1>
      <form>
        <input type = 'text' name = 'item' placeholder = 'Item' />
        <input type = 'text' name = 'brand' placeholder = 'Brand' />
        <input type = 'text' name = 'units' placeholder = 'Units' />
        <input type = 'text' name = 'quantity' placeholder = 'Quantity' />
        <input type = 'submit' id = 'btn' />
      </form>
      <div id = 'container'>
        {
          grList.map((grocery, i) => {
            return <div key = {i}>{!grocery.isPurchased && <Grocery g = {grocery}/>}</div>
          })
        }
      </div>
    </div>
  )
}

export default App