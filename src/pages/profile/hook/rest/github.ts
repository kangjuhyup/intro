import { useEffect, useState } from "react";

interface GetRepoListRequest {
  username: string;
  token?: string;
}

interface GetRepoListResponse {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
}

const useGitHub = () => {
  const [repos, setRepos] = useState<GetRepoListResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/kangjuhyup/repos`,
        {}
      );

      if (!response.ok) {
        throw new Error("Github 저장소 목록 호출 실패.");
      }

      const data: GetRepoListResponse[] = await response.json();
      setRepos(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return { fetchRepos, repos, loading, error };
};

export default useGitHub;
