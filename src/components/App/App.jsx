import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import s from './App.module.css';

class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
};
    
  addContact = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  }
  
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  //   toggleCompleted = contactId => {
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.map(contact =>
  //       contact.id === contactId ? { ...contact, completed: !contact.completed } : contact,
  //     ),
  //   }));
  // };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  }

  //   getVisibleContact = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.text.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  render() {
  
    return (
      <div className={s.form}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList 
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
          // onToggleCompleted={this.toggleCompleted}
        />
      </div>
    )
}
};

export default App;


