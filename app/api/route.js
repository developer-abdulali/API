// GET method of API
const { NextResponse } = require("next/server");

const data = [{ name: "Ali", class: "CNC" },{ name: "Mubashir", class: "CNC" }]

export async function GET(req) {
  const url = req.nextUrl.searchParams.get('employeeName');
  const newData = data.filter((d) => {
    return(
      d.name == url && d
    )
  });
  console.log(newData, "new data")
  return NextResponse.json(newData)
}
export async function POST(req) {
  const request = await req.json()
  data.push(request)
  return NextResponse.json(data);
}
export async function PUT(req) {
  const request = await req.json();
  return NextResponse.json([request]);
}
export async function PATCH(req) {
  const request = await req.json();
  return NextResponse.json([request]);
}
export async function DELETE(req) {
  return NextResponse.json({});
}
