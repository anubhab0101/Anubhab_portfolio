const { storage } = require("./storage.js");
// Serverless function for contact form
export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'POST') {
    // Save contact to MemStorage
    storage.createContact(req.body).then(contact => {
      res.status(200).json({ message: 'Contact form submitted', data: contact });
    });
    return;
  }
  if (req.method === 'GET') {
    storage.getContacts().then(contacts => {
      res.status(200).json(contacts);
    });
    return;
  }
  res.status(405).json({ error: 'Method not allowed' });
};

