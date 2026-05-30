import { useState } from 'react'
import Timeline from './components/Timeline'
import EntryForm from './components/EntryForm'

export default function App() {
  const [view, setView] = useState('timeline') // 'timeline' | 'new'

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-bold tracking-tight">olife story</h1>
          <p className="text-zinc-500 text-xs mt-0.5">your personal timeline</p>
        </div>
        <button
          onClick={() => setView(view === 'new' ? 'timeline' : 'new')}
          className="bg-violet-600 hover:bg-violet-500 text-white text-sm
                     px-4 py-2 rounded-lg font-medium transition-colors"
        >
          {view === 'new' ? '← Back' : '+ New entry'}
        </button>
      </header>

      {/* Main */}
      {view === 'new' ? (
        <div>
          <h2 className="font-semibold mb-4">New entry</h2>
          <EntryForm onSave={() => setView('timeline')} />
        </div>
      ) : (
        <Timeline onSelect={() => {}} />
      )}
    </div>
  )
}
