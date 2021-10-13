import React, { Fragment } from 'react'

const CategoryItem = ({ id, name, url, title }: Category) => {
  return (
    <Fragment>
      <div
        className="display: flex;
    justify-content: center;
    /* align-items: center; */
    justify-content: space-around;
    text-decoration: none;
    text-decoration-style: none;
    text-shadow: 0 0 black;"
        key={id}
      >
        <a title={title} href={url}>
          <p>{name}</p>
        </a>
      </div>
    </Fragment>
  )
}

export default CategoryItem
