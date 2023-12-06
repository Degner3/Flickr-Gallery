
import { useFetch } from "../../Helpers/useFetch"
import style from "./Gallery.module.scss"



export const Gallery = (props) => {

    // const { data, error } = useFetch(
    //     `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=86ca0c4a6448e0bc7b5b0e77340bbcbf&gallery_id=72157646472797634&get_user_info=1&get_gallery_info=1&extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C++views%2C+media%2C+path_alias%2C&format=json&nojsoncallback=1`
    // );

    // console.log(data);
    // console.log(props);
    
    return (
      <section className={style.gallery}>
        <div className={style.gallerywrapper}>
          {props.data?.photos.photo.map((photo, index) => (
            <img
              key={index}
              src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              alt={`Image ${index}`}
            />
          ))}
        </div>
      </section>
    );
}