import React from 'react'
import { Link } from 'wouter'
import '../styles/Category.css'

export const Category = ({trends}) => {
  return (
      <>
        {trends.map(trend => (
            <li key={trend}>
                <Link className='Link' to={`/search/${trend}`}>{trend}</Link>
            </li>
        ))}
      </>
  )
}
