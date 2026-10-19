import React, { useState, useEffect } from 'react';
import { gitHubConfig } from '../data/portfolioData';
import { Github } from './BrandIcons';
import { ExternalLink, Star, GitFork, ArrowUpRight, CheckCircle2, RefreshCw, Terminal, Layers } from 'lucide-react';

export default function GitHubShowcase() {
  const [repos, setRepos] = useState(gitHubConfig.featuredRepos);
  const [isLiveSynced, setIsLiveSynced] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [userProfile, setUserProfile] = useState({
    publicRepos: gitHubConfig.verifiedRepoCount,
    avatarUrl: 'https://avatars.githubusercontent.com/u/170263098?v=4',
    profileUrl: gitHubConfig.profileUrl,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        // Fetch public user stats (unauthenticated public endpoint)
        const userRes = await fetch(gitHubConfig.apiUrl);
        if (userRes.ok) {
          const userData = await userRes.json();
          if (isMounted && userData.public_repos) {
            setUserProfile({
              publicRepos: userData.public_repos,
              avatarUrl: userData.avatar_url,
              profileUrl: userData.html_url,
            });
          }
        }

        // Fetch recent repositories
        const reposRes = await fetch(`${gitHubConfig.apiUrl}/repos?sort=updated&per_page=8`);
        if (reposRes.ok) {
          const apiRepos = await reposRes.json();
          if (isMounted && Array.isArray(apiRepos) && apiRepos.length > 0) {
            // Map real API results, merging verified demo URLs if present
            const mapped = apiRepos.map((r) => {
              const matchedConfig = gitHubConfig.featuredRepos.find((f) => f.name.toLowerCase() === r.name.toLowerCase());
              return {
                name: r.name,
                url: r.html_url,
                description: r.description || matchedConfig?.description || 'Public engineering repository by Iman Ayaz.',
                language: r.language || matchedConfig?.language || 'Codebase',
                stars: r.stargazers_count,
                forks: r.forks_count,
                updatedAt: r.updated_at,
                hasDemo: matchedConfig?.hasDemo || false,
                demoUrl: matchedConfig?.demoUrl || null,
              };
            });
            setRepos(mapped);
            setIsLiveSynced(true);
          }
        }
      } catch (err) {
        // Seamless fallback to curated configuration on rate-limit or network disconnect
        console.log('[GitHub] Running in resilient curated configuration mode.');
      }
    }

    if (gitHubConfig.enableLiveSync) {
      fetchGitHubData();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter by language
  const filteredRepos = repos.filter((r) => {
    if (selectedLanguage === 'all') return true;
    const lang = (r.language || '').toLowerCase();
    return lang.includes(selectedLanguage.toLowerCase());
  });

  const formatDate = (isoString) => {
    if (!isoString) return '2026';
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch {
      return '2026';
    }
  };

  return (
    <section id="github-feed" className="py-24 relative bg-canvas-dark/40 dark:bg-canvas-dark/40 light:bg-slate-100/60 border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider mb-2">
              <Github className="w-3.5 h-3.5 text-amber-500" />
              <span>// 02.1 REPOSITORY REPOSITORIES TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              GitHub <span className="text-amber-500">Activity & Repositories</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
              Real-time feed connected directly to my public GitHub account. Every repository link points to authentic source code with zero fabricated metrics.
            </p>
          </div>

          {/* GitHub Profile Banner Card */}
          <div className="p-4 rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 shadow-sm flex items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/50 bg-canvas-dark flex items-center justify-center shrink-0">
                <img
                  src={userProfile.avatarUrl}
                  alt={gitHubConfig.username}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 block">
                  @{gitHubConfig.username}
                </span>
                <span className="text-[11px] text-slate-400">
                  {userProfile.publicRepos} Public Repositories
                </span>
              </div>
            </div>

            <a
              href={gitHubConfig.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 text-amber-500 hover:text-amber-400 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 transition-colors font-semibold"
            >
              <span>View Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Sync Status & Language Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 dark:text-slate-500 light:text-slate-600">Filter Language:</span>
            {['all', 'javascript', 'python', 'jupyter'].map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-2.5 py-1 rounded-md transition-colors capitalize ${
                  selectedLanguage === lang
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-canvas-card dark:bg-canvas-card light:bg-white text-slate-400 hover:text-slate-200 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200'
                }`}
              >
                {lang === 'all' ? 'All Languages' : lang}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <span className="flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isLiveSynced ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isLiveSynced ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
            </span>
            <span>{isLiveSynced ? 'LIVE GITHUB REST SYNC' : 'VERIFIED REPOSITORIES'}</span>
          </div>
        </div>

        {/* Repository Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredRepos.map((repo) => (
            <div
              key={repo.name}
              className="p-5 rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 shadow-sm flex flex-col justify-between hover:border-amber-500/50 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-amber-500 dark:text-amber-400 font-semibold truncate max-w-[150px]">
                    {repo.language || 'Codebase'}
                  </span>
                  
                  {repo.updatedAt && (
                    <span className="text-[10px] font-mono text-slate-500">
                      {formatDate(repo.updatedAt)}
                    </span>
                  )}
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors block break-words"
                  title={repo.name}
                >
                  {repo.name}
                </a>

                <p className="mt-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              {/* Card Bottom Links */}
              <div className="mt-4 pt-3 border-t border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-100 flex items-center justify-between gap-2 text-xs font-mono">
                {/* Working View Source Code Link */}
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-500 hover:text-amber-400 font-semibold"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>

                {/* Live Demo Link only when verified deployment exists */}
                {repo.hasDemo && repo.demoUrl && (
                  <a
                    href={repo.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-500 hover:text-emerald-400 font-semibold text-[11px]"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to explore all repositories */}
        <div className="mt-10 p-5 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-300 dark:text-slate-300 light:text-slate-700">
            <Terminal className="w-4 h-4 text-amber-500" />
            <span>Interested in reviewing my commit history and pull requests?</span>
          </div>

          <a
            href={gitHubConfig.repositoriesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>Explore All 27 Repositories on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
