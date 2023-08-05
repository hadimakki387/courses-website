import prisma from "@/lib/prisma";


export async function GET() {
  const sections = await prisma.section.findMany()
  console.log(sections)
  return new Response(JSON.stringify(sections));
}
