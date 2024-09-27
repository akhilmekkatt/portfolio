/* import { useEffect, useState } from "react";
import "../styles/pages.scss";

const IGGallery = (props) => {
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
  const url = `https://www.instagram.com/akhilmekkatt`;

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
      <h3>Feeds</h3>
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

export default IGGallery;
 */
import React, { useState, useEffect } from "react";

const InstagramPosts = () => {
  const [posts, setPosts] = useState([]);
  const TOKEN = "ae4504abcc2577c1f98227e337aee588";

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      const url = `/ig-posts`;
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }

        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error.message);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div>
      <h2>Your Instagram Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img src={post.thumbnail_url} alt={post.caption} />
            <p>{post.caption}</p>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              View on Instagram
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstagramPosts;
