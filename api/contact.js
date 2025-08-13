// Serverless function for contact form
export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'POST') {
    // Demo: just echo back the data
    return res.status(200).json({ message: 'Contact form submitted', data: req.body });
  }
  res.status(405).json({ error: 'Method not allowed' });
};
