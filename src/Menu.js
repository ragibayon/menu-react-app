import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img alt={title} src={img} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
