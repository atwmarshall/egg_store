import React, { useState } from 'react';

function App() {
  const [eggs, setEggs] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !cardNumber || !expiry || !cvv) {
      alert('Please fill in all fields');
      return;
    }
    setPurchaseComplete(true);
  };

  const resetForm = () => {
    setPurchaseComplete(false);
    setName('');
    setEmail('');
    setCardNumber('');
    setExpiry('');
    setCvv('');
    setEggs(1);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Egg Purchase</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Number of Eggs:</label>
          <select
            value={eggs}
            onChange={(e) => setEggs(Number(e.target.value))}
          >
            {[1, 6, 12].map(num => (
              <option key={num} value={num}>{num} Eggs</option>
            ))}
          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Expiry (MM/YY)"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>

        <button type="submit">Purchase Eggs</button>
      </form>

      {purchaseComplete && (
        <div>
          <h2>Purchase Confirmed</h2>
          <p>Thank you for buying {eggs} eggs. Your account is now £{0.50 * eggs} lighter.</p>
          <button onClick={resetForm}>Buy More Eggs</button>
        </div>
      )}
    </div>
  );
}

export default App;