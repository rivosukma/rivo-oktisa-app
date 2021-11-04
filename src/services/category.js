import ApiRequest, { ApiUrl_Category, defaultHeaders } from "./request"

//sorry for not place API url in .env
export const getCategory = async(queryStr) => {
    const { data, error } = await ApiRequest.fetch(
        ApiUrl_Category,
        defaultHeaders,
        queryStr
    )
    if(error) return { response: [], status: 500, error }

    return {
        response: data?.data,
        status: 200
    }
}