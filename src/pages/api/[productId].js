import axios from 'axios';

export default async function handler(req, res) {

  const { id } = req.query;
  console.log('Received ID:', id); // Log the received ID

  // Ensure id exists and is a number
  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }

  // 远程 JSON 文件的 URL
  const booksUrl = 'https://kenleyli666.github.io/booksApi/books.json';

  try {
    // 使用 axios 获取远程 JSON 文件
    const response = await axios.get(booksUrl, { timeout: 5000 }); // Set a timeout of 5 seconds
    const books = response.data;


    // 查找匹配的 ID
    const book = books.find(b => b.id === parseInt(id, 10));

    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    console.error('Error fetching books data:', error); // Log the error
    res.status(500).json({ message: 'Error fetching the books data' });
  }
}