// tslint:disable:variable-name
import axios from "axios";

const client_id = "2_mHOn4u";
const client_secret = "wIXoprABphFtldwLBFna0crBSNbea6R8MlMgcC2vd6UVGFef2lwHSZn2ss14VqYT";
let token: string | null = null;

export async function searchGifs(searchTerm: string): Promise<any> {
    if (!token) {
        const tokenResponse = await requestToken();
        token = tokenResponse.access_token;
    }

    const response = await axios.get(
        `https://api.gfycat.com/v1/gfycats/search?search_text=${searchTerm}&count=50`,
        { headers: { Authorization: `Bearer ${token}`} },
    );

    return response.data;
}

export async function requestToken(): Promise<any> {
    const response = await axios.post("https://api.gfycat.com/v1/oauth/token", {
        client_id,
        client_secret,
        grant_type: "client_credentials"
    });

    return response.data;
}
