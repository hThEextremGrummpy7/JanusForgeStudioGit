// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  
  console.log("ENV:", process.env.N8N_WEBHOOK_URL);

  try {
    const body = await req.json();

    const webhookUrl =
      process.env.N8N_WEBHOOK_URL ||
      "https://hthegrumpy.app.n8n.cloud/webhook/312e7413-819d-4352-80a4-3b92fa8c5731";

    const n8nRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await n8nRes.text();

    // 在 Cloudflare / localhost 都會印在 server log
    console.log("[/api/contact] n8n status:", n8nRes.status);
    console.log("[/api/contact] n8n response:", text);

    if (!n8nRes.ok) {
      return NextResponse.json(
        {
          success: false,
          from: "n8n",
          status: n8nRes.status,
          error: text || "n8n error",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.error("[/api/contact] error:", err);
    return NextResponse.json(
      {
        success: false,
        from: "api",
        error: err?.message || "Server error",
      },
      { status: 500 }
    );
  }
}

