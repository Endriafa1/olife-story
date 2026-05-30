import { useEntriesStore } from '../store/entries'
import EntryCard from './EntryCard'
import { format } from 'date-fns'

function groupByMonth(entries) {
  return entries.reduce((acc, entry) => {
    const key = format(new Date(entry.createdAt), 'MMMM yyyy')
    if (!acc[key]) acc[key] = []
    acc[key].push(entry)
    return acc
  }, {})
}

export default function Timeline({ onSelect }) {
  const { entries } = useEntriesStore()

  if (!entries.length) {
    return (
      <div className="text-center text-zinc-500 py-20">
        <p className="text-4xl mb-3">📖</p>
        <p>No entries yet. Start writing your story.</p>
      </div>
    )
  }

  const grouped = groupByMonth(entries)

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([month, items]) => (
        <section key={month}>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
            {month}
          </h2>
          <div className="space-y-3">
            {items.map((entry) => (
              <EntryCard key={entry.id} entry={entry} onClick={onSelect} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
