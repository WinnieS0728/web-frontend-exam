import { useQuery, keepPreviousData } from "@tanstack/react-query";
import api from "../../api/index";
import { useSearchParams } from "react-router-dom";
import { useResize } from "../../hooks/resize.hook";

export function useJobList({ per_page = 4 }) {
  const search = useSearchParams()[0];

  const { showFilter } = useResize();

  const page = search.get("page") || "1";
  const company_name = search.get("company_name") || "";
  const education_level = search.get("education_level") || "";
  const salary_level = search.get("salary_level") || "";

  const query = useQuery({
    queryKey: [
      "jobList",
      page,
      per_page,
      showFilter,
      {
        company_name,
        education_level,
        salary_level,
      },
    ],
    placeholderData: keepPreviousData,
    queryFn: async () => {
      try {
        const educationList = await api.getEducationLevel();
        const salaryList = await api.getSalaryLevel();
        const jobList = await api.getJobList(
          showFilter
            ? {
                per_page,
                page,
                company_name,
                education_level: education_level === "0" ? "" : education_level,
                salary_level: salary_level === "0" ? "" : salary_level,
              }
            : {
                per_page,
                page,
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

  return query;
}
