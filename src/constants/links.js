import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/posts" className="page-link">
          Posts
        </Link>
        {children}
      </li>
      <li>
        <Link to="/newsletter" className="page-link">
          Newsletter
        </Link>
      </li>
      <li>
        <Link to="/page-mdx" className="page-link">
          MDX Page
        </Link>
      </li>
    </ul>
  )
}

export default Links
