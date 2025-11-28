import { NextResponse } from "next/server";
import { getPayloadClient } from "@/lib/payload";

export async function GET() {
  const payload = await getPayloadClient();

  const projectsTypes = await payload.find({
    collection: "project-types",
    limit: 100,
  });

  // Retourne seulement les types uniques
  const types = [...new Set(projectsTypes.docs.map(p => p.titre))];

  return NextResponse.json(types);
}

