export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  let body = req.body;

  if (typeof body === "string") {
    body = JSON.parse(body);
  }

  const { paymentId } = body;

  if (!paymentId) {
    return res.status(400).json({ error: "Missing paymentId" });
  }

  return res.status(200).json({
    approved: true
  });
}
