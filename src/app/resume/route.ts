import { NextResponse } from "next/server";
import { createReadStream } from "fs";
import { statSync } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Arnab_Majumdar-Resume.pdf");
  const stat = statSync(filePath);

  return new NextResponse(createReadStream(filePath) as any, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Length": stat.size.toString(),
      "Content-Disposition": "attachment; filename=\"Arnab_Majumdar-Resume.pdf\"",
    },
  });
}
