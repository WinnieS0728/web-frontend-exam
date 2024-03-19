import { useQuery } from "@tanstack/react-query";
import api from "../../api";
export function useJobDetail({ jobId }) {
  const query = useQuery({
    queryKey: ["jobDetail", jobId],
    queryFn: () =>
      api.getJobDetail({
        jobId,
      }),
  });

  return query;
}
