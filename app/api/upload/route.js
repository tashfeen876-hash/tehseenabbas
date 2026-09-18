import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import path from "path";
import { connectDb } from "../../../lib/db.mjs";
import { UploadImage } from "../../../lib/models.mjs";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    const isImage = file.type?.startsWith("image/");
    if (!isImage) {
      return NextResponse.json({ error: "Only image files are allowed" }, { status: 400 });
    }
    if (file.size > 8 * 1024 * 1024) {
      return NextResponse.json({ error: "Image must be 8MB or smaller" }, { status: 413 });
    }

    const ext = path.extname(file.name || ".jpg") || ".jpg";
    const name = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}${ext}`;

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(`uploads/${name}`, file, { access: "public" });
      return NextResponse.json({ url: blob.url });
    }

    const data = Buffer.from(await file.arrayBuffer());
    await connectDb();
    const doc = await UploadImage.create({
      filename: name,
      contentType: file.type || "image/jpeg",
      data,
    });
    return NextResponse.json({ url: `/api/uploads/${doc._id}` });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}