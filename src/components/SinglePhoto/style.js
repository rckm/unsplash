import styled from "styled-components";

export const SinglePhotoStyle = styled.section`
  position: relative;
  display: flex;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const PhotoSection = styled.div`
  flex: 1;
  padding: 20px;
  figure {
    margin-block-end: 0;
    margin-block-start: 0;
    margin-inline-end: 0;
    margin-inline-start: 0;
  }
  .photo-section__item img {
    border-radius: 7px;
    max-width: 100%;
    box-shadow: 6px 5px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const PhotoInfoStyle = styled.div`
  position: relative;
  flex: 1;
  padding: 20px;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  .article {
    font-size: 2rem;
  }
  .description {
    padding: 20px 0px;
    text-decoration: underline;
  }

  .return::before {
    content: "";
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    height: 30px;
    opacity: 0.4;
    background: url("https://image.flaticon.com/icons/svg/70/70460.svg")
      no-repeat;
    transition: 0.5s all;
    cursor: pointer;
  }

  .return:hover::before {
    opacity: 1;
  }

  .uploader-info {
    margin: 0;
    padding: 0;
  }
  .uploader-info li {
    list-style-type: none;
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px 0px;
  }

  .uploader-info li:nth-child(2) {
    flex-direction: column;
    align-items: flex-start;
  }

  .uploader-info__thumbnail {
    border-radius: 50%;
    margin-right: 20px;
  }

  .uploader-info__name {
    display: flex;
    flex-direction: column;
  }

  .uploader-info__name span {
    padding-top: 10px;
  }

  .uploader-info__links {
    display: flex;
    align-items: center;
  }
  .uploader-info__links a {
    margin-right: 20px;
    display: flex;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
    opacity: 0.4;
    transition: 0.5s all;
  }

  .uploader-info__links a:hover {
    opacity: 1;
  }

  .uploader-info__links a img {
    margin-right: 20px;
    width: 20%;
  }

  .uploader-info__bio {
    border: 3px solid #4f5b66;
    border-radius: 7px;
    padding: 20px 10px;
  }
`;
