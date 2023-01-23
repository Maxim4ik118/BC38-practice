import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

function ContactsPage() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name,
      number,
    };
    dispatch(addContact(formData));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Number:
          <input
            type="text"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default ContactsPage;
