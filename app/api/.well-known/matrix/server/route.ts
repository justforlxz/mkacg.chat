export const runtime = "edge";

import { NextResponse } from "next/server";

const GET = async (req: Request) => {
  return NextResponse.json(
    { "m.server": "matrix.mkacg.chat:4433" },
    { status: 200 },
  );
};

export { GET };
