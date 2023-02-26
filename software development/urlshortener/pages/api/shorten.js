import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const longUrl = req.body.longUrl;
    const shortUrl = `https://myshortener.com/${uuidv4().slice(0, 6)}`;

    // Store the original and shortened URLs in a database
    // For this example, we'll use a JSON file as the database
    const urls = require('../../db.json');
    urls.push({ longUrl, shortUrl });
    require('fs').writeFileSync('./db.json', JSON.stringify(urls));

    res.status(200).json({ shortUrl });
  } else {
    res.status(405).end();
  }
}
