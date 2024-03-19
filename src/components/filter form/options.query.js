import { useQuery } from "@tanstack/react-query";
import api from "../../api";
export function useOptions() {
  const query = useQuery({
    queryKey: ["options", "education", "salary"],
    queryFn: async () => {
      const educationList = await api.getEducationLevel();
      const salaryList = await api.getSalaryLevel();

      educationList.unshift({
        id: "0",
        label: "不拘",
      });

      salaryList.unshift({
        id: "0",
        label: "不拘",
      });

      return {
        education: educationList,
        salary: salaryList,
      };
    },
  });

  return query;
}
