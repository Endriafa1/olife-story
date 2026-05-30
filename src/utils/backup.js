/**
 * Export all entries as a JSON file download.
 */
export function exportEntries(entries) {
  const blob = new Blob(
    [JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), entries }, null, 2)],
    { type: 'application/json' }
  )
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `olife-backup-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

/**
 * Parse a JSON backup file and return the entries array.
 * Throws if the file format is unrecognised.
 */
export async function importEntries(file) {
  const text = await file.text()
  const data = JSON.parse(text)
  if (!Array.isArray(data.entries)) {
    throw new Error('Invalid backup file: missing entries array')
  }
  return data.entries
}
