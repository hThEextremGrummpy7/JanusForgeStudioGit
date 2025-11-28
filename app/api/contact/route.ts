// app/api/contact/route.ts

export async function POST(request: Request) {
    const data = await request.json();
  
    const res = await fetch(
      "https://hthegrumpy.app.n8n.cloud/webhook/2147b71b-bc5d-41ca-85ff-5ed4c2179767",
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