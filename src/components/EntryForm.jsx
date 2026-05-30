import { useState } from 'react'
import { useEntriesStore } from '../store/entries'

const MOODS = ['happy', 'excited', 'neutral', 'tired', 'sad']
const MOOD_EMOJI = { happy: '😊', sad: '😔', neutral: '😐', excited: '🤩', tired: '😴' }

export default function EntryForm({ onSave }) {
  const { addEntry } = useEntriesStore()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [mood, setMood] = useState('neutral')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addEntry({ title: title.trim(), body: body.trim(), mood })
    setTitle('')
    setBody('')
    setMood('neutral')
    onSave?.()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="What happened today?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2
                   text-sm placeholder:text-zinc-500 focus:outline-none focus:border-violet-500"
        maxLength={120}
      />
      <textarea
        placeholder="Tell your story..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={5}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2
                   text-sm placeholder:text-zinc-500 focus:outline-none focus:border-violet-500 resize-none"
      />
      <div className="flex items-center gap-2">
        {MOODS.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMood(m)}
            className={\`text-xl transition-transform \${mood === m ? 'scale-125' : 'opacity-40 hover:opacity-80'}\`}
            title={m}
          >
            {MOOD_EMOJI[m]}
          </button>
        ))}
        <button
          type="submit"
          className="ml-auto bg-violet-600 hover:bg-violet-500 text-white text-sm
                     px-5 py-2 rounded-lg font-medium transition-colors"
        >
          Save entry
        </button>
      </div>
    </form>
  )
}
