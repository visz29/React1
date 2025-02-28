import React, { useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";

const ffmpeg = createFFmpeg({ log: true });

const Merge = () => {
  const [video, setVideo] = useState(null);
  const [audio, setAudio] = useState(null);
  const [mergedVideo, setMergedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadFFmpeg = async () => {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }
  };

  const handleMerge = async () => {
    await loadFFmpeg();
    setLoading(true);

    ffmpeg.FS("writeFile", "video.mp4", await fetchFile(video));
    ffmpeg.FS("writeFile", "audio.mp3", await fetchFile(audio));

    await ffmpeg.run(
      "-i",
      "video.mp4",
      "-i",
      "audio.mp3",
      "-c:v",
      "copy",
      "-c:a",
      "aac",
      "-strict",
      "experimental",
      "output.mp4"
    );

    const data = ffmpeg.FS("readFile", "output.mp4");
    const videoBlob = new Blob([data.buffer], { type: "video/mp4" });
    const videoUrl = URL.createObjectURL(videoBlob);
    setMergedVideo(videoUrl);
    setLoading(false);
  };

  return (
    <div>
      <h2>Merge Audio & Video</h2>
      <input type="file" onChange={(e) => setVideo(e.target.files[0])} />
      <input type="file" onChange={(e) => setAudio(e.target.files[0])} />
      <button onClick={handleMerge} disabled={loading}>
        {loading ? "Merging..." : "Merge"}
      </button>

      {mergedVideo && (
        <div>
          <h3>Merged Video:</h3>
          <video src={mergedVideo} controls width="400"></video>
        </div>
      )}
    </div>
  );
};

export default Merge;
