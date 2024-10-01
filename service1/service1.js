const express = require('express');
const { execSync } = require('child_process');
const os = require('os');
const axios = require('axios');

const app = express();
const port = 8199;

function getSystemInfo() {
  const ip = os.networkInterfaces()['eth0'] ? os.networkInterfaces()['eth0'][0].address : 'Unavailable';
  const processes = execSync('ps -ax').toString();
  const diskSpace = execSync('df -h').toString();
  const uptime = execSync('cat /proc/uptime').toString();
  return { ip, processes, diskSpace, uptime };
}

app.get('/', async (req, res) => {
  try {
    // Get Service1 info
    const service1Info = getSystemInfo();

    // Fetch Service2 info
    const service2Response = await axios.get('http://service2:8080');
    const service2Info = service2Response.data;

    // Return combined info
    res.json({ Service1: service1Info, Service2: service2Info });
  } catch (error) {
    res.status(500).send('Error fetching data from Service2');
  }
});

app.listen(port, () => {
  console.log(`Service1 is listening on http://0.0.0.0:${port}`);
});
