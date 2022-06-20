const url = "https://fakestoreapi.com"
const getData = async () => {
    const response = await fetch(`${url}/products`)
    const data = await response.json();
    return data;
}
export { getData }