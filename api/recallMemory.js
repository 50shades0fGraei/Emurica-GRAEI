``js
const { recallNode } = require("../lib/memory/memoryGraph");
module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { topic, user } = req.body;
  const memory = await recallNode({ topic, user });
  res.status(200).json({ memory });
};
```
