import { useSearchParams } from "react-router-dom";
import { yt_html } from "../assets/assets";

const Ytpreview = () => {
  const [searchParams] = useSearchParams();

  const thumbnail_url = searchParams.get("thumbnail_url");
  const title = searchParams.get("title");

  const CHANNEL_NAME = "Purva Nijai";
  const CHANNEL_URL = "https://www.youtube.com/@PurvaNijai-f5u4q";

  const new_html = yt_html
    .replace("%%THUMBNAIL_URL%%", thumbnail_url || "")
    .replace("%%TITLE%%", title || "")
    .replaceAll("%%CHANNEL_NAME%%", CHANNEL_NAME)
    .replaceAll("%%CHANNEL_URL%%", CHANNEL_URL);

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      <iframe srcDoc={new_html} width="100%" height="100%" />
    </div>
  );
};

export default Ytpreview;
