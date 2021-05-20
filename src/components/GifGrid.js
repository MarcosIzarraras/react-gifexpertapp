import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    const {data:images} = useFetchGifs(category);

    return(
        <>
            <h3>{ category }</h3>
            <div className="card-grid animate__animated animate__fadeIn">
                { images.map( image => <GifGridItem key={image.id} {...image} />) }
            </div>
        </>
    );
}