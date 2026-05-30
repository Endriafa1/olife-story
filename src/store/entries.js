import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

export const useEntriesStore = create(
  persist(
    (set, get) => ({
      entries: [],

      addEntry: (entry) => set((state) => ({
        entries: [
          { id: uuidv4(), createdAt: new Date().toISOString(), ...entry },
          ...state.entries,
        ],
      })),

      updateEntry: (id, updates) => set((state) => ({
        entries: state.entries.map((e) =>
          e.id === id ? { ...e, ...updates, updatedAt: new Date().toISOString() } : e
        ),
      })),

      deleteEntry: (id) => set((state) => ({
        entries: state.entries.filter((e) => e.id !== id),
      })),

      getById: (id) => get().entries.find((e) => e.id === id),

      getByYear: (year) =>
        get().entries.filter(
          (e) => new Date(e.createdAt).getFullYear() === year
        ),
    }),
    { name: 'olife-entries' }
  )
)
