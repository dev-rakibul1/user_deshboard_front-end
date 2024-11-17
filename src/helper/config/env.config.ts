export const getBaseUrl = () => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:7000/api/v1/"
  );
};