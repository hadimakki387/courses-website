const getRandomTexts = (count:number) => {
  const texts = [];
  for (let i = 0; i < count; i++) {
    texts.push(`Random Text ${i + 1}`);
  }
  return texts;
};

export async function GET() {
  const randomTexts = getRandomTexts(10);
  return new Response(JSON.stringify(randomTexts));
}

export async function POST(req: any) {
    
console.log(req);
    
    
 
    
}
