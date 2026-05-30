import { useMemo } from 'react'
import { useEntriesStore } from '../store/entries'
import { getYear } from 'date-fns'

/**
 * Returns aggregated stats derived from the entries store.
 */
export function useStats() {
  const { entries } = useEntriesStore()

  return useMemo(() => {
    const total = entries.length
    const currentYear = new Date().getFullYear()
    const thisYear = entries.filter(
      (e) => getYear(new Date(e.createdAt)) === currentYear
    ).length

    const moodCounts = entries.reduce((acc, e) => {
      if (e.mood) acc[e.mood] = (acc[e.mood] ?? 0) + 1
      return acc
    }, {})

    const topMood = Object.entries(moodCounts).sort(([, a], [, b]) => b - a)[0]?.[0]

    const streak = (() => {
      if (!entries.length) return 0
      const days = new Set(entries.map((e) => e.createdAt.slice(0, 10)))
      let count = 0
      let d = new Date()
      while (days.has(d.toISOString().slice(0, 10))) {
        count++
        d.setDate(d.getDate() - 1)
      }
      return count
    })()

    return { total, thisYear, moodCounts, topMood, streak }
  }, [entries])
}
