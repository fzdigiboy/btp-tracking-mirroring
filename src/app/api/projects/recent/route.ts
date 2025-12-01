import { NextResponse } from "next/server"
import { getPayloadClient } from "@/lib/payload"

export async function GET() {
  const payload = await getPayloadClient()

  const response = await payload.find({
    collection: "projects",
    draft: false,
    limit: 3,
    depth: 2,
    sort: "-createdAt",
  })

  return NextResponse.json(response.docs)
}

