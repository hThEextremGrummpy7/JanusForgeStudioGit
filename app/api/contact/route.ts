// app/api/contact/route.ts

export async function POST(request: Request) {
    const data = await request.json();
  
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
  
    if (!res.ok) {
      return new Response(
        JSON.stringify({ ok: false, status: res.status }),
        { status: 500 }
      );
    }
  
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
    });
  }