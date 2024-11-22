export const urlToParamObject = (url) => {
    const currentUrl = new URL(url);
    const searchParams = new URLSearchParams(currentUrl.search);
    return Object.fromEntries(searchParams);
}