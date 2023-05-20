import { useParams } from "react-router-dom";


const ViewVideo = () => {
  const { id } = useParams();
  return (
    <div className="mx-auto block paramVideo mt-[100px]">
      {
        <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="i-frame w-[1000px] h-[500px]"
          title="YouTube video player" src={`https://www.youtube.com/embed/${id}`}></iframe>
      }
    </div>
  );
};

export default ViewVideo;
