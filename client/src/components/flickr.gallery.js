import { useEffect, useState } from "react";
import "../styles/pages.scss";

const FlickrGallery = (props) => {
  const [stream, setSream] = useState([]);

  const getFlickrImageURL = (photo, size) => {
    let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
    if (size) {
      // Configure image size
      url += `_${size}`;
    }
    url += ".jpg";
    return { url, title: photo.title };
  };

  const data = {
    method: "flickr.people.getPhotos",
    api_key: "cbc7c1c62558ba89f40830614624427a",
    user_id: "mekkatt",
    per_page: 12,
    format: "json",
    nojsoncallback: 1,
  };
  const parameters = new URLSearchParams(data);
  const url = `https://api.flickr.com/services/rest/?${parameters}`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        const photos = data.photos.photo.map((photo) => {
          return getFlickrImageURL(photo, "q");
        });
        setSream(photos);
      });
  }, []);

  return (
    <>
      <h3>Flickr</h3>
      <div className="d-flex flex-wrap align-self-stretch image-gallery">
        {stream.map((data, index) => (
          <div className="image " key={index}>
            <img src={data.url} alt={data.title} title={data.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FlickrGallery;
