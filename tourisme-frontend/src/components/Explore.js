import DestinationsSection from './DestinationsSection'
import Section from './Section'
import Happening from './Happening'

import home from '../assets/tahwissa/home.jpg'
import about from '../assets/tahwissa/about-image.png'
import mosta from '../assets/tahwissa/mostaganem.jpg'
import must from '../assets/tahwissa/0.jpeg'
import poster from '../assets/tahwissa/startup.jpg'
import sqrposter from '../assets/tahwissa/star.jpg'
import gallery1 from '../assets/tahwissa/gallery1.png'
import gallery2 from '../assets/tahwissa/gallery2.png'
import gallery3 from '../assets/tahwissa/gallery3.png'
import gallery4 from '../assets/tahwissa/gallery4.png'
import Gallery from './Gallery'


const Explore = () => {
    const listWilayas = ['Mostaganem', 'Mostaganem', 'Mostaganem', 'Mostaganem', 'Mostaganem', 'Mostaganem']
    const listMust = [{ name: "Sacred Heart Cathedral", location: "Oran, Oran province" }, { name: "Sacred Heart Cathedral", location: "Oran, Oran province" }, { name: "Sacred Heart Cathedral", location: "Oran, Oran province" }, { name: "Sacred Heart Cathedral", location: "Oran, Oran province" }, { name: "Sacred Heart Cathedral", location: "Oran, Oran province" }, { name: "Sacred Heart Cathedral", location: "Oran, Oran province" }]
    const listGallery = [gallery1, gallery2, gallery3, gallery4, gallery1, gallery2]

    return (
        <main >
            <header>
                <img class="bg-image" src={home} alt="Home">
                </img>
                <div class="absolute left-[10.0911vw] top-[19.46614vw]">
                    <h1 class="title text-white">Algeria</h1>
                    <h2 class="bg-semi-title text-white">The world’s best hidden gem</h2>
                </div>
            </header>
            <div class="w-[87.1vw] mx-auto">
                <section id="explore-about" class="mt-[10.5227vw] flex">
                    <div>
                        <h1 class="med-title inline-block" >Why go?</h1>
                        <p class=" mt-[4.1666vw] paragraph w-[55.7291vw]" >
                            Situated in north western africa at the croassroads of many cultures and civilisations, Algeria the 10th largest country in the world has a lot to offer, from the golden beaches of the meditteranean coast to the frozen mountaintops of the atlas and the mesmerising dunes of the sahara, and here Tahwissa will give you all the information you need to know, and the best Sites to visit.
                        </p>
                    </div>
                    <img class="ml-[6.44531vw] mt-[0.651041vw] w-[24.888vw] aspect-[0.87414] image" src={about} alt="about" >
                    </img>
                </section>
                <DestinationsSection list={listWilayas} img={mosta} />
                <Section section="Must Sees" list={listMust} img={must} />
            </div>
            <Happening poster={poster} sqrposter={sqrposter} />
            <Gallery gallery={listGallery} />
        </main>
    )
}

export default Explore