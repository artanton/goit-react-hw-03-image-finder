import { Component } from 'react';
import { ImgStyled } from './ImageItemStyled';
import { ImageModal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;
    const { isModalOpen } = this.state;
    return (
      <div>
        <ImgStyled onClick={this.openModal} src={webformatURL} alt={tags} />
        <ImageModal
          BigImage={largeImageURL}
          isModalOpen={isModalOpen}
          closeModal={this.closeModal}
          Tag={tags}
        />
      </div>
    );
  }
}
