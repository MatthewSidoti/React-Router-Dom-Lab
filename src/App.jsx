import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import './App.css'; 

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [theme, setTheme] = useState('light'); 
  const addBox = ({ boxholder, boxSize }) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxholder,
      boxSize,
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <NavBar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element= {<h2>This Page Does Not Exist!</h2>}/>
      </Routes>
      <br></br>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
}

export default App;
