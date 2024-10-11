import { useParams } from 'react-router-dom';

function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) return <h2>Mailbox Not Found!</h2>;

  return (
    <div>
      <h2>Mailbox #{selectedBox._id}</h2>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Size: {selectedBox.boxSize}</p>
    </div>
  );
}

export default MailboxDetails;
