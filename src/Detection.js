import React, { useEffect, useState } from 'react';
import { db } from "./firebase.init";
import { getDatabase, onValue, ref } from "firebase/database";
import { useParams } from 'react-router-dom';

const Detection = (props) => {
  const [user, setUser] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");

  const {id} = useParams();

  useEffect(() => {
    const query = ref(db, `/`);
    return onValue(query, (snapshot) => {
      const datas = snapshot.val();
      if (snapshot.exists()) {
        const filtered_data = datas.filter(data => {
          if(data.ID === id){
            return true;
          }
        });
        
        setUser(filtered_data[0].Name);
        setLocation(filtered_data[0].Location);
        setDate(filtered_data[0].Date);
        setTime(filtered_data[0].Time);
        setImage("/images/"+filtered_data[0].Name+".jpg");
      }
    });
  }, [id]);

    return (
        <div className="ml-16">
        <div className="hero-content lg:flex-row-reverse">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl ml-8 " 
          width="220"
        />
          
          <div>
          
            <h1 className="text-2xl font-bold">{id}</h1>
            <h1 className="text-2xl font-bold py-2">Person Detected</h1>
            <p className="">Name: {user}</p>
            <p className="">Location: {location}</p>
            <p className="">Date: {date}</p>
            <p className="">Time: {time}</p>
            <p className="">Description: {user} detected at {location} on {date}</p>
           
          </div>
        </div>
      </div>
    );
};

export default Detection;