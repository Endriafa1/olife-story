import { useMemo } from 'react'
import { useEntriesStore } from '../store/entries'

/**
 * Returns entries filtered by a search query (title + body, case-insensitive).
 */
export function useSearch(query = '') {
  const { entries } = useEntriesStore()
  return useMemo(() => {
    if (!query.trim()) return entries
    const q = query.toLowerCase()
    return entries.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        (e.body && e.body.toLowerCase().includes(q))
    )
  }, [entries, query])
}
