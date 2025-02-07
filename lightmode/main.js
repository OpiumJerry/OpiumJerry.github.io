function switchToWhiteMode() {
    const whiteModeStyles = `
        body {
            background-color: white;
            font-family: "Anton SC", serif;
            font-weight: 400;
            font-style: normal;
            color: black;
        }
        #image-container {
            padding: 10px 100px;
        }
        .image-link {
            display: inline-block;
            margin: 10px;
        }
        .image-link img {
            max-width: 150px;
            max-height: 150px;
            border: 2px solid #ccc;
            border-radius: 5px;
            transition: transform 0.2s;
        }
        .image-link img:hover {
            transform: scale(1.1);
        }
        .title {
            text-align: center;
            color: black;
            font-family: "Anton SC", cursive;
            font-weight: 400;
            font-style: normal;
        }
        footer {
            background-color: #f1f1f1; /* Light grey background for the footer */
            color: #000; /* Black text for contrast */
            text-align: center; /* Center the text */
            padding: 15px 0; /* Add padding for a comfortable spacing */
            border-top: 1px solid #ccc; /* Subtle border to create separation */
            width: 100%; /* Ensure it spans the full width */
            font-size: 14px; /* Set a readable font size */
        }
        .overlay {
            height: 0%;
            width: 100%;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
            background-color: rgba(255, 255, 255, 0.9); /* White transparent overlay */
            overflow-y: hidden;
            transition: 0.5s;
        }
        .overlay-content {
            position: relative;
            top: 25%;
            width: 100%;
            text-align: center;
            margin-top: 30px;
        }
        .overlay a {
            padding: 8px;
            text-decoration: none;
            font-size: 36px;
            color: #000; /* Dark text color */
            display: block;
            transition: 0.3s;
        }
        .overlay a:hover, .overlay a:focus {
            color: #555; /* Slightly darker text on hover */
        }
        .overlay .closebtn {
            position: absolute;
            top: 20px;
            right: 45px;
            font-size: 60px;
            color: #000; /* Dark close button */
        }
        @media screen and (max-height: 450px) {
            .overlay { overflow-y: auto; }
            .overlay a { font-size: 20px; }
            .overlay .closebtn {
                font-size: 40px;
                top: 15px;
                right: 35px;
            }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = whiteModeStyles;
    document.head.appendChild(styleSheet);

    const hamburgerMenu = document.querySelector('span[onclick="openNav()"]');
    if (hamburgerMenu) {
        hamburgerMenu.style.color = 'black';
    }

}

if (localStorage.getItem('lightmode') == 'true') {
    switchToWhiteMode();
}