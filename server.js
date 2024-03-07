import express from 'express';
import axios from 'axios'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/:formId/filteredResponses', async (req, res) => {
  const formId = req.params.formId;
  const apiKey = 'sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912';

  try {
    const filters = req.query.filters ? JSON.parse(req.query.filters) : [];
    const response = await fetchFilteredResponses(formId, apiKey, filters);

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching filtered responses:', error);
    res.status(500).send('Internal Server Error');
  }
});

async function fetchFilteredResponses(formId, apiKey, filters) {
  const url = `https://api.fillout.com/v1/forms/${formId}/responses`;
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };

  const response = await axios.get(url, { headers, params: { filters: JSON.stringify(filters) } });

  return response.data;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
