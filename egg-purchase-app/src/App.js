import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

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
    // Basic validation
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
    <div className="max-w-md mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Egg Purchase</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Egg Selection */}
            <div>
              <label className="block mb-2">Number of Eggs</label>
              <Select value={eggs.toString()} onValueChange={(val) => setEggs(parseInt(val))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select eggs" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 6, 12].map(num => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Eggs
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Payment Details */}
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
              <Input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                autoComplete="cc-number"
                required
              />
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Expiry (MM/YY)"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  autoComplete="cc-exp"
                  required
                />
                <Input
                  type="text"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  autoComplete="cc-csc"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Purchase Eggs
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Purchase Confirmation Dialog */}
      <Dialog open={purchaseComplete} onOpenChange={setPurchaseComplete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Purchase Confirmed</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Thank you for buying {eggs} eggs. Your account is now £{0.50 * eggs} lighter.
          </DialogDescription>
          <Button onClick={resetForm}>
            Buy More Eggs
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;