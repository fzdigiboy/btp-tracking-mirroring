// components/Pagination.tsx
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Assurez-vous d'avoir installé 'lucide-react'

// Définition des propriétés que le composant attend
interface PaginationProps {
  // Numéro de la page actuelle (commence à 1)
  currentPage: number; 
  // Nombre total de pages disponibles
  totalPages: number;
  // Fonction de rappel appelée lors du changement de page
  onPageChange: (page: number) => void;
  // Indique s'il existe une page précédente
  hasPrevPage: boolean;
  // Indique s'il existe une page suivante
  hasNextPage: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  hasPrevPage,
  hasNextPage,
}: PaginationProps) {
  // Crée un tableau d'indices de page [1, 2, 3, ..., totalPages]
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Fonction pour gérer le clic sur le bouton précédent
  const goToPrevPage = () => {
    if (hasPrevPage) {
      onPageChange(currentPage - 1);
    }
  };

  // Fonction pour gérer le clic sur le bouton suivant
  const goToNextPage = () => {
    if (hasNextPage) {
      onPageChange(currentPage + 1);
    }
  };

  // Logique pour afficher uniquement un sous-ensemble des numéros de page
  const getPageNumbersToShow = () => {
    const maxPagesToShow = 5;
    const start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const end = Math.min(totalPages, start + maxPagesToShow - 1);

    // Ajuster le début si nous sommes près de la fin
    if (end - start + 1 < maxPagesToShow) {
      const newStart = Math.max(1, end - maxPagesToShow + 1);
      return Array.from({ length: end - newStart + 1 }, (_, i) => newStart + i);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageNumbersToShow();

  if (totalPages <= 1) {
    return null; // N'affiche rien s'il n'y a qu'une seule page ou moins
  }

  return (
    <div className="flex items-center justify-center space-x-2 py-8">
      {/* Bouton Précédent */}
      <button
        onClick={goToPrevPage}
        disabled={!hasPrevPage}
        className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
          hasPrevPage
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            : 'bg-gray-50 text-gray-400 cursor-not-allowed'
        }`}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="hidden sm:inline ml-1 text-sm font-medium">Précédent</span>
      </button>

      {/* Rendu des numéros de page */}
      <nav className="flex items-center space-x-1" aria-label="Pagination">
        {/* Afficher les points de suspension au début si nécessaire */}
        {pageNumbers[0] > 1 && (
          <span className="px-3 py-2 text-sm text-gray-500">...</span>
        )}

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            aria-current={pageNumber === currentPage ? 'page' : undefined}
            className={`
              px-4 py-2 text-sm font-medium rounded-lg transition-colors
              ${
                pageNumber === currentPage
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }
            `}
          >
            {pageNumber}
          </button>
        ))}

        {/* Afficher les points de suspension à la fin si nécessaire */}
        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <span className="px-3 py-2 text-sm text-gray-500">...</span>
        )}
      </nav>

      {/* Bouton Suivant */}
      <button
        onClick={goToNextPage}
        disabled={!hasNextPage}
        className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
          hasNextPage
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            : 'bg-gray-50 text-gray-400 cursor-not-allowed'
        }`}
      >
        <span className="hidden sm:inline mr-1 text-sm font-medium">Suivant</span>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}