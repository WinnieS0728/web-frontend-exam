export async function getSalaryLevel() {
  try {
    const res = await fetch("/api/v1/salaryLevelList");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("getSalary", error);
    throw error;
  }
}
