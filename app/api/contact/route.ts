// app/api/contact/route.ts
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // 這裡換成你真正的 n8n webhook URL
    const n8nRes = await fetch(
      "https://hthegrumpy.app.n8n.cloud/webhook-test/312e7413-819d-4352-80a4-3b92fa8c5731",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!n8nRes.ok) {
      const text = await n8nRes.text();
      console.error("n8n error:", n8nRes.status, text);

      return new Response(
        JSON.stringify({ ok: false, error: "n8n request failed" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

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