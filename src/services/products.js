import ApiRequest, { ApiUrl_Product, defaultHeaders } from "./request"

//sorry for not place API url in .env
export const getProduct = async(queryStr) => {
    const { data, error } = await ApiRequest.fetch(
        ApiUrl_Product,
        defaultHeaders,
        queryStr
    )
    if(error) return { response: [], status: 500, error }

    return {
        response: data?.data,
        status: 200
    }
}