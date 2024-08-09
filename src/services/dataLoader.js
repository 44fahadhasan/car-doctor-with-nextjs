export const dataLoader = async (url) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);

  const data = res?.json();

  return data;
};
