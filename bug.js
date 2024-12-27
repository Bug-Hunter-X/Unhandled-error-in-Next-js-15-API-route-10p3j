```javascript
// pages/api/data.js
export default function handler(req, res) {
  // Some asynchronous operation that might throw an error
  const data = fetchData(); // This could throw an error
  
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

async function fetchData() {
  // Simulate an asynchronous operation that might fail
  await new Promise(resolve => setTimeout(resolve, 1000));
  //Simulate a random error
  if (Math.random() < 0.5) {
    throw new Error('Failed to fetch data');
  }
  return { message: 'Data fetched successfully' };
}
```