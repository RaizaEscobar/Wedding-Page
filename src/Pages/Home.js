import React, { useState, useEffect } from 'react'
import Navbar from "../Components/Navbar"
import "./Home.css"

const HomeComponent = (props) => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");

    const starTimer = () => {
        const countdownDate = new Date("Jun 20 2021 13:00:00").getTime();

        setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            if (distance < 0) {
                setTimerDays(0);
                setTimerHours(0);
                setTimerMinutes(0);

            }
            else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
            }
        }, 1000)
    }

    useEffect(() => {
        starTimer();
    })
    return (
        <>
        <Navbar lang={props.match.params.lang}/>
        <section className="home-container">
            <section className="home">
                <div>
                    <h1> Boris & Raisa</h1>
                    <p>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Ci sposiamo in...": "Nos casamos en..."}</p>
                </div>
                <div>
                    <div>
                        <p>{timerDays}</p>
                        <h3><small>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Giorni" : "Días"}</small></h3>
                    </div>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <h3><small>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Ore" : "Horas"}</small></h3>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <h3><small>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Minuti" : "Minutos"}</small></h3>
                    </section>
                </div>

            </section>

        </section>
        </>
    )
}
export default HomeComponent
