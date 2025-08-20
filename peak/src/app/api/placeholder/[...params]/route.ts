import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { params: string[] } }
) {
  const paramsArray = params?.params || [];
  const [width = '600', height = '400', text = 'Peak'] = paramsArray;
  
  // Create a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f4ede0"/>
      <rect x="10" y="10" width="${parseInt(width) - 20}" height="${parseInt(height) - 20}" 
            fill="none" stroke="#af6f3e" stroke-width="2" rx="8"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" 
            font-family="system-ui, sans-serif" font-size="24" fill="#331f15">
        ${text}
      </text>
      <text x="50%" y="60%" text-anchor="middle" dy=".3em" 
            font-family="system-ui, sans-serif" font-size="14" fill="#925735">
        ${width} × ${height}
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
