export const getBaseUrl = () => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://user-manage-m53i.onrender.com/api/v1/"
  );
};
