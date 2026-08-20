import { useState } from "react";

export const FALLBACK_POSTER = "/icons.svg";

const failedPosters = new Set();

function getSafePoster(src, failedSrc) {
  if (!src || src === "N/A" || src === failedSrc || failedPosters.has(src)) {
    return FALLBACK_POSTER;
  }

  return src;
}

function MoviePoster({ src, alt, className }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const poster = getSafePoster(src, failedSrc);

  function handleError() {
    failedPosters.add(src);
    setFailedSrc(src);
  }

  return (
    <img
      className={className}
      src={poster}
      alt={alt}
      onError={poster === FALLBACK_POSTER ? undefined : handleError}
    />
  );
}

export default MoviePoster;
