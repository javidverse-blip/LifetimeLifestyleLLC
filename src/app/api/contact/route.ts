import { NextResponse } from "next/server";
export async function POST(request: Request) {
  let form: FormData;
  try { form = await request.formData(); } catch { return NextResponse.json({ error: "Invalid form data" }, { status: 400 }); }
  if (!form.get("name") || !form.get("email") || !form.get("message")) return NextResponse.json({ error: "All fields are required" }, { status: 400 }); return NextResponse.json({ ok: true, message: "Contact message received" });
}
