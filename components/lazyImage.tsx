import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyLoadedImageProps {
    imageUrl: string;
    width: number;
    height: number;
  }
  
const LazyImage: React.FC<LazyLoadedImageProps> = ({ imageUrl, width, height }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
    });
  
    const [isLoaded, setIsLoaded] = useState(false);
  
    const handleImageLoad = () => {
      setIsLoaded(true);
    };
  
    return (
      <div ref={ref}>
        {inView && (
          <img
            src={imageUrl}
            alt="Lazy loaded image"
            width={width}
            height={height}
            onLoad={handleImageLoad}
            style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
          />
        )}
      </div>
    );
  };
export default LazyImage;