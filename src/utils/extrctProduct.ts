export const loadProduct = (articles: any) => {
  let r = Object.entries(articles).map(([k, v]) => {
    return { [k]: v };
  });
  console.log({ r });

  return r.map((x) => {
    const product = apiCall(x[0]);
    return { product, qte: x[1] };
  });
};
const apiCall = async (id: any) => {
  const res = await fetch("/products/" + id);
  return await res.json();
};
