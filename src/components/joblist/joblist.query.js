import { useQuery } from "@tanstack/react-query";
export function useJobList({ page, device }) {
  const query = useQuery({
    queryKey: [
      "jobList",
      {
        page,
        device,
      },
    ],
    queryFn: async ({ company_name, education_level, salary_level }) => {
      try {
        const educationList = await getEducationLevel();
        const salaryList = await getSalaryLevel();
        const jobList = await getJobList(
          device === "phone"
            ? {
                per_page: 4,
                page,
              }
            : {
                per_page: 6,
                page,
                company_name,
                education_level,
                salary_level,
              }
        );

        const dataSet = jobList?.data.map((job) => {
          const education = educationList.find(
            (education) => Number(education.id) === job.educationId
          ).label;
          const salary = salaryList.find(
            (salary) => Number(salary.id) === job.salaryId
          ).label;
          return {
            ...job,
            education,
            salary,
          };
        });

        return {
          ...jobList,
          data: dataSet,
        };
      } catch (error) {
        console.error("mutation error", error);
        throw error;
      }
    },
  });

  async function getJobList({ per_page, page, ...props }) {
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

  async function getEducationLevel() {
    try {
      const res = await fetch("/api/v1/educationLevelList");
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("getEducation", error);
      throw error;
    }
  }

  async function getSalaryLevel() {
    try {
      const res = await fetch("/api/v1/salaryLevelList");
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("getSalary", error);
      throw error;
    }
  }

  return query;
}
