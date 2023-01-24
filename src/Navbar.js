import React, { useEffect, useState } from "react";
import { async } from "@firebase/util";
import { db } from "./firebase.init";
import { getDatabase, onValue, ref } from "firebase/database";

const Navbar = (props) => {
  const {female, male} = props;

  return (
    <div>
    <div className="navbar bg-blue-800">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-white">SECEQURALSE</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div>
          <button className="btn btn-success mr-2 text-white">{female}</button>
          <button className="btn btn-error text-white">{male}</button>
        </div>
      </div>
    </div> 
    </div>
  );
};

export default Navbar;
