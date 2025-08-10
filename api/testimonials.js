// Serverless function for testimonials
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  // Demo data
  const testimonials = [
    { id: 1, name: 'John Doe', text: 'Great work!' },
    { id: 2, name: 'Jane Smith', text: 'Highly recommended.' }
  ];
  res.status(200).json(testimonials);
};
