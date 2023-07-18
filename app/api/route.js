
// GET method of API

import { NextResponse } from "next/server";

// const { NextResponse } = require("next/server");

// export async function GET(){
//     return(
//         NextResponse.json({name : "Ali", class : "CNC"})
//     )
// }



// POST method of API

export async function POST(req){
  const request = await req.json()
    return NextResponse.json([request])
}
