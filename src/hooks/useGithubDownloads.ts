import { useEffect, useState } from 'react';

interface GitHubRelease {
  assets: {
    name: string;
    download_count: number;
  }[];
}

const useGitHubDownloads = (repoOwner: string, repoName: string) => {
  const [downloads, setDownloads] = useState<number | null>(null);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        // Fetch all releases instead of just the latest release
        const response = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}/releases`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub releases');
        }
        const data: GitHubRelease[] = await response.json();

        // Calculate total downloads from all releases and all assets
        let totalDownloads = 0;
        data.forEach(release => {
          release.assets.forEach(asset => {
            totalDownloads += asset.download_count;
          });
        });

        setDownloads(totalDownloads);
      } catch (error) {
        console.error('Error fetching GitHub downloads:', error);
        setDownloads(null);
      }
    };

    fetchDownloads();

    // Clean-up function (optional)
    return () => {
      // Perform any cleanup if needed
    };
  }, [repoOwner, repoName]);

  return downloads;
};

export default useGitHubDownloads;
