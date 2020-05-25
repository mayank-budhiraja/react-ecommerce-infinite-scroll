import React from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
//import { NavDropdown, Container, Row, Col } from 'react-bootstrap';

const UnsplashImage = ({ url, key }) =>
React.createElement("div", { className: "image-item", key: key },
React.createElement("img", { src: url }));

let Content = () => {
  const [images, setImages] = React.useState([]);
  const [loaded, setIsLoaded] = React.useState(false);
    
  React.useEffect(() => {
    fetchImages();// eslint-disable-next-line
  }, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey =
    "vLrXQ9e2FJ62apw6TuIa6hmX0NbDMoQaGfWBRCsq1rM";
    // eslint-disable-next-line
    axios.
    // eslint-disable-next-line
    get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`).
    then(res => {
      setImages([...images, ...res.data]);
      setIsLoaded(true);

      console.log(images);
    });
  };

  return (
    React.createElement(InfiniteScroll, {
      dataLength: images,
      next: () => fetchImages(5),
      hasMore: true,
      loader:
      React.createElement("img", {
        src: "https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif",
        alt: "loading" }) },

    React.createElement("div", { className: "image-grid", style: { marginTop: "30px" } },
    loaded ?
    images.map((image, index) =>
    React.createElement(UnsplashImage, {
      url: image.urls.regular,
      key: index })) :
    "")));
};
  

export default Content