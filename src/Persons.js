import React from "react";
import Events from "./Events";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const Persons = (props) => {
  const {persons} = props;

  return (
    <div>
    <div className="flex justify-between">
    <h2 className="text-2xl font-semibold ">Events</h2>
    <div className="dropdown dropdown-bottom mr-12">
  <label tabIndex={0} className=""><HiAdjustmentsHorizontal className="w-20 h-10" /> </label>
  <ul tabIndex={0} className="dropdown-content menu  shadow bg-base-100 rounded-box w-50">
    <li><a >Location</a></li>
    <li><a>Gender</a></li>
    <li><a>Date</a></li>
  </ul>
</div>
      
    </div>
           
      <div className="mt-4 justify-end hero h-96 overflow-y-auto">
        <div className="">
          {persons.map((person) => (
            <Events person={person} key={person.ID}></Events>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Persons;
