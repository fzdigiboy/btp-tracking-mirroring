"use server";

import { getPayloadClient } from "../payload";


export default async function getHeader(){
    const payload = await getPayloadClient()
    const response = await payload.findGlobal({
      slug: 'header',
    })
    return response
}


export async function getFooter(){
    const payload = await getPayloadClient()
    const response = await payload.findGlobal({
      slug: 'footer',
    })
    return response
}