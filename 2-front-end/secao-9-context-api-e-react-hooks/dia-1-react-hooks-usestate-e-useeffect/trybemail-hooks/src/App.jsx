import { useState } from 'react';
import './App.css';
import { INITIAL_EMAILS } from './data/emails';

function App() {
  const setStatus = ({target}) => {
    const id = Number(target.id)
    if (target.classList.contains('read-button')) {
      const newArray = emails.map((e) => {
        return (e.id === id) ? {...e, status: 1} : e;
      });
      target.parentNode.classList.remove('unread-email');
      target.parentNode.classList.add('read-email');
      setEmails(newArray);
    } else {
      const newArray = emails.map((e) => {
        target.parentNode.classList.remove('read-email');
        target.parentNode.classList.add('unread-email');
        return (e.id === id) ? {...e, status: 0} : e;
      });
      setEmails(newArray);
    }
  }

  const [ emails, setEmails ] = useState(INITIAL_EMAILS);
  return (
    <main>
      <h1>TrybeMail</h1>
      <section>
        <button
          id="mark-all-read"
        >
          Marcar todas como lidas
        </button>
        <button
          id="mark-all-unread"
        >
          Marcar todas como não-lidas
        </button>
      </section>
      <section>
        {
          emails.map((email) => (
            <div key={email.id} className="unread-email">
              <h3>{email.title}</h3>
              <button
                id={email.id}
                onClick={setStatus}
                className="read-button"
              >
                Lida
              </button>
              <button
                id={email.id}
                onClick={setStatus}
                className="not-read-button"
              >
                Não-lida
              </button>
            </div>
          ))
        }
      </section>
    </main>
  );
}

export default App;
