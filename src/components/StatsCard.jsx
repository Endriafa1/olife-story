import { useStats } from '../hooks/useStats'

const MOOD_EMOJI = { happy: '😊', sad: '😔', neutral: '😐', excited: '🤩', tired: '😴' }

export default function StatsCard() {
  const { total, thisYear, topMood, streak } = useStats()

  const items = [
    { label: 'Total entries', value: total },
    { label: 'This year',     value: thisYear },
    { label: 'Top mood',      value: topMood ? MOOD_EMOJI[topMood] : '—' },
    { label: 'Day streak',    value: streak ? `${streak} 🔥` : '0' },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 mb-8">
      {items.map(({ label, value }) => (
        <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
          <p className="text-zinc-500 text-xs mb-1">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      ))}
    </div>
  )
}
