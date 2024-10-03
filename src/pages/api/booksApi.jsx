/* METHOD ONE : json-server api  */ 
/* 在github get自己的.json */
/* 這檔案放在'scr/pages/api/books.jsx' */
// import axios from 'axios';

// export default async function handler(req, res) {
//   try {
//     const response = await axios.get('https://kenleyli666.github.io/booksApi/books.json');
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching the books data' });
//   }
// }

import axios from 'axios';

export default async function handler(req, res) {
  const booksUrl = 'https://kenleyli666.github.io/booksApi/books.json';

  try {
    const response = await axios.get(booksUrl);
    const books = response.data;
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Error fetching books data' });
  }
}

/* 或者 METHOD TWO : Api Router*/
/* 一定要絕對路徑 'src/pages/api/books.json' */

// import fs from 'fs';
// import path from 'path';

// const jsonFilePath = path.resolve(process.cwd(), 'src/pages/api/books.json');    

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//       if (err) {
//         console.error('Error reading the JSON file:', err);
//         return res.status(500).json({ error: 'Error reading the JSON file' });
//       }

//       try {
//         const books = JSON.parse(data);
//         res.status(200).json(books);
//       } catch (parseError) {
//         console.error('Error parsing JSON:', parseError);
//         res.status(500).json({ error: 'Error parsing JSON' });
//       }
//     });
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

