import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export async function GET(req) {
  try {
    const uuid = uuidv4();
    const token = req.headers.get("Authorization") || "";
    const url = new URL(req.url);
    const offerId = url.searchParams.get("offerId");

    if (!offerId)
      return NextResponse.json({ error: "offerId missing" }, { status: 400 });
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
      "X-IBM-Client-Id": process.env.NEXT_PUBLIC_IBM_CLIENT_ID,
      "X-IBM-Client-Secret": process.env.NEXT_PUBLIC_IBM_CLIENT_SECRET,
      "x-fapi-interaction-id": uuid,
      "x-sbg-channel": process.env.NEXT_PUBLIC_SBG_CHANNEL_NAME,
    };

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/digital-offer-mymobiz/offer/${offerId}`,
      { headers: headers }
    );
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    const status = error.response?.status || 500;
    const message = error.response?.data || { error: "Internal Server Error" };
    return NextResponse.json(message, { status });
  }
}
