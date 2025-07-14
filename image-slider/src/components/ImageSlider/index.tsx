import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
interface ImageSliderProps {
  url: string;
  limit: number;
}
const ImageSlider = ({ url, limit }: ImageSliderProps) => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<Image[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImages(url: string) {
    try {
      setLoading(true);

      const response = await fetch(`${url}?$page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  function handleNext() {
    setCurrentSlide(currentSlide === images?.length - 1 ? 0 : currentSlide + 1);
  }

  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images?.length - 1 : currentSlide - 1);
  }

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="container">
          <BsArrowLeftCircleFill
            size={40}
            className="arrow arrow-left"
            onClick={() => handlePrev()}
          />

          {images && images.length > 0
            ? images?.map((image, index) => (
                <img
                  key={image.id}
                  src={image.download_url}
                  className={
                    currentSlide === index ? "current-image" : "hide-image"
                  }
                />
              ))
            : null}

          <BsArrowRightCircleFill
            size={40}
            className="arrow arrow-right"
            onClick={() => handleNext()}
          />
          <span className="cirle-indicators">
            {images && images.length > 0
              ? images?.map((_, index) => (
                  <button
                    onClick={() => setCurrentSlide(index)}
                    className={
                      currentSlide === index
                        ? "current-indicator"
                        : "current-indicator inactive"
                    }
                  ></button>
                ))
              : null}
          </span>
        </div>
      )}
    </>
  );
};

export default ImageSlider;
