import { useEffect, useState } from "react";
import FlickrGallery from "../components/flickr.gallery";
import InstagramPosts from "../components/ig.gallery";

const WorksPage = (props) => {
  return (
    <div>
      <InstagramPosts />
      <FlickrGallery />
    </div>
  );
};

export default WorksPage;
