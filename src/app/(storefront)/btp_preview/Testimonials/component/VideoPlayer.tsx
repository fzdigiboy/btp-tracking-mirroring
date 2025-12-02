
"use client";
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

// Fonction pour déterminer le type de fichier
function getFileType(urlOrPath: string): 'image' | 'video' | 'unknown' {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.svg'];
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv', '.m3u8'];
  
  const lowerPath = urlOrPath.toLowerCase();
  
  if (imageExtensions.some(ext => lowerPath.endsWith(ext))) {
    return 'image';
  }
  
  if (videoExtensions.some(ext => lowerPath.endsWith(ext))) {
    return 'video';
  }
  
  return 'unknown';
}

interface MediaGalleryProps {
  mediaUrls: string[];
}

// Composant pour gérer le chargement avec fallback
function MediaPlayer({ url, index }: { url: string; index: number }) {
  const initialType = getFileType(url);
  const [currentType, setCurrentType] = useState<'video' | 'image' | 'error'>(
    initialType === 'unknown' ? 'video' : initialType
  );
  const [hasAttemptedVideo, setHasAttemptedVideo] = useState(false);
  const [hasAttemptedImage, setHasAttemptedImage] = useState(false);

  // Réinitialiser l'état quand l'URL change
  useEffect(() => {
    const newType = getFileType(url);
    setCurrentType(newType === 'unknown' ? 'video' : newType);
    setHasAttemptedVideo(false);
    setHasAttemptedImage(false);
  }, [url]);

  const handleVideoError = (error: any) => {
    console.log('Erreur vidéo:', error);
    if (currentType === 'video' && !hasAttemptedVideo) {
      setHasAttemptedVideo(true);
      console.log('Tentative de chargement en tant qu\'image...');
      setTimeout(() => {
        setCurrentType('image');
      }, 100);
    }
  };

  const handleImageError = () => {
    console.log('Erreur image');
    if (currentType === 'image' && !hasAttemptedImage) {
      setHasAttemptedImage(true);
      console.log('Affichage du message d\'erreur...');
      setTimeout(() => {
        setCurrentType('error');
      }, 100);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden shadow-lg">
      {currentType === 'video' ? (
        <div key={`video-${url}-${index}`} className="relative w-full h-full bg-slate-900">
          <ReactPlayer
            key={url}
            src={url}
            controls
            autoPlay={true}
            width="100%"
            height="100%"
            playing={false}
            onError={handleVideoError}
            style={{
              width: "100%",
              aspectRatio: "16/9",
            }}
          />
        </div>
      ) : currentType === 'image' ? (
        <div key={`image-${url}-${index}`} className="relative w-full h-full bg-slate-800">
          <img
            key={url}
            src={url}
            alt={`Média ${index + 1}`}
            className="w-full h-full object-contain"
            onError={handleImageError}
          />
        </div>
      ) : (
        <div className="relative w-full h-full bg-slate-700 flex flex-col items-center justify-center gap-4 p-8">
          <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-white text-lg font-medium">Impossible de charger le média</p>
          <p className="text-gray-400 text-sm text-center max-w-md">
            Le fichier n&apos;a pas pu être chargé. Vérifiez l&apos;URL ou le format du fichier.
          </p>
        </div>
      )}
    </div>
  );
}

// Composant pour les miniatures avec fallback
function ThumbnailPreview({ url, index, isSelected, onClick }: { 
  url: string; 
  index: number; 
  isSelected: boolean;
  onClick: () => void;
}) {
  const type = getFileType(url);
  const [thumbnailType, setThumbnailType] = useState<'video' | 'image' | 'error'>(
    type === 'unknown' ? 'image' : type
  );
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      // Si l'image échoue, essayer de charger comme vidéo
      if (thumbnailType === 'image') {
        setThumbnailType('video');
      } else {
        setThumbnailType('error');
      }
    }
  };

  return (
    <div 
      className={`w-32 h-32 md:w-full md:h-40 shrink-0 overflow-hidden rounded-xl cursor-pointer transition-all ${
        isSelected ? 'ring-4 ring-blue-500' : 'hover:opacity-80'
      }`}
      onClick={onClick}
    >
      {thumbnailType === 'error' ? (
        <div className="w-full h-full bg-slate-700 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      ) : thumbnailType === 'video' ? (
        <div className="relative w-full h-full bg-slate-800">
          <video 
            src={url} 
            className="w-full h-full object-cover"
            muted
            preload="metadata"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
            <span className="text-3xl">▶️</span>
          </div>
        </div>
      ) : (
        <img
          src={url}
          alt={`Miniature ${index + 1}`}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      )}
    </div>
  );
}

export default function MediaGallery({ mediaUrls }: MediaGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);
  
  const handleThumbnailClick = (index: number) => {
    if (index === selectedIndex) {
      // Si on clique sur l'élément déjà sélectionné, forcer le rechargement
      setRefreshKey(prev => prev + 1);
    } else {
      setSelectedIndex(index);
    }
  };
  
  if (!mediaUrls || mediaUrls.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        Aucun média à afficher
      </div>
    );
  }

  const selectedMedia = mediaUrls[selectedIndex];
  const isSingleMedia = mediaUrls.length === 1;

  return (
    <div className="mb-12">
      <div className="grid grid-cols-12 gap-4 h-auto md:h-[600px]">
        {/* Conteneur principal */}
        <div className={`${isSingleMedia ? 'col-span-12' : 'col-span-12 md:col-span-8'} h-full overflow-hidden rounded-xl relative`}>
          <MediaPlayer key={`media-${selectedIndex}-${selectedMedia}-${refreshKey}`} url={selectedMedia} index={selectedIndex} />
        </div>

        {/* Miniatures */}
        {!isSingleMedia && (
          <div className="col-span-12 md:col-span-4 flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto scrollbar-hide pb-2 md:pb-0">
            {mediaUrls.map((url, index) => (
              <ThumbnailPreview
                key={index}
                url={url}
                index={index}
                isSelected={index === selectedIndex}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}