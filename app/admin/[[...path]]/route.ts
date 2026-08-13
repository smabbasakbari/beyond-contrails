import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  const { path: segments = [] } = await params;

  const fileName = segments.join("/");

  let targetFile: string;

  if (!fileName) {
    targetFile = "index.html";
  } else if (fileName === "config.yml") {
    targetFile = "config.yml";
  } else {
    return new Response("Not Found", { status: 404 });
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "admin",
    targetFile
  );

  try {
    const file = await readFile(filePath);

    const contentType =
      targetFile === "config.yml"
        ? "text/yaml; charset=utf-8"
        : "text/html; charset=utf-8";

    return new Response(file, {
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch {
    return new Response("Not Found", { status: 404 });
  }
}