

const Happening = ({poster, sqrposter}) => {

    return (
        <section class="mt-[10.498vw] w-full" >
            <h2 class=" ml-[5.9896vw] inline-block semi-title">Happening Right Now</h2>
            <div class="relative mt-[4.2317vw] w-full aspect-[2.77]" >
                <img class="bg-image opacity-20" src={poster} alt="event"></img>
                <div class="absolute left-[10.0911vw] top-[5.9121vw]">
                    <h2 class="med-title text-newBlack w-[31.640625vw] ">Algeria is welcoming Africa</h2>
                    <p class="paragraph text-newBlack font-medium w-[23.4375vw] mt-[5.2083vw]">Learn more about the African Startup Conference</p>
                </div>
                <img class="absolute top-[5.9121vw] right-[5.9896vw] w-[40.2916vw] aspect-[1.17947] object-cover " src={sqrposter} alt="event"></img>
            </div>
        </section>
    )
}

export default Happening