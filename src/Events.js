import React from "react";
import { useNavigate } from "react-router-dom";

const Events = (props) => {
  const navigate = useNavigate();
  const { ID, Date, Location } = props.person;

  const handleButton = (user_id) => {
    console.log(user_id);
    navigate(`/detection/${user_id}`);
  };

  return (
    <div>
      <div className="mt-2 mr-16">
        <button className="btn no-animation" onClick={() => handleButton(ID)}>
          {ID}: {Location}
          <div className="flex ">
            <p className="mr-4 ml-4">person detected</p>
            {Date}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Events;
