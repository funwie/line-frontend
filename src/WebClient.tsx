import User from "./types/User";

type JsonResponse = {data: User, error: boolean};

class WebClient{
    static async getJsonAsync(url:string): Promise<JsonResponse> {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return {data, error:false};
        } else {
            return {data:{id:1, firstName:'', lastName:'', avatar:'', email:''}, error:true};
        }
    }
}

export default WebClient;