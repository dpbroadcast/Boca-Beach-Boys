import { Link } from 'react-router-dom'
import { articles } from '../data/articles'

export default function Articles() {
  const sorted = [...articles].reverse()

  return (
    <div className="page-enter pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="text-[#00C4E0] text-xs font-bold uppercase tracking-widest mb-2">DP.Broadcast</div>
          <h1 className="font-bebas text-5xl md:text-6xl tracking-widest text-white">Articles</h1>
          <div className="glow-line mt-4" />
        </div>

        {sorted.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sorted.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ArticleCard({ article }) {
  const [y, m, d] = article.date.split('-').map(Number)
  const dateStr = new Date(y, m - 1, d).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Link
      to={`/articles/${article.slug}`}
      className="card flex flex-col overflow-hidden group"
    >
      {/* Thumbnail */}
      {article.imageUrl ? (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-44 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
      ) : (
        <div className="w-full h-44 bg-gradient-to-br from-[#1A2D5A] via-[#0D1B2E] to-[#0A1628] flex items-center justify-center border-b border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,174,239,0.08),transparent_70%)]" />
          <img
            src="/assets/icon.png"
            alt=""
            className="h-16 w-auto opacity-20"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col gap-2 p-5 flex-1">
        <div className="text-[10px] text-[#00C4E0] font-bold uppercase tracking-widest">{dateStr}</div>
        <h2 className="font-bebas text-xl tracking-widest text-white group-hover:text-[#00C4E0] transition-colors leading-snug">
          {article.title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
        <div className="pt-3 border-t border-white/5 mt-auto">
          <span className="text-[#00C4E0] text-xs font-semibold uppercase tracking-wider group-hover:underline">
            Read →
          </span>
        </div>
      </div>
    </Link>
  )
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="relative mb-6">
        <img
          src="/assets/icon.png"
          alt=""
          className="h-20 w-auto opacity-10"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>
      <div className="font-bebas text-4xl tracking-widest text-gray-700 mb-3">No Articles Yet</div>
      <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
        Game write-ups and recaps will appear here once the season kicks off on June 3rd.
      </p>
      <div className="mt-6">
        <Link
          to="/schedule"
          className="btn-outline text-xs"
        >
          View Schedule →
        </Link>
      </div>
    </div>
  )
}
