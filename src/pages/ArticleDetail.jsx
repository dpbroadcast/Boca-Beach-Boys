import { useParams, Link } from 'react-router-dom'
import { articles } from '../data/articles'
import { games, getYouTubeId } from '../data/games'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="page-enter pt-24 pb-20 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="font-bebas text-5xl tracking-widest text-gray-700 mb-3">Article Not Found</div>
        <p className="text-gray-500 text-sm mb-6">This article doesn't exist or may have been removed.</p>
        <Link to="/articles" className="btn-outline text-xs">← Back to Articles</Link>
      </div>
    )
  }

  const game = article.gameId ? games.find((g) => g.id === article.gameId) : null
  const ytId = game ? getYouTubeId(game.youtubeReplayUrl) ?? getYouTubeId(game.youtubeStreamUrl) : null

  const [y, m, d] = article.date.split('-').map(Number)
  const dateStr = new Date(y, m - 1, d).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          to="/articles"
          className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#00C4E0] text-xs uppercase tracking-widest font-semibold mb-8 transition-colors"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Articles
        </Link>

        {/* Game context banner */}
        {game && (
          <div className="bg-[#0B1424] border border-white/5 rounded-sm px-5 py-4 mb-8 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="text-[10px] text-gray-600 font-bold uppercase tracking-widest mb-0.5">
                {game.isHome ? 'Home' : 'Away'} · {game.venue}
              </div>
              <div className="font-bebas text-xl tracking-widest text-white">
                {game.isHome ? 'VS' : '@'} {game.opponent}
              </div>
              {game.result && (
                <div
                  className={`font-bebas text-lg tracking-widest mt-0.5 ${
                    game.result.startsWith('W') ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {game.result}
                </div>
              )}
            </div>
            <div className="text-xs text-gray-500">{dateStr}</div>
          </div>
        )}

        {/* Hero image */}
        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-64 object-cover rounded-sm mb-8 opacity-90"
          />
        )}

        {/* Article header */}
        <div className="mb-8">
          <div className="text-[#00C4E0] text-xs font-bold uppercase tracking-widest mb-3">{dateStr}</div>
          <h1 className="font-bebas text-4xl md:text-5xl tracking-widest text-white leading-tight mb-4">
            {article.title}
          </h1>
          <div className="glow-line" />
        </div>

        {/* Body */}
        <div className="prose-article">
          <ArticleBody content={article.content} />
        </div>

        {/* Box Score */}
        {article.boxScore && <BoxScore boxScore={article.boxScore} />}

        {/* Replay embed */}
        {ytId && (
          <div className="mt-10">
            <h2 className="font-bebas text-2xl tracking-widest text-[#00C4E0] mb-4">Game Replay</h2>
            <div className="yt-embed rounded-sm overflow-hidden border border-white/5">
              <iframe
                src={`https://www.youtube.com/embed/${ytId}`}
                title="Game replay"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Footer nav */}
        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between">
          <Link to="/articles" className="btn-outline text-xs">← All Articles</Link>
          <Link to="/schedule" className="btn-outline text-xs">Season Schedule →</Link>
        </div>
      </div>
    </div>
  )
}

function BoxScore({ boxScore }) {
  return (
    <div className="mt-10 space-y-8">
      <h2 className="font-bebas text-2xl tracking-widest text-[#00C4E0]">Box Score</h2>

      {/* Batting */}
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Batting</div>
        <div className="overflow-x-auto rounded-sm border border-white/5">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0B1424] border-b border-white/5">
                <th className="text-left px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-500 w-48">Player</th>
                {['AB','H','HR','R','RBI','BB','SO'].map(col => (
                  <th key={col} className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-500 text-center">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {boxScore.batting.map((row, i) => (
                <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-[#0D1826]' : 'bg-[#0B1520]'}`}>
                  <td className="px-4 py-2.5 text-gray-200 font-medium">{row.name}</td>
                  <td className="px-3 py-2.5 text-center text-gray-300">{row.ab}</td>
                  <td className={`px-3 py-2.5 text-center font-semibold ${row.h > 0 ? 'text-white' : 'text-gray-500'}`}>{row.h}</td>
                  <td className={`px-3 py-2.5 text-center font-semibold ${row.hr > 0 ? 'text-[#00C4E0]' : 'text-gray-500'}`}>{row.hr}</td>
                  <td className="px-3 py-2.5 text-center text-gray-300">{row.r}</td>
                  <td className={`px-3 py-2.5 text-center font-semibold ${row.rbi > 0 ? 'text-green-400' : 'text-gray-500'}`}>{row.rbi}</td>
                  <td className="px-3 py-2.5 text-center text-gray-500">{row.bb}</td>
                  <td className={`px-3 py-2.5 text-center ${row.so > 0 ? 'text-red-400/70' : 'text-gray-500'}`}>{row.so}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pitching */}
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Pitching</div>
        <div className="overflow-x-auto rounded-sm border border-white/5">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0B1424] border-b border-white/5">
                <th className="text-left px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-500 w-48">Pitcher</th>
                {['IP','H','R','ER','BB','SO'].map(col => (
                  <th key={col} className="px-3 py-2.5 text-[10px] font-bold uppercase tracking-widest text-gray-500 text-center">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {boxScore.pitching.map((row, i) => (
                <tr key={i} className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-[#0D1826]' : 'bg-[#0B1520]'}`}>
                  <td className="px-4 py-2.5 text-gray-200 font-medium">
                    {row.name}
                    {row.note && <span className="ml-2 text-[10px] font-bold text-green-400 uppercase tracking-widest">{row.note}</span>}
                  </td>
                  <td className="px-3 py-2.5 text-center text-gray-300">{row.ip}</td>
                  <td className={`px-3 py-2.5 text-center ${row.h > 0 ? 'text-gray-300' : 'text-gray-500'}`}>{row.h}</td>
                  <td className={`px-3 py-2.5 text-center ${row.r > 0 ? 'text-red-400/80' : 'text-gray-500'}`}>{row.r}</td>
                  <td className={`px-3 py-2.5 text-center ${row.er > 0 ? 'text-red-400' : 'text-gray-500'}`}>{row.er}</td>
                  <td className="px-3 py-2.5 text-center text-gray-500">{row.bb}</td>
                  <td className={`px-3 py-2.5 text-center font-semibold ${row.so > 0 ? 'text-[#00C4E0]' : 'text-gray-500'}`}>{row.so}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function ArticleBody({ content }) {
  if (!content) return null

  const paragraphs = content.split('\n\n').filter(Boolean)

  return (
    <div className="space-y-5">
      {paragraphs.map((para, i) => {
        if (para.startsWith('## ')) {
          return (
            <h2 key={i} className="font-bebas text-2xl tracking-widest text-[#00C4E0] mt-8 first:mt-0">
              {para.replace('## ', '')}
            </h2>
          )
        }
        if (para.startsWith('# ')) {
          return (
            <h1 key={i} className="font-bebas text-3xl tracking-widest text-white mt-8 first:mt-0">
              {para.replace('# ', '')}
            </h1>
          )
        }
        return (
          <p key={i} className="text-gray-300 leading-relaxed text-base">
            {para}
          </p>
        )
      })}
    </div>
  )
}
