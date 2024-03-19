export async function getEducationLevel() {
  try {
    const res = await fetch("/api/v1/educationLevelList");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("getEducation", error);
    throw error;
  }
}
