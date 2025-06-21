```js
const { analyzeEmotion } = require("../lib/ensembles/emotionFusion");
module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { input } = req.body;
  const result = await analyzeEmotion(input);
  res.status(200).json({ emotionalSignature: result });
};
```
