import React, { useEffect, useState } from 'react'
// import Navbar from '../components/navbar/Navbar'
// import ItemCard from '../components/cards/ItemCard'
// import { fetchItems } from '../services/fetchItems'
// import { Item } from '../interfaces/item'
// import useItemsStore from '../stores/items-store'
import Hero from '../components/hero/Hero'
import CardsContainer from '../components/cards-list/CardsContainer'
import { Item } from '../interfaces/item';


const Home: React.FC = () => {
  // const { items, setItems } = useItemsStore()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchItems()
  //     setItems(data)
  //   }
  //   fetchData()
  // }, [])

  
const items: Item[] = [
  {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://example.com/images/headphones.jpg",
      description: "Noise-cancelling wireless headphones with up to 20 hours of battery life."
  },
  {
      id: 2,
      name: "Smartwatch",
      price: 149.99,
      image: "https://example.com/images/smartwatch.jpg",
      description: "Water-resistant smartwatch with fitness tracking and heart rate monitoring."
  },
  {
      id: 3,
      name: "Gaming Mouse",
      price: 59.99,
      image: "https://example.com/images/mouse.jpg",
      description: "High precision gaming mouse with customizable RGB lighting and 7 programmable buttons."
  },
  {
      id: 4,
      name: "4K Monitor",
      price: 299.99,
      image: "https://example.com/images/monitor.jpg",
      description: "27-inch 4K Ultra HD monitor with a 144Hz refresh rate and HDR support."
  },
  {
      id: 5,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://example.com/images/speaker.jpg",
      description: "Portable Bluetooth speaker with deep bass, 12-hour battery, and water-resistant design."
  },
  {
      id: 6,
      name: "Laptop Stand",
      price: 29.99,
      image: "https://example.com/images/laptop-stand.jpg",
      description: "Adjustable aluminum laptop stand with ventilation and ergonomic design."
  },
  {
      id: 7,
      name: "Mechanical Keyboard",
      price: 89.99,
      image: "https://example.com/images/keyboard.jpg",
      description: "RGB mechanical keyboard with customizable keycaps and tactile feedback."
  },
  {
      id: 8,
      name: "Portable Charger",
      price: 39.99,
      image: "https://example.com/images/charger.jpg",
      description: "10000mAh portable charger with fast charging and dual USB output."
  },
  {
      id: 9,
      name: "Drone Camera",
      price: 499.99,
      image: "https://example.com/images/drone.jpg",
      description: "4K drone camera with GPS tracking, auto-return, and 30-minute flight time."
  },
  {
      id: 10,
      name: "Smart Thermostat",
      price: 199.99,
      image: "https://example.com/images/thermostat.jpg",
      description: "Wi-Fi-enabled smart thermostat with energy-saving features and voice control."
  }
];


  return (
    <div className='w-full h-full relative pt-20 '>
      <Hero />
      <CardsContainer title='Featured Products' items={items} />
    </div>
  )
}

export default Home