import React, { useState } from 'react'

export default function About(props) {
    // const body = document.body;
    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color: "#121212",
    //         backgroundColor: "white"
    //     })
    // const [buttonText, setButtonText] = useState("Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color == "#121212") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "#121212"
    //         })
    //         body.style.color = "white";
    //         body.style.backgroundColor = "#121212";
    //         setButtonText("Light Mode");
    //     }
    //     else {
    //         setMyStyle(
    //             {
    //                 color: "#121212",
    //                 backgroundColor: "white"
    //             }
    //         )
    //         body.style.color = "#121212";
    //         body.style.backgroundColor = "white";
    //         setButtonText("Dark Mode");
    //     }
    // }

    return (
        <>
            <div className={`container about-container ${props.mode ? 'dark-mode' : 'light-mode'}`}>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nostrum aliquid itaque accusamus eos atque voluptatum beatae quia repellat et quos, unde laborum quaerat! Asperiores nisi autem nesciunt dolorem similique.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat consequuntur fugit natus veritatis corrupti autem beatae, dolorum excepturi earum odit libero aliquam saepe, reiciendis minima molestias soluta accusantium veniam nam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos repellat veritatis quo nihil quis, eum quod earum enim, totam nisi harum, cupiditate maiores. Odio illum sint ipsum molestias ab odit?</p>
            </div>
        </>
    )
}
