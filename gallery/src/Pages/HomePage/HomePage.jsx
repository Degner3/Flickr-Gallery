import { Gallery } from "../../Components/Gallery/Gallery";
import { useFetch } from "../../Helpers/useFetch";


import style from "./HomePage.module.scss"


export const HomePage = () => {


  const { data, error } = useFetch(
    `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=86ca0c4a6448e0bc7b5b0e77340bbcbf&gallery_id=72157646472797634&get_user_info=1&get_gallery_info=1&extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C++views%2C+media%2C+path_alias%2C&format=json&nojsoncallback=1`
  );

  console.log(data.photos.photo);

  // if (data && data.photos && data.photos.photo) {
  //   data.photos.photo.forEach(photo => {
  //     console.log(photo.tags);
  //   });
  // }



  return (
    <section className={style.homepage}>
      <h1>Gal<span>lery</span></h1>
      <Gallery data={data} />
    </section>
  );
}