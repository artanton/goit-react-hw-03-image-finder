import { ImageGalleryItem } from 'components/ImageGalleryItem.js/ImageItem';
import { GalleryItemStyled, GalleryWrapper } from './ImageGalleryStyled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryWrapper>
      {images.map(image => (
        <GalleryItemStyled key={image.id}>
          <ImageGalleryItem image={image} />
        </GalleryItemStyled>
      ))}
    </GalleryWrapper>
  );
};
