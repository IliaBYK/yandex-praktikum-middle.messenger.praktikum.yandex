// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (request, response) {
	response.sendFile(path.resolve(__dirname + '/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is launched on PORT ${PORT}`);
});
