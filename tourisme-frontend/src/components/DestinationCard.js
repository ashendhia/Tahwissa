

const DestinationCard = ({wilaya, img}) => {
    return (
        <button class="relative w-[27.34375vw] aspect-[0.99644] flex-none duration-700 ease-in-out ">
            <img class=" destination-image" src={img} alt="Wilaya" ></img>
            <h2 class="absolute semi-title left-[5.3078vw] top-[21.1061vw] text-white">{wilaya}</h2>
        </button>
    )
}

export default DestinationCard 