import React, { useEffect, useState } from "react";
import "../index.css";
import axios from "axios";

const DetectedImage = () => {
  const [appState, setAppState] = useState({
    loading: true,
    posts: null,
  });
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/user/predictionDetail/")
      .then((response) => {
        setUserCount(response.data.prediction_count);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axiosInstance.get().then((res) => {
      const allPosts = res.data;
      setAppState({ loading: false, posts: allPosts });
      console.log(res.data);
    });
  }, []);

  return (
    <div className="flex flex-wrap ">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <img
            src={post.detected_image}
            alt={post.disease}
            className="card-image"
          />
          <div className="card-content">
            <h1 className="font-bold">
              <span className="text-red-900">Disease:</span> {post.disease}
            </h1>
            <h1 className="font-bold">
              <span className="text-gray-800">Location:</span> {post.locations}
            </h1>
          </div>
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      ))}
    </div>
  );
};

export default DetectedImage;
