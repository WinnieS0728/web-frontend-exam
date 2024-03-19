export async function getJobList({ per_page, page, ...props }) {
  try {
    const searchParams = new URLSearchParams({
      pre_page: per_page,
      page,
      ...props,
    });
    const res = await fetch("/api/v1/jobs?" + searchParams);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("getJobList", error);
    throw error;
  }
}
