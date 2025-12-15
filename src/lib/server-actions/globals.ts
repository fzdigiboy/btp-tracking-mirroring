"use server";

import { getPayloadClient } from "../payload";

export default async function getHeader() {
  try {
    const payload = await getPayloadClient();
    const response = await payload.findGlobal({
      slug: 'header',
    });
    return response;
  } catch (error) {
    console.error('Error fetching header:', error);
    return null; // Retourner null au lieu de crasher
  }
}

export async function getFooter() {
  try {
    const payload = await getPayloadClient();
    const response = await payload.findGlobal({
      slug: 'footer',
    });
    return response;
  } catch (error) {
    console.error('Error fetching footer:', error);
    return null;
  }
}