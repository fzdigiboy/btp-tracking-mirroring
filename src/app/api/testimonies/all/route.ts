// // import { NextResponse } from "next/server"
// // import { getPayloadClient } from "@/lib/payload"

// // export async function GET() {
// //   const payload = await getPayloadClient()

// //   const response = await payload.find({
// //     collection: "testimonies",
// //     draft: false,
// //     limit: 100,
// //     depth: 2,
// //     sort: "-createdAt",
// //   })

// //   return NextResponse.json(response.docs)
// // }

// import { NextResponse } from 'next/server'
// import { getPayloadClient } from '@/lib/payload'

// export async function GET() {
//   try {
//     const payload = await getPayloadClient()

//     const response = await payload.find({
//       collection: 'testimonies',
//       draft: false,
//       limit: 100,
//       depth: 1,
//       sort: '-createdAt',
//       where: {
//         project: { exists: true },
//       },
//     })

//     // Toujours renvoyer un tableau, même vide
//     const docs = Array.isArray(response?.docs) ? response.docs : []

//     return NextResponse.json(docs)
//   } catch (err) {
//     console.error('Failed to fetch testimonies:', err)
//     return NextResponse.json({ error: 'Failed to fetch testimonies' }, { status: 500 })
//   }
// }


import { NextResponse } from "next/server";
import { getPayloadClient } from "@/lib/payload";

export async function GET(req: Request) {
  const payload = await getPayloadClient();
  const { searchParams } = new URL(req.url);
  const projectType = searchParams.get("projectType");

  // 🔍 Filtres dynamiques
  const where: any = {};
  if (projectType && projectType !== "All Projects") {
    // where["project.type"] = { equals: projectType };
    where["project.projectType.titre"] = { equals: projectType };
  }

  const testimonies = await payload.find({
    collection: "testimonies",
    where,
    depth: 2,
    limit: 100,
    sort: "-createdAt",
  });

  return NextResponse.json(testimonies.docs);
}
