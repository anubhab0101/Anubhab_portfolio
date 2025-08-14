import { storage } from "./storage";
// Serverless function for testimonials
export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  storage.getTestimonials().then(testimonials => {
    res.status(200).json(testimonials);
  });
};
