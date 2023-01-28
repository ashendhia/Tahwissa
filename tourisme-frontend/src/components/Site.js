import { useState, useEffect } from 'react'
import siteService from '../services/site'
import SiteHero from "./SiteHero"
import Map from './Map'
import Section from './Section'
import recommend from '../assets/tahwissa/0.jpeg'
import hotel from '../assets/tahwissa/1.png'
import rest from '../assets/tahwissa/2.png'
import event from '../assets/tahwissa/3.png'

const Site = () => {
    const [site, setSite] = useState(null)
    const listRecommend = [{ name: "Sacred Heart Cathedral", location: "Oran, Oran province" }, { name: "Sacred Heart Cathedral", location: "Oran, Oran province" }, { name: "Sacred Heart Cathedral", location: "Oran, Oran province" }, { name: "Sacred Heart Cathedral", location: "Oran, Oran province" }, { name: "Sacred Heart Cathedral", location: "Oran, Oran province" }, { name: "Sacred Heart Cathedral", location: "Oran, Oran province" }]
    const listHotels = [{ name: "Four Points", location: "Oran, Oran province" }, { name: "Four Points", location: "Oran, Oran province" }, { name: "Four Points", location: "Oran, Oran province" }, { name: "Four Points", location: "Oran, Oran province" }, { name: "Four Points", location: "Oran, Oran province" }, { name: "Four Points", location: "Oran, Oran province" }, { name: "Four Points", location: "Oran, Oran province" }]
    const listRest = [{ name: "Grillade Le TRIO 🍖", location: "Oran, Oran province" }, { name: "Grillade Le TRIO 🍖", location: "Oran, Oran province" }, { name: "Grillade Le TRIO 🍖", location: "Oran, Oran province" }, { name: "Grillade Le TRIO 🍖", location: "Oran, Oran province" }, { name: "Grillade Le TRIO 🍖", location: "Oran, Oran province" }, { name: "Grillade Le TRIO 🍖", location: "Oran, Oran province" } ]
    const listEvents = [{ name: "SECURA North Africa", location: "Algiers, 11.22. - 11.24.2022" }, { name: "SECURA North Africa", location: "Algiers, 11.22. - 11.24.2022" }, { name: "SECURA North Africa", location: "Algiers, 11.22. - 11.24.2022" }, { name: "SECURA North Africa", location: "Algiers, 11.22. - 11.24.2022" }, { name: "SECURA North Africa", location: "Algiers, 11.22. - 11.24.2022" }, { name: "SECURA North Africa", location: "Algiers, 11.22. - 11.24.2022" } ]

    useEffect(() => {
        const fetchData = async () => {
            const site = await siteService.get("6335ccf23680c2a3c4929160")
            setSite(site)
        }
        fetchData()
    }, [])

    return (
        <main class="w-[87.1vw] mx-auto">
            {
                site === null ?
                    null :
                    <>
                        <SiteHero site={site} />
                        <section id="Map" class="mt-[7.86vw] z-0 " >
                            <h2 class="semi-title">Near {site.name}</h2>
                            <Map site={site} ></Map>
                        </section>
                        <Section id="Recommendations" section="Our Recommendations" list={listRecommend} img={recommend} />
                        <Section id="Hotels" section="Hotels" list={listHotels} img={hotel} />
                        <Section id="Restaurants" section="Restaurants" list={listRest} img={rest} />
                        <Section id="Events" section="Happening Right Now" list={listEvents} img={event} />

                    </>
            }
        </main>
    )
}

export default Site