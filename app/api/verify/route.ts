import { NextRequest, NextResponse } from "next/server";

const realFlags: Record<string, string> = {
  stage1: "FLAG{13t_stage1_secret}",
  stage1_trick: "FLAG{not_real_flag1}",
  stage2: "FLAG{hidden_in_image}",
  stage2_trick: "FLAG{not_real_flag2}",
};

export async function POST(req: NextRequest) {
  const { stage, flag } = await req.json();

  const trickKey = stage + "_trick";
  if (realFlags[trickKey] && realFlags[trickKey] === flag) {
    return NextResponse.json({ status: "trick" });
  }
  if (realFlags[stage] && realFlags[stage] === flag) {
    return NextResponse.json({ status: "ok" });
  }
  return NextResponse.json({ status: "error" });
}
