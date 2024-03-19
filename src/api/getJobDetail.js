export async function getJobDetail({ jobId }) {
  try {
    const res = await fetch(`/api/v1/jobs/${jobId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("getJobDetail", error);
    throw error;
  }
}
