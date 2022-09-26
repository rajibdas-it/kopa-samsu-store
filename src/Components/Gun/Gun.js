import React from "react";

const Gun = (props) => {
  const { action, bullet, capacity, category, id, img, name, price } =
    props.gun;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-[350px] w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <div className="card-actions mt-3">
            <div className="badge badge-outline">{action}</div>
            <div className="badge badge-outline">{bullet}</div>
          </div>
          <div className="card-actions mt-5">
            <div className="btn btn-sm btn-info">Details</div>
            <div className="btn btn-sm btn-success">Add to Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gun;
