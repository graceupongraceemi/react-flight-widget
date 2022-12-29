const PORT = 8000;
const axios = require('axios').default;
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.get('/flights', (req, res) => {
  const options = {
    url: 'https://3a617db3-2714-4aa4-9fab-a4cf30c5e979-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures',
    headers: {
      accept: 'application/json',
      'X-Cassandra-Token':
        'AstraCS:YwLMyGGfNagwAmIkWxKLkHuA:230b50347d7752f6029bbe141e866cc18fbcd6c38ce1f85d69725d60070b87d9'
    }
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => console.log('running on port ' + PORT));
