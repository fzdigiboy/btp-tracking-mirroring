'use client'

import type { ComponentConfig } from '@measured/puck'
import React, { useState } from 'react'

export type PaginationProps = {
  totalPages: number
}

export const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const displayPages = pages.filter((page) => {
    if (page === 1 || page === totalPages) return true
    if (page >= currentPage - 1 && page <= currentPage + 1) return true
    return false
  })

  return (
    <div className="py-12 flex items-center justify-center gap-2">
      {/* Previous Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M12 4l-8 6 8 6V4z" />
        </svg>
      </button>

      {/* Page Numbers */}
      {displayPages.map((page, index) => {
        const showEllipsis =
          index > 0 && displayPages[index - 1] !== page - 1 && page !== totalPages

        return (
          <React.Fragment key={page}>
            {showEllipsis && (
              <span className="px-3 text-gray-400 dark:text-gray-600">...</span>
            )}
            <button
              onClick={() => setCurrentPage(page)}
              className={`min-w-[40px] h-10 px-4 rounded-lg font-medium text-sm transition-colors ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {page}
            </button>
          </React.Fragment>
        )
      })}

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
        disabled={currentPage === totalPages}
        className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 4v12l8-6-8-6z" />
        </svg>
      </button>
    </div>
  )
}

export const PaginationConfig: ComponentConfig<PaginationProps> = {
  fields: {
    totalPages: {
      type: 'number',
      label: 'Total Pages',
      min: 1,
    },
  },
  defaultProps: {
    totalPages: 8,
  },
  render: ({ totalPages }) => {
    return <Pagination totalPages={totalPages} />
  },
}
