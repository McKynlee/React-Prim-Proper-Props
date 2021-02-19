import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestList from '../GuestList/GuestList';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';
import GuestForm from '../GuestForm/GuestForm';
import PartyLeader from '../PartyLeader/PartyLeader';

function App() {
  let [guestList, setGuestList] = useState([]);
  let [newGuestName, setNewGuestName] = useState('');
  let [newGuestMeal, setNewGuestMeal] = useState('false');

  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = () => {
    axios.post('/guests',
      {
        name: newGuestName,
        kidsMeal: newGuestMeal
      })
      .then(response => {
        // clear inputs
        setNewGuestName('');
        setNewGuestMeal(false);

        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };

  const deleteGuest = (guestId) => {
    console.log('in deleteGuest', guestId);
    console.log('guestList:', guestList);

    axios.delete(`/guests/${guestId}`)
      .then(response => {
        console.log('guest deleted');
        getGuests();
      }).catch(error => {
        console.log('error deleting guest');
        alert('error deleting guest');
      })

  } // end deleteGuest

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newGuestName) {
      addGuest();
    }
    else {
      alert('The new guest needs a name!');
    }
  }

  console.log(newGuestMeal)
  return (
    <div className="App">
      <Header />
      <PartyLeader leader={guestList[0]} />
      <GuestForm
        newGuestName={newGuestName}
        newGuestMeal={newGuestMeal}
        setNewGuestName={setNewGuestName}
        setNewGuestMeal={setNewGuestMeal}
        handleSubmit={handleSubmit}
        deleteGuest={deleteGuest}
      />
      <GuestList guestList={guestList}
        deleteGuest={deleteGuest} />
      <DinnerSupplies count={guestList.length} />
      <Footer />
    </div>
  );
}

export default App;
