import { baseURL } from "@/utils/baseApi";

export const getIndexPageData = async () => {
    const categoryResponse = await fetch(`${baseURL}/api/category/all`)
    const categoryData = await categoryResponse.json();


    const blogResponse = await fetch('http://localhost:3000/api/blog/all')
    const blogData = await blogResponse.json();

    return {
        categoryData,
        blogData
    };

}

export const blogByCategoryLoader = async ({ params }) => {

    const response = await fetch(`${baseURL}/api/blog/category/${params.slug}`)
    const data = await response.json();

    return data;
}