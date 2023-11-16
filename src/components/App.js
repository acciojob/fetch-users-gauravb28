import React, { useEffect, useState } from 'react';
import 'regenerator-runtime/runtime';
import './../styles/App.css';
import axios from 'axios';

const App = () => {
  const [people, setPeople] = useState([]);

  const getUsers = async () => {
    // const res = await fetch('https://reqres.in/api/users');
    // const data = await res.json();
    const data = await axios.get('https://reqres.in/api/users');
    console.log(data.data.data);
    setPeople(data.data.data);
    console.log(process.env.YOUTUBE_KEY);
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <header className="nav">
        <h1>Blue Whales</h1>
        <button className="btn" onClick={getUsers}>
          Get User List
        </button>
      </header>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {people.length === 0 ? (
            <tr>
              <td>
                <b>No data found to display.</b>
              </td>
            </tr>
          ) : (
            people.map((person, index) => {
              return (
                <tr key={index}>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                  <td>{person.email}</td>
                  <td>
                    <img src={person.avatar} alt="" />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
