export default async function handler(req, res) {
  const path = req.query.path?.join("/") || "";

  const url = `https://YOUR_PROJECT_ID.supabase.co/${path}`;

  const response = await fetch(url, {
    method: req.method,
    headers: {
      ...req.headers,
      host: undefined
    },
    body: req.method !== "GET" && req.method !== "HEAD"
      ? JSON.stringify(req.body)
      : undefined
  });

  const data = await response.text();
  res.status(response.status).send(data);
}