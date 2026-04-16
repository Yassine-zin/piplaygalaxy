export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  let body = req.body;

  if (typeof body === "string") {
    body = JSON.parse(body);
  }

  const { paymentId, txid } = body;

  if (!paymentId || !txid) {
    return res.status(400).json({ error: "Missing data" });
  }

  return res.status(200).json({
    completed: true
  });
}
