import { NextResponse } from "next/server";
import { connectDb } from "../../../../lib/db.mjs";
import { UploadImage } from "../../../../lib/models.mjs";

export const dynamic = "force-dynamic";

export async function GET(_req, ctx) {
  const { id } = ctx.params instanceof Promise ? await ctx.params : ctx.params;
  if (!id) return new NextResponse("Not found", { status: 404 });

  await connectDb();
  const doc = await UploadImage.findById(id).lean();
  if (!doc || !doc.data) return new NextResponse("Not found", { status: 404 });

  const raw = doc.data?.buffer ?? doc.data;
  const body = new Uint8Array(raw);
  return new NextResponse(body, {
    headers: {
      "Content-Type": doc.contentType || "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}