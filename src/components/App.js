import 'modern-normalize';
import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { fetchImages } from './Handler';
import { QueryForm } from './Form/Form';
import { ImageGallery } from './ImageGalery/ImageGallery';
import { Circles } from 'react-loader-spinner';
import { LoaderWrap, Load, Searchbar, Wrapper, LoadWrap } from './AppStyled';

export class App extends Component {
  state = {
    images: [],
    dateQuery: '',
    currentPage: 1,
    isLoading: false,
    totalPages: 0,
  };

  /**
   *Methods
   */

  handleSubmit = newQuery => {
    if (newQuery === '') {
      return;
    }
    this.setState({
      dateQuery: `${Date.now()}/${newQuery}`,
      currentPage: 1,

      images: [],
      totalPages: 0,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      currentPage:
        prevState.currentPage < this.state.totalPages
          ? prevState.currentPage + 1
          : prevState.currentPage,
    }));
  };

  /**
   * Update
   */

  async componentDidUpdate(prevProps, prevState) {
    const { dateQuery, currentPage } = this.state;
    if (
      prevState.dateQuery !== dateQuery ||
      prevState.currentPage !== currentPage
    ) {
      this.setState({ isLoading: true });

      try {
        const fetchedImages = await fetchImages(dateQuery, currentPage);
        this.setState(prevState => ({
          images: [...prevState.images, ...fetchedImages.hits],
          totalPages: Math.ceil(Number(fetchedImages.totalHits) / Number(12)),
        }));
      } catch (error) {
        alert('Error fetching images:', error);
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }

  render() {
    const { isLoading, images, currentPage, totalPages } = this.state;
    return (
      <Wrapper>
        <header>
          <Searchbar>
            <QueryForm onSubmit={this.handleSubmit}></QueryForm>
          </Searchbar>
        </header>

        <div>
          {isLoading && (
            <LoaderWrap>
              <Circles
                height="80"
                width="80"
                color="#3f51b5"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </LoaderWrap>
          )}
          {images.length > 0 && <ImageGallery images={images} />}
        </div>

        <LoadWrap>
          {images.length > 0 && currentPage < totalPages && (
            <Load onClick={this.handleLoadMore}>Load more</Load>
          )}
        </LoadWrap>

        <GlobalStyle />
      </Wrapper>
    );
  }
}
