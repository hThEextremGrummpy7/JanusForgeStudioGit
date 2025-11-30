// app/api/contact/route.ts

export async function POST(req: Request) {
  try {
    // 1. 拿前端傳來的表單資料
    const data = await req.json();

    // 2. 轉送到 n8n webhook
    const n8nResponse = await fetch(
      "https://hthegrumpy.app.n8n.cloud/webhook/312e7413-819d-4352-80a4-3b92fa8c5731", // 你的 n8n webhook URL
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!n8nResponse.ok) {
      const text = await n8nResponse.text();
      console.error("n8n error:", n8nResponse.status, text);

      return new Response(
        JSON.stringify({ ok: false, error: "n8n request failed" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3. 成功就回前端一個 ok
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("API /api/contact error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}