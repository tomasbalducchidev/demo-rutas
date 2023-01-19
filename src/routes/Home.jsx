import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Menu from '../components/Menu'
import { items } from '../data/items'

const Home = () => {
  return (
    <div>
      <Menu />
      <div className='mainContainer'>
        <div className='sidebar'>
            {items.map((item) => (
              <div key={item.id}>
                <Link to={`/contacts/${item.id}`}>{item.name}</Link>{" "}
              </div>
            ))}
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Home