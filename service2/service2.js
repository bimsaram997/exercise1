const express = require('express');
const { execSync } = require('child_process');
const os = require('os');

const app = express();
const port = 8080;

function getSystemInfo() {
  const ip = os.networkInterfaces()['eth0'] ? os.networkInterfaces()['eth0'][0].address : 'Unavailable';
  const processes = execSync('ps -ax').toString();
  const diskSpace = execSync('df -h').toString();
  const uptime = execSync('cat /proc/uptime').toString();
  return { ip, processes, diskSpace, uptime };
}

app.get('/', (req, res) => {
  const info = getSystemInfo();
  res.json(info);
});

app.listen(port, () => {
  console.log(`Service2 is listening on http://0.0.0.0:${port}`);
});
