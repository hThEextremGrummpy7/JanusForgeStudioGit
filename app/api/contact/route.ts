// app/api/contact/route.ts

export async function POST(request: Request) {
  try {
    // 1. 拿前端傳來的 JSON
    const data = await request.json();

    // 2. 轉送到 n8n Webhook
    const res = await fetch(
      "https://hthegrumpy.app.n8n.cloud/webhook/312e7413-819d-4352-80a4-3b92fa8c5731",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    // 3. 如果 n8n 回的不是 2xx，當成錯誤處理
    if (!res.ok) {
      console.error("n8n webhook error:", res.status, await res.text());
      return new Response(
        JSON.stringify({ ok: false, status: res.status }),
        { status: 500 }
      );
    }

    // 4. 一切順利就回成功
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("contact api error:", err);
    return new Response(
      JSON.stringify({ ok: false, status: 500 }),
      { status: 500 }
    );
  }
}