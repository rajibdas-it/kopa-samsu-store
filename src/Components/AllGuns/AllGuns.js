import React, { useEffect, useState } from "react";
import Gun from "../Gun/Gun";

const AllGuns = () => {
  const [guns, setGuns] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="mt-12">
      <h1 className="text-4xl font-bold text-center">
        Welcome To <span className="text-orange-400">Fake</span> Guns Store
      </h1>
      <p className="text-center mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos odio
        quaerat rem autem, officiis, harum magnam quas alias molestias magni
        fugit eius natus quidem tempore, debitis iste veritatis. Animi,
        corporis.50
      </p>
      <div className="mt-12 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {guns.map((gun) => (
          <Gun key={gun.id} gun={gun}></Gun>
        ))}
      </div>
    </div>
  );
};

export default AllGuns;
