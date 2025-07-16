import parking from "../assets/images/parking.svg"
import warning from "../assets/images/warning.svg"
import transport from "../assets/images/transport.svg"
import location from "../assets/images/location.svg"
import test1 from "../assets/images/testi1.jpg"
import test2 from "../assets/images/testi2.jpg"
import test3 from "../assets/images/testi3.jpg"


export const ourFeatures = [
    {
        img: parking, title: "Find parking faster", description: "See available parking spots in real time,by location and availability."
    }, {
        img: warning, title: "Real-time Traffic insights", description: "Get up-to-date traffic conditions to avoid congestion on your drive."
    }, {
        img: transport, title: "Choose your commute", description: "Compare travel options including driving,transit and cycling."
    }, {
        img: location, title: "Saved locations", description: "Save frequent destinations like home or work for quick access.."
    }]

export const questionData = [
    {
        title: "Can I use transita without sharing location?",
        answer: "Yes you can manually enter your pickup and destination without enabling your location"
    },
    {
        title: "Can I use transita without sharing location?",
        answer: "Yes you can manually enter your pickup and destination without enabling your location"
    }, {
        title: "Can I use transita without sharing location?",
        answer: "Yes you can manually enter your pickup and destination without enabling your location"
    }]

export const testimonialData = [{
    subject: "\"No more guessing\"",
    desc: "\"I used to leave work 30minutes early ‘just in case’ traffic got bad-now i get real time updates and know exactly when to leave. Thanks to transita\"",
    img: test1,
    name: "Victoria",
    role: "Banker"
}, {
    subject: "\"Parking without panic\"",
    desc: "“Finding parking used to ruin my mornings. now i check map before leaving and park near my office without stress, its like the city suddenly got smarter”",
    img: test2,
    name: "Kayode",
    role: "Bolt driver"
}, {
    subject: "\"Fire movement dede\"",
    desc: "\"I used to leave work 30minutes early ‘just in case’ traffic got bad-now i get real time updates and know exactly when to leave. Thanks to transita\"",
    img: test3,
    name: "Bunmi",
    role: "Content-Creator"
}] 