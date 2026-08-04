import { NextResponse } from "next/server";
export async function POST(request: Request) { const form = await request.formData(); const name = form.get("name"); const email = form.get("email"); if (!name || !email) return NextResponse.json({ error: "Name and email are required" }, { status: 400 }); return NextResponse.json({ ok: true, message: "Subscription received", data: { name, email } }); }
