export const runtime = "edge";

import { NextResponse } from "next/server";

const GET = async (req: Request) => {
  return NextResponse.json(
    {
      "m.homeserver": {
        base_url: "https://matrix.mkacg.chat:4433",
      },
      "m.identity_server": {
        base_url: "https://vector.im",
      },
      "org.matrix.msc3575.proxy": {
        url: "https://slidingsync.mkacg.chat:4433",
      },
    },
    { status: 200 },
  );
};

export { GET };
