import React from 'react'

interface SQLHighlighterProps {
  code: string
  className?: string
}

const keywords = [
  'SELECT', 'FROM', 'WHERE', 'JOIN', 'ON', 'AND', 'OR', 'NOT', 'IN', 'BETWEEN',
  'LIKE', 'ORDER', 'BY', 'GROUP', 'HAVING', 'COUNT', 'SUM', 'AVG', 'MIN', 'MAX',
  'AS', 'DISTINCT', 'NULL', 'IS', 'CREATE', 'TABLE', 'INSERT', 'INTO', 'VALUES',
  'UPDATE', 'SET', 'DELETE', 'DROP', 'ALTER', 'ADD', 'PRIMARY', 'KEY', 'FOREIGN',
  'REFERENCES', 'CONSTRAINT', 'CHECK', 'DEFAULT', 'INDEX', 'UNIQUE', 'NOT NULL',
  'INT', 'VARCHAR', 'TEXT', 'BOOLEAN', 'DATE', 'DATETIME', 'FLOAT', 'DOUBLE',
  'LEFT', 'RIGHT', 'INNER', 'OUTER', 'FULL', 'CROSS', 'NATURAL', 'USING',
  'LIMIT', 'OFFSET', 'ASC', 'DESC', 'UNION', 'ALL', 'EXISTS', 'CASE', 'WHEN',
  'THEN', 'ELSE', 'END', 'IF', 'REGEXP', 'CAST'
]

export default function SQLHighlighter({ code, className = '' }: SQLHighlighterProps) {
  const highlightSQL = (sql: string): React.ReactNode[] => {
    const lines = sql.split('\n')
    
    return lines.map((line, lineIndex) => {
      if (line.trim().startsWith('--')) {
        return (
          <div key={lineIndex} className="text-gray-500 italic">
            {line}
          </div>
        )
      }

      const tokens: React.ReactNode[] = []
      let remaining = line
      let keyIndex = 0

      while (remaining.length > 0) {
        let matched = false

        const stringMatch = remaining.match(/^'[^']*'/)
        if (stringMatch) {
          tokens.push(
            <span key={`${lineIndex}-${keyIndex++}`} className="text-amber-400">
              {stringMatch[0]}
            </span>
          )
          remaining = remaining.slice(stringMatch[0].length)
          matched = true
          continue
        }

        const numberMatch = remaining.match(/^\d+/)
        if (numberMatch) {
          tokens.push(
            <span key={`${lineIndex}-${keyIndex++}`} className="text-purple-400">
              {numberMatch[0]}
            </span>
          )
          remaining = remaining.slice(numberMatch[0].length)
          matched = true
          continue
        }

        for (const keyword of keywords) {
          const regex = new RegExp(`^(${keyword})\\b`, 'i')
          const match = remaining.match(regex)
          if (match) {
            tokens.push(
              <span key={`${lineIndex}-${keyIndex++}`} className="text-pink-400 font-semibold">
                {match[0].toUpperCase()}
              </span>
            )
            remaining = remaining.slice(match[0].length)
            matched = true
            break
          }
        }

        if (!matched) {
          const identifierMatch = remaining.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)
          if (identifierMatch) {
            if (identifierMatch[0].startsWith('G04_')) {
              tokens.push(
                <span key={`${lineIndex}-${keyIndex++}`} className="text-cyan-400">
                  {identifierMatch[0]}
                </span>
              )
            } else {
              tokens.push(
                <span key={`${lineIndex}-${keyIndex++}`} className="text-blue-300">
                  {identifierMatch[0]}
                </span>
              )
            }
            remaining = remaining.slice(identifierMatch[0].length)
            continue
          }

          const symbolMatch = remaining.match(/^[.,;()*=<>!+\-\/]/)
          if (symbolMatch) {
            tokens.push(
              <span key={`${lineIndex}-${keyIndex++}`} className="text-gray-400">
                {symbolMatch[0]}
              </span>
            )
            remaining = remaining.slice(1)
            continue
          }

          const spaceMatch = remaining.match(/^\s+/)
          if (spaceMatch) {
            tokens.push(
              <span key={`${lineIndex}-${keyIndex++}`}>
                {spaceMatch[0]}
              </span>
            )
            remaining = remaining.slice(spaceMatch[0].length)
            continue
          }

          tokens.push(
            <span key={`${lineIndex}-${keyIndex++}`} className="text-gray-300">
              {remaining[0]}
            </span>
          )
          remaining = remaining.slice(1)
        }
      }

      return (
        <div key={lineIndex}>
          {tokens}
        </div>
      )
    })
  }

  return (
    <pre className={`font-mono text-sm leading-relaxed ${className}`}>
      <code>{highlightSQL(code)}</code>
    </pre>
  )
}
