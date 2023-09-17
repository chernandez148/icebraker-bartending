import React from 'react'
import './styles.css'

function Reviews() {

    const reviews = [
        { name: "Gloria Maquinalez", review: "I hosted a graduation party for my daughter this past weekend, the bartender was great. I asked for an additional helper she was superb. If I have another party I would definitely use their services again." },
        { name: "Blanca Lizarraga", review: "Angela did my wedding on 6/26/21 she did an awesome job!! Very friendly and professional and even left us extra cups after she left and put all our stuff in a table nicely set up for self serve after she left ... 5 ⭐️!!!" },
        { name: "Edith Mata", review: "Overall my family and I were beyond pleased with the services that were provided for my sisters birthday! The drinks were delicious, received so many compliments from our guests! Thank you again!" },
        { name: "Leticia Sherley", review: "Super late review🙈 I hired Angelina to do a  dessert table at my son’s 10th birthday party. I’ve known her since we were little girls, so it was awesome to have been able to support her business. She did an amazing job on everything. My son and all the kids loved it. Will definitely hire her again for future parties!" }
    ]

    return (
        <section className='Reviews'>
            <h1>WHAT PEOPLE ARE SAYING ABOUT US!</h1>
            <ul>
                {reviews.map((info, index) => (
                    <li key={index}>
                        <h4>"{info.review}"</h4>
                        <h4 className='author'> - {info.name}</h4>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Reviews