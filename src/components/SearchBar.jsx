export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mb-6">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">🔍</span>
      <input
        type="text"
        placeholder="Search entries..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg pl-9 pr-4 py-2
                   text-sm placeholder:text-zinc-500 focus:outline-none focus:border-violet-500"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 text-xs"
        >
          ✕
        </button>
      )}
    </div>
  )
}
