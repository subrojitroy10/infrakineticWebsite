'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from '@/components/ui/Icons'
import { statusColors } from '@/lib/colors'

export interface Column<T = any> {
  key: string
  header: string
  width?: string | number
  sortable?: boolean
  render?: (val: any, row: T) => React.ReactNode
}

interface DataTableProps<T = any> {
  columns: Column<T>[]
  data: T[]
  keyField?: string
  onRowClick?: (row: T) => void
  sortable?: boolean
  pagination?: boolean
  pageSize?: number
  pageSizeOptions?: number[]
  emptyState?: {
    icon?: React.ReactNode
    title?: string
    description?: string
    action?: {
      label: string
      onClick?: () => void
    }
  }
  className?: string
  striped?: boolean
  hoverable?: boolean
  accentBar?: boolean
  selectable?: boolean
  selectedKeys?: (string | number)[]
  onSelectionChange?: (keys: (string | number)[]) => void
}

export default function DataTable({
  columns,
  data,
  keyField = 'id',
  onRowClick,
  sortable = true,
  pagination = true,
  pageSize = 10,
  pageSizeOptions = [10, 25, 50, 100],
  emptyState,
  className = '',
  striped = true,
  hoverable = true,
  accentBar = true,
  selectable = false,
  selectedKeys = [],
  onSelectionChange,
}: DataTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortConfig, setSortConfig] = useState<{ key: string | null; direction: 'asc' | 'desc' }>({
    key: null,
    direction: 'asc',
  })
  const [localPageSize, setLocalPageSize] = useState(pageSize)

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig.key || !sortable) return data
    return [...data].sort((a: any, b: any) => {
      const aVal = a[sortConfig.key!]
      const bVal = b[sortConfig.key!]
      if (aVal === bVal) return 0
      const direction = sortConfig.direction === 'asc' ? 1 : -1
      if (aVal === null || aVal === undefined) return direction
      if (bVal === null || bVal === undefined) return -direction
      return (aVal > bVal ? 1 : -1) * direction
    })
  }, [data, sortConfig, sortable])

  // Paginate data
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData
    const start = (currentPage - 1) * localPageSize
    return sortedData.slice(start, start + localPageSize)
  }, [sortedData, currentPage, localPageSize, pagination])

  const totalPages = pagination ? Math.ceil(sortedData.length / localPageSize) : 1
  const startIndex = pagination ? (currentPage - 1) * localPageSize + 1 : 1
  const endIndex = pagination ? Math.min(currentPage * localPageSize, sortedData.length) : sortedData.length

  const handleSort = (key: string) => {
    if (!sortable) return
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }))
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  const isSelected = (row: any) => selectedKeys.includes(row[keyField])
  const handleRowSelect = (row: any, e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, a, input, select, [role="button"]')) return
    if (selectable && onSelectionChange) {
      const newSelection = isSelected(row)
        ? selectedKeys.filter((k) => k !== row[keyField])
        : [...selectedKeys, row[keyField]]
      onSelectionChange(newSelection)
    }
    onRowClick?.(row)
  }

  const getRowAccentColor = (row: any) => {
    if (row.__accentColor) return row.__accentColor
    if (row.status) {
      return statusColors.dark[row.status] || '#211B27'
    }
    return '#211B27'
  }

  if (!data.length) {
    return (
      <div className={`rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center ${className}`}>
        <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white/40">
          {emptyState?.icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">{emptyState?.title || 'No data'}</h3>
        <p className="text-sm text-white/50 mb-4">{emptyState?.description || 'No records found.'}</p>
        {emptyState?.action && (
          <button onClick={emptyState.action.onClick} className="btn-primary">
            {emptyState.action.label}
          </button>
        )}
      </div>
    )
  }

  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" role="grid">
          <thead className="sticky top-0 z-10 bg-ink-900/80 backdrop-blur">
            <tr className="border-b border-white/10">
              {selectable && (
                <th className="w-12 px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedKeys.length === paginatedData.length && paginatedData.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        onSelectionChange?.(paginatedData.map((r: any) => r[keyField]))
                      } else {
                        onSelectionChange?.([])
                      }
                    }}
                    className="h-4 w-4 rounded border-white/20 bg-white/5 accent-gold-300"
                    aria-label="Select all rows"
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 py-3 text-left font-medium text-white/60 cursor-pointer select-none ${
                    sortable && col.sortable !== false ? 'hover:text-white' : ''
                  }`}
                  onClick={() => handleSort(col.key)}
                  style={{ width: col.width }}
                  aria-sort={sortConfig.key === col.key ? (sortConfig.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
                >
                  <div className="flex items-center gap-1.5">
                    <span>{col.header}</span>
                    {sortable && col.sortable !== false && sortConfig.key === col.key && (
                      <span className="text-gold-300" aria-hidden>
                        {sortConfig.direction === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {paginatedData.map((row: any, rowIndex: number) => (
                <motion.tr
                  key={row[keyField]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: rowIndex * 0.03 }}
                  className={`${striped && rowIndex % 2 === 1 ? 'bg-white/[0.02]' : ''} ${
                    hoverable ? 'transition-colors' : ''
                  } ${hoverable ? 'hover:bg-white/[0.04]' : ''} ${selectable ? 'cursor-pointer' : ''} ${
                    isSelected(row) ? 'bg-gold-300/5' : ''
                  }`}
                  onClick={(e) => handleRowSelect(row, e)}
                  style={{
                    ...(accentBar && { borderLeft: `3px solid ${getRowAccentColor(row)}` }),
                  }}
                >
                  {selectable && (
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={isSelected(row)}
                        onChange={() => {
                          const newSelection = isSelected(row)
                            ? selectedKeys.filter((k) => k !== row[keyField])
                            : [...selectedKeys, row[keyField]]
                          onSelectionChange?.(newSelection)
                        }}
                        className="h-4 w-4 rounded border-white/20 bg-white/5 accent-gold-300"
                        aria-label={`Select ${row.name || row[keyField]}`}
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 text-white/80">
                      {col.render
                        ? col.render(row[col.key], row)
                        : row[col.key] ?? '—'}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {pagination && totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 border-t border-white/10">
          <div className="text-sm text-white/50">
            Showing <span className="font-semibold text-white">{startIndex}</span> to{' '}
            <span className="font-semibold text-white">{endIndex}</span> of{' '}
            <span className="font-semibold text-white">{sortedData.length}</span> results
          </div>
          <div className="flex items-center gap-3">
            <select
              value={localPageSize}
              onChange={(e) => {
                setLocalPageSize(Number(e.target.value))
                setCurrentPage(1)
              }}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white focus:border-gold-300/50 focus:outline-none"
              aria-label="Results per page"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size} per page
                </option>
              ))}
            </select>
            <div className="flex items-center gap-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                      pageNum === currentPage
                        ? 'bg-gold-300 text-ink-900'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                    aria-label={`Page ${pageNum}`}
                    aria-current={pageNum === currentPage ? 'page' : undefined}
                  >
                    {pageNum}
                  </button>
                )
              })}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
