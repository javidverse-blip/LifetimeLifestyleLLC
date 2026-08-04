import { NextResponse } from "next/server";
export async function POST(request: Request) { const form = await request.formData(); if (!form.get("name") || !form.get("email") || !form.get("message")) return NextResponse.json({ error: "All fields are required" }, { status: 400 }); return NextResponse.json({ ok: true, message: "Contact message received" }); }
