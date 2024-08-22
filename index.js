const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Webhook endpoint to capture Adobe Sign events
app.post('/webhook', (req, res) => {
  // Capture the event data sent by Adobe Sign
  //const eventData = req.body;
  var eventData = req.body.data;
  console.log(JSON.stringify(eventData));
  // Log the received event data
  console.log('Received Adobe Sign webhook event:', eventData);

  // Process the event data as needed
  // Example: Handle specific events
  if (eventData.event && eventData.event.eventType === 'AGREEMENT_ACTION_COMPLETED') {
    console.log('Agreement action completed:', eventData);
  }

  // Respond with 200 OK to acknowledge receipt
  res.status(200).send('Webhook received successfully');
});

// Start the server on port 443 (or another port if needed)
const PORT = process.env.PORT || 8443;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.status(200).send("Home Page");
})
