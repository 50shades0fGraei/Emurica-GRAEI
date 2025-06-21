```js
const { processDecision } = require("../lib/oracle/decisionLogic");
module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { scenario, options, intent, emotion } = req.body;
  const verdict = await processDecision({ scenario, options, intent, emotion });
  res.status(200).json({ verdict });
};
```
