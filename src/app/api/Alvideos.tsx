import prisma from "@/lib/prisma";

export async function GET() {
  const videos = await prisma.video.findMany();
  return new Response(JSON.stringify(videos));
}
