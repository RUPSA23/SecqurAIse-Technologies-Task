import logo from "./logo.svg";
import "./App.css";
import Persons from "./Persons";
import { Route, Routes } from "react-router-dom";
import Detection from "./Detection";
import Navbar from "./Navbar";
import { db } from "./firebase.init";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

function App() {
  const [persons, setPersons] = useState([]);
  const [female, setFemale] = useState("");
  const [male, setMale] = useState("");
  useEffect( () => {
    const query = ref(db, "/");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log("Data is: ", data);
      if (snapshot.exists()) {
        setPersons(data);
      }
    });
  }, []);

 const getCount = async () => {
    const filtered_persons = await persons.filter(person => {
      if(person.Gender === "Female"){
        return true;
      }
    });
    const noOfWomen = await filtered_persons.length;
    const noOfMen = await persons.length - noOfWomen;
    setMale(noOfMen);
    setFemale(noOfWomen);
    return {noOfWomen,noOfMen};
  };
  getCount();
  
  return (
    <div>
  
        <div>
          <Navbar female={female} male={male}></Navbar>
          <div className="flex mt-10 shadow-xl">
            <Routes>
              <Route
                path="/detection/:id"
                element={<Detection></Detection>}
              ></Route>
            </Routes>
            
            <Persons persons={persons}> </Persons>
          </div>
        </div>
      )
    </div>
  );
}

export default App;
