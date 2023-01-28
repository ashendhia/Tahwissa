import ScrollContainer from 'react-indiana-drag-scroll'

const Gallery = ({ gallery }) => {

    return (
        <section id="" class="w-full mt-[13.28125vw]">
            <h2 class="grid place-items-center med-title" >#VisitAlgeria</h2>
            <ScrollContainer className="scroll-container">
                <div class=" w-full flex flex-auto">
                    <ul class="flex gap-[0.7317vw] mt-[3.90625vw]">
                        {gallery.map((picture, i) => {
                            return <img key={i} class=" h-[22.401vw] object-cover" src={picture}></img>
                        })
                        }
                    </ul>
                </div>
            </ScrollContainer>
            <ScrollContainer className="scroll-container">
                <div class=" w-full flex flex-auto">
                    <ul class="flex gap-[0.7317vw] mt-[0.7317vw]">
                        {gallery.map((picture, i) => {
                            return <img key={i} class=" h-[22.401vw] object-cover" src={picture}></img>
                        })
                        }
                    </ul>
                </div>
            </ScrollContainer>
        </section>
    )
}

export default Gallery