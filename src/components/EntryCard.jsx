import { format } from 'date-fns'
import { useEntriesStore } from '../store/entries'

const MOOD_EMOJI = { happy: '😊', sad: '😔', neutral: '😐', excited: '🤩', tired: '😴' }

export default function EntryCard({ entry, onClick }) {
  const { deleteEntry } = useEntriesStore()

  return (
    <div
      onClick={() => onClick?.(entry)}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 cursor-pointer
                 hover:border-violet-500 transition-colors group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm truncate">{entry.title}</h3>
          <p className="text-zinc-400 text-xs mt-1 line-clamp-2">{entry.body}</p>
        </div>
        <span className="text-xl flex-shrink-0">{MOOD_EMOJI[entry.mood] ?? '📝'}</span>
      </div>
      <div className="flex items-center justify-between mt-3">
        <span className="text-zinc-500 text-xs">
          {format(new Date(entry.createdAt), 'MMM d, yyyy')}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); deleteEntry(entry.id) }}
          className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300
                     text-xs transition-opacity"
        >
          delete
        </button>
      </div>
    </div>
  )
}
