import { Link } from "react-router-dom"

const Card = ({element, img}) => {
    return (
        <Link class="w-[20.849vw] aspect-[0.8259] flex-none duration-700 ease-in-out">
            <img class="w-full aspect-[1.036] card-image" src={img} alt="" />
            <div class="w-full aspect-[4.0577] rounded-b-[0.651vw] px-[0.846vw] pt-[0.911vw] pb-[1.006vw] bg-[#F8FAFB] border-newBlack border-solid border-[3px]" >
                <h4 class="card-title">{element.name}</h4>
                <p class="card-detail mt-[0.26vw]">{element.location}</p>
            </div>
        </Link>
    )
}
export default Card