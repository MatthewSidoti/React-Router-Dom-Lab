import { useState } from 'react';

function MailboxForm({ addBox }) {
  const [boxholder, setBoxholder] = useState('');
  const [boxSize, setBoxSize] = useState('Small');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxholder, boxSize });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Boxholder Name:
        <input 
          type="text" 
          value={boxholder} 
          onChange={(e) => setBoxholder(e.target.value)} 
        />
      </label>
      <label>
        Box Size:
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Create Mailbox</button>
    </form>
  );
}

export default MailboxForm;
