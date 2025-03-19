
// Creating an array object to hold stack list and icon
let stacksArray = [
    {
        name: "Html",
        icon: `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.0372 113.876L9.03223 1.66113H118.968L108.952 113.859L63.9332 126.339L19.0372 113.876Z" fill="#E44D26"/>
                    <path d="M64 116.8L100.378 106.714L108.937 10.8359H64V116.8Z" fill="#F16529"/>
                    <path d="M63.9998 52.4551H45.7878L44.5298 38.3611H63.9998V24.5991H29.4888L29.8188 28.2911L33.2008 66.2181H63.9998V52.4551ZM63.9998 88.1981L63.9388 88.2151L48.6118 84.0751L47.6328 73.1001H33.8158L35.7438 94.7091L63.9368 102.535L63.9998 102.518V88.1981Z" fill="#EBEBEB"/>
                    <path d="M63.9521 52.4551V66.2181H80.8992L79.3022 84.0671L63.9521 88.2101V102.529L92.1671 94.7091L92.3741 92.3841L95.6082 56.1511L95.9431 52.4551H92.2351H63.9521ZM63.9521 24.5991V38.3611H97.1961L97.4721 35.2691L98.1001 28.2911L98.4291 24.5991H63.9521Z" fill="white"/>
                </svg>`,

    },

    {
        name: "Css",
        icon: `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75977 1L18.8148 113.883L63.9328 126.463L109.177 113.837L119.24 1H8.75977ZM98.3508 26.862L95.0038 64.467L95.0138 64.67L94.9998 65.137V65.133L92.6218 91.427L92.3598 93.763L63.9998 101.607V101.608L63.9778 101.627L35.6668 93.739L33.7498 72H47.6328L48.6178 83.054L64.0038 87.224L63.9998 87.232V87.23L79.4428 83.001L81.0748 65H48.7918L48.5148 61.957L47.8838 54.828L47.5528 51H82.3018L83.5658 37H30.6398L30.3628 33.959L29.7328 26.828L29.4008 23H98.6818L98.3508 26.862Z" fill="#1572B6"/>
                </svg>`,

    },

    {
        name: "JavaScript",
        icon: `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4082 1.4082H126.592V126.593H1.4082V1.4082Z" fill="#F0DB4F"/>
                    <path d="M116.347 96.7359C115.43 91.0249 111.706 86.2279 100.675 81.7549C96.8431 79.9939 92.5711 78.7329 91.2981 75.8289C90.8461 74.1389 90.7861 73.1869 91.0721 72.1639C91.8931 68.8439 95.8561 67.8089 98.9971 68.7609C101.02 69.4389 102.935 70.9979 104.09 73.4849C109.492 69.9869 109.481 70.0099 113.253 67.6059C111.872 65.4649 111.135 64.4769 110.231 63.5609C106.982 59.9319 102.555 58.0629 95.4751 58.2059L91.7871 58.6829C88.2531 59.5759 84.8851 61.4309 82.9101 63.9179C76.9841 70.6419 78.6741 82.4099 85.8851 87.2529C92.9891 92.5849 103.425 93.7979 104.758 98.7839C106.055 104.888 100.272 106.864 94.5241 106.162C90.2881 105.281 87.9321 103.128 85.3851 99.2129C80.6971 101.926 80.6971 101.926 75.8771 104.698C77.0201 107.197 78.2211 108.328 80.1371 110.493C89.2051 119.691 111.897 119.239 115.967 105.317C116.132 104.839 117.228 101.651 116.347 96.7359ZM69.4621 58.9429H57.7531L57.7051 89.2149C57.7051 95.6529 58.0381 101.555 56.9911 103.364C55.2781 106.922 50.8391 106.481 48.8161 105.791C46.7571 104.779 45.7101 103.34 44.4971 101.306C44.1641 100.722 43.9141 100.27 43.8301 100.235L34.3101 106.065C35.8931 109.314 38.2251 112.134 41.2121 113.966C45.6741 116.644 51.6711 117.465 57.9431 116.025C62.0251 114.836 65.5471 112.373 67.3911 108.624C70.0571 103.709 69.4851 97.7599 69.4611 91.1799C69.5211 80.4449 69.4621 69.7119 69.4621 58.9429Z" fill="#323330"/>
                </svg>`,
    },

    {
        name: "React.js",
        icon: `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.0001 75.4C70.2961 75.4 75.4001 70.296 75.4001 64C75.4001 57.7039 70.2961 52.6 64.0001 52.6C57.7041 52.6 52.6001 57.7039 52.6001 64C52.6001 70.296 57.7041 75.4 64.0001 75.4Z" fill="#61DAFB"/>
                    <path d="M107.3 45.2C105.1 44.4 102.8 43.6 100.4 42.9C101 40.5 101.5 38.1 101.9 35.8C104 22.6 101.7 13.3 95.2999 9.69998C93.3999 8.59997 91.2999 8.09998 88.8999 8.09998C81.8999 8.09998 72.9999 13.3 63.9999 22C54.9999 13.3 46.0999 8.09998 39.0999 8.09998C36.6999 8.09998 34.5999 8.59997 32.6999 9.69998C26.2999 13.4 23.9999 22.7 26.0999 35.8C26.4999 38.1 26.9999 40.5 27.5999 42.9C25.1999 43.6 22.8999 44.3 20.6999 45.2C8.1999 50 1.3999 56.6 1.3999 64C1.3999 71.4 8.2999 78 20.6999 82.8C22.8999 83.6 25.1999 84.4 27.5999 85.1C26.9999 87.5 26.4999 89.9 26.0999 92.2C23.9999 105.4 26.2999 114.7 32.6999 118.3C34.5999 119.4 36.6999 119.9 39.0999 119.9C46.1999 119.9 55.0999 114.7 63.9999 106C72.9999 114.7 81.8999 119.9 88.8999 119.9C91.2999 119.9 93.3999 119.4 95.2999 118.3C101.7 114.6 104 105.3 101.9 92.2C101.5 89.9 101 87.5 100.4 85.1C102.8 84.4 105.1 83.7 107.3 82.8C119.8 78 126.6 71.4 126.6 64C126.6 56.6 119.8 50 107.3 45.2ZM92.4999 14.7C96.5999 17.1 97.9999 24.5 96.2999 35C95.9999 37.1 95.4999 39.3 94.8999 41.6C89.6999 40.4 84.1999 39.6 78.3999 39.1C74.9999 34.3 71.4999 30 67.9999 26.1C75.3999 18.8 82.8999 13.8 88.9999 13.8C90.2999 13.8 91.4999 14.1 92.4999 14.7ZM81.2999 74C79.4999 77.2 77.3999 80.4 75.1999 83.6C71.4999 83.9 67.7999 84 63.9999 84C60.0999 84 56.3999 83.9 52.7999 83.6C50.5999 80.4 48.5999 77.2 46.7999 74C44.8999 70.7 43.0999 67.3 41.4999 64C43.0999 60.7 44.8999 57.3 46.7999 54C48.5999 50.8 50.6999 47.6 52.8999 44.4C56.5999 44.1 60.2999 44 64.0999 44C67.9999 44 71.6999 44.1 75.2999 44.4C77.4999 47.6 79.4999 50.8 81.2999 54C83.1999 57.3 84.9999 60.7 86.5999 64C84.8999 67.3 83.1999 70.6 81.2999 74ZM89.5999 70.7C91.0999 74.2 92.2999 77.6 93.3999 81C89.9999 81.8 86.3999 82.4 82.5999 82.9C83.7999 81 85.0999 79 86.1999 76.9C87.3999 74.8 88.4999 72.7 89.5999 70.7ZM63.9999 97.8C61.5999 95.2 59.2999 92.4 57.0999 89.5C59.3999 89.6 61.6999 89.7 63.9999 89.7C66.2999 89.7 68.5999 89.6 70.8999 89.5C68.6999 92.4 66.3999 95.2 63.9999 97.8ZM45.3999 82.8C41.5999 82.3 37.9999 81.7 34.5999 80.9C35.6999 77.6 36.8999 74.1 38.3999 70.6C39.4999 72.6 40.5999 74.7 41.7999 76.7C42.9999 78.9 44.1999 80.8 45.3999 82.8ZM38.3999 57.3C36.8999 53.8 35.6999 50.4 34.5999 47C37.9999 46.2 41.5999 45.6 45.3999 45.1C44.1999 47 42.8999 49 41.7999 51.1C40.5999 53.2 39.4999 55.3 38.3999 57.3ZM63.9999 30.2C66.3999 32.8 68.6999 35.6 70.8999 38.5C68.5999 38.4 66.2999 38.3 63.9999 38.3C61.6999 38.3 59.3999 38.4 57.0999 38.5C59.2999 35.6 61.5999 32.8 63.9999 30.2ZM86.1999 51.2L82.5999 45.2C86.3999 45.7 89.9999 46.3 93.3999 47.1C92.2999 50.4 91.0999 53.9 89.5999 57.4C88.4999 55.3 87.3999 53.2 86.1999 51.2ZM31.6999 35C29.9999 24.5 31.3999 17.1 35.4999 14.7C36.4999 14.1 37.6999 13.8 38.9999 13.8C44.9999 13.8 52.4999 18.7 59.9999 26.1C56.4999 29.9 52.9999 34.3 49.5999 39.1C43.7999 39.6 38.2999 40.5 33.0999 41.6C32.4999 39.3 32.0999 37.1 31.6999 35ZM6.9999 64C6.9999 59.3 12.6999 54.3 22.6999 50.6C24.6999 49.8 26.8999 49.1 29.0999 48.5C30.6999 53.5 32.6999 58.8 35.0999 64.1C32.6999 69.4 30.5999 74.6 29.0999 79.6C15.2999 75.6 6.9999 69.6 6.9999 64ZM35.4999 113.3C31.3999 110.9 29.9999 103.5 31.6999 93C31.9999 90.9 32.4999 88.7 33.0999 86.4C38.2999 87.6 43.7999 88.4 49.5999 88.9C52.9999 93.7 56.4999 98 59.9999 101.9C52.5999 109.2 45.0999 114.2 38.9999 114.2C37.6999 114.2 36.4999 113.9 35.4999 113.3ZM96.2999 93C97.9999 103.5 96.5999 110.9 92.4999 113.3C91.4999 113.9 90.2999 114.2 88.9999 114.2C82.9999 114.2 75.4999 109.3 67.9999 101.9C71.4999 98.1 74.9999 93.7 78.3999 88.9C84.1999 88.4 89.6999 87.5 94.8999 86.4C95.4999 88.7 95.8999 90.9 96.2999 93ZM105.3 77.4C103.3 78.2 101.1 78.9 98.8999 79.5C97.2999 74.5 95.2999 69.2 92.8999 63.9C95.2999 58.6 97.3999 53.4 98.8999 48.4C112.7 52.4 121 58.4 121 64C121 68.7 115.2 73.7 105.3 77.4Z" fill="#61DAFB"/>
                </svg>`,
    },
    

    {
        name: "Tailwind Css",
        icon: `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.0039 25.602C46.9369 25.602 36.2739 34.132 32.0039 51.199C38.4019 42.668 45.8709 39.469 54.4019 41.602C59.2729 42.816 62.7539 46.348 66.6089 50.262C72.8829 56.629 80.1449 64 96.0039 64C113.07 64 123.734 55.469 128.004 38.398C121.605 46.934 114.137 50.133 105.605 48C100.735 46.785 97.2579 43.254 93.3979 39.34C87.1279 32.973 79.8679 25.602 64.0039 25.602ZM32.0039 64C14.9379 64 4.27391 72.531 0.00390625 89.602C6.40191 81.066 13.8699 77.867 22.4019 80C27.2729 81.215 30.7539 84.746 34.6089 88.66C40.8829 95.027 48.1449 102.398 64.0039 102.398C81.0699 102.398 91.7339 93.868 96.0039 76.801C89.6049 85.332 82.1369 88.531 73.6049 86.398C68.7349 85.184 65.2579 81.652 61.3979 77.738C55.1279 71.371 47.8679 64 32.0039 64Z" fill="#38B2AC"/>
                </svg>`,
    },

    {
        name: "Next.js",
        icon: `<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 0C28.7 0 0 28.7 0 64C0 99.3 28.7 128 64 128C75.2 128 85.7 125.1 94.8 120.1L48.4 55.3V91.9H41.6V41.8H48.4L98.9 117.6C116.4 106.2 128 86.5 128 64C128 28.7 99.3 0 64 0ZM86.1 84.6L78.6 73.3V41.8H86.1V84.6Z" fill="black"/>
                </svg>`,
    },
]

// Global empty array to store selected stack && gloable variables from DOM
let selectedStack = [];

const userForm = document.querySelector(".userForm");
const nameInput = document.querySelector(".fullName");
const fieldInput = document.querySelector(".field");
const twitterInput = document.querySelector(".twitter");
const githubInput = document.querySelector(".github");
const stackPreview = document.querySelector(".stackPreview");
const searchInput = document.querySelector(".search");
const dropdownBtn = document.querySelector(".dropdownBtn");
const stackSelect = document.querySelector(".stackSelect");
const countSelected = document.querySelector(".countSelected");

const disabledStack = document.querySelector(".disabledStack");

const searchWrapper = document.querySelector(".searchWrapper");

// Error field from DOM
const errorForName = document.querySelector(".errorForName");
const errorForField = document.querySelector(".errorForField");
const errorForTwitter = document.querySelector(".errorForTwitter");
const errorForGitHub = document.querySelector(".errorForGitHub");
const countError = document.querySelector(".countError");

//Banner display variables -- DOM
const bannerWrapper = document.querySelector(".bannerWrapper");

const fullNameBanner = document.querySelector(".fullNameBanner");
const fieldBanner = document.querySelector(".fieldBanner");
const twitterIcon = document.querySelector(".socialsBannerWrapper .twitter");
const githubIcon = document.querySelector(".socialsBannerWrapper .github");

const twitterBanner = document.querySelector(".twitterBanner");
const githubBanner = document.querySelector(".githubBanner");
const stacksWrapper = document.querySelector(".stackParentWrapper .stacksWrapper");
const socialsBannerWrapper = document.querySelector(".socialsBannerWrapper");

const stacksWrapperBanner = document.querySelector(".stacksWrapperBanner");

const downloadContainer = document.querySelector(".downloadContainer");

const generatedTxt = document.querySelector(".generatedTxt");

const generatingTxt = document.querySelector(".generatingTxt");


// Variables for Banner gradients
const colorOne = document.querySelector(".colorOne");
const colorTwo = document.querySelector(".colorTwo");

const colorCodeOne = document.querySelector(".colorCodeOne");
const colorCodeTwo = document.querySelector(".colorCodeTwo");
const gradientDirection = document.querySelector(".gradientDirection");


//Button to display banner

const generateBtn = document.querySelector(".generateBtn");
const downloadBtn = document.querySelector(".downloadBtn");




// Dynamically loading my stack array to page
const loadStackArray = () => {
    for (let stack of stacksArray) {
        const option = document.createElement("option");
        option.value = stack.name;
        option.textContent = stack.name;
        option.classList.add("dropDownItem");
        stackSelect.appendChild(option);
        // console.log(stack.name)
    }

    stackSelect.style.display = "none";  
}

const searchStack = () => {
    
    const userSearch = searchInput.value.toLowerCase().trim();

    let searchArray = [];

    searchArray = stacksArray.filter((stack) => {
        return stack.name.toLowerCase().startsWith(userSearch);
    });

    console.log(searchArray);
    stackSelect.innerHTML = `<option value="" disabled class="disabledStack">Select Stack</option>`

    if (searchArray.length > 0) {
        for (let stack of searchArray) {
            const option = document.createElement("option");
            option.value = stack.name;
            option.textContent = stack.name;
            option.classList.add("dropDownItem");
            stackSelect.appendChild(option);
        }

        stackSelect.style.display = "block";
    } else {
        const option = document.createElement("option");
        option.value = ""
        option.textContent = "Oops, no matching stack found";
        option.disabled = true;
        stackSelect.appendChild(option);
        stackSelect.style.display = "block";
    }
}

// global userInput from form



// validating name inut
const nameValidator = () => {
    const userName = nameInput.value.trim();
    const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ'’-]+)+$/;
    
    if (userName === "") {
        errorForName.textContent = "Please enter your name";
        nameInput.classList.add("error");
        nameInput.classList.remove("succuess");
        return false;
    } else if (!namePattern.test(userName)) {
        errorForName.textContent = "Enter at least two words. Hyphens and apostrophes are allowed.";
        nameInput.classList.add("error");
        nameInput.classList.remove("succuess");
        return false;
    } else {
        errorForName.textContent = "";
        nameInput.classList.add("success");
        nameInput.classList.remove("error");
        return true;
    }
    
}

// Validation Field input

const fieldValidator = () => {
    const userField = fieldInput.value.trim();

    if (userField === "") {
        errorForField.textContent = "Please enter your field";
        fieldInput.classList.add("error");
        fieldInput.classList.remove("success");
        return false
    } else {
        errorForField.textContent = "";
        fieldInput.classList.add("success");
        fieldInput.classList.remove("error");
        return true;
    }
}


// Validating if a stack is selected
const validateStack = () => {
    const selectedValue = stackSelect.value;
    const index = selectedStack.findIndex((stack) => stack.name === selectedValue);// Check if a stack already exist

    
    
    if (index === -1 && selectedValue !== "") {
        if (selectedStack.length >= 5) {
            countError.textContent = "You cannot select more than five(5) stack";
            return;
        } 
        const stackObj = stacksArray.find((stack) => stack.name === selectedValue);
        if(stackObj) {
            selectedStack.push(stackObj);
            displayStack();
            countSelectedStack();
        } 
        
    } else if (index !== -1) {
        selectedStack.splice(index, 1);
        displayStack();
        countSelectedStack();
        countError.textContent = "";
    }
    
    console.log(selectedStack)
    console.log(index);

    
}

// Function to count selected stack
const countSelectedStack = () => {
    const count = selectedStack.length;
    countSelected.textContent = `Selected: ${count}/5 technologies`;
}


const formValidator = () => {
    let isNameValid = nameValidator();
    let isFieldValid = fieldValidator();

    if (isNameValid && isFieldValid) {
        //call function to generate banner
        
    }
}

const changeDisplayAndCaret = () => {

    const isDiplayNone = stackSelect.style.display === "none";
    stackSelect.style.display = isDiplayNone ? "block" : "none";

    // if(dropdownBtn.innerHTML === `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"/></svg>`) {
    //     dropdownBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z"/></svg>`;
    // }

    if (dropdownBtn.classList.contains("dropdownBtn")) {
        dropdownBtn.classList.remove("dropdownBtn");
        dropdownBtn.classList.add("caretDown");
        dropdownBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
        <path fill="#fff" d="M224 384c8.6 0 17.4 3.4 24 10l264 264 264-264c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48l-288 288c-13.2 13.2-34.8 13.2-48 0L176 442c-13.2-13.2-13.2-34.8 0-48s34.8-13.2 48 0z"></path>
      </svg>
      `;

    } else {
        dropdownBtn.classList.remove("caretDown");
        dropdownBtn.classList.add("dropdownBtn");
        dropdownBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="#fff" d="M8.2 751.4c0 8.6 3.4 17.401 10 24.001c13.2 13.2 34.8 13.2 48 0l451.8-451.8l445.2 445.2c13.2 13.2 34.8 13.2 48 0s13.2-34.8 0-48L542 251.401c-13.2-13.2-34.8-13.2-48 0l-475.8 475.8c-6.8 6.8-10 15.4-10 24.2z"></path></svg>`;
    }
}

// Populating selected stack
const displayStack = () => {
    stackPreview.innerHTML = "";

    for (let stack of selectedStack) {
        const div = document.createElement("div");
        div.classList.add("stackAndIconWrapper");

        const stackIcon = document.createElement("span");
        stackIcon.classList.add("stackIcon");
        stackIcon.innerHTML = stack.icon;

        const stackName = document.createElement("p");
        stackName.classList.add("stackName");
        stackName.textContent = stack.name;

        const delBtn = document.createElement("button");
        delBtn.classList.add("delBtn");
        delBtn.textContent = "x";
        delBtn.setAttribute("data-stack", `${stack.name}`);

        div.appendChild(stackIcon);
        div.appendChild(stackName);
        div.appendChild(delBtn);
        stackPreview.appendChild(div);
    }

    const delBtns = document.querySelectorAll(".delBtn");
    for (let delBtn of delBtns ) {
        delBtn.addEventListener("click", () => {
            const stackToRemove = delBtn.getAttribute('data-stack');
            console.log(stackToRemove);
            removeStack(stackToRemove);
            console.log(selectedStack)
        });
    }

}

const removeStack = (stackName) => {
    const index = selectedStack.findIndex((stack) => stack.name === stackName);
    if (index !== -1) {
        selectedStack.splice(index, 1);
        displayStack();
        countSelectedStack();
        displayStackBanner();
        countError.textContent = "";
        
    }
}

// Funtions to display banner starts here

const displayName = () => {
    const userName = nameInput.value.trim();
    fullNameBanner.textContent = userName;

}

const displayField = () => {
    const userField = fieldInput.value.trim();
    fieldBanner.textContent = userField;

}

const displayTwitter = () => {
    const userTwitter = twitterInput.value.trim();
    twitterBanner.textContent = userTwitter;
}

const displayGitHub = () => {
    const userGitHub = githubInput.value.trim();
    githubBanner.textContent = userGitHub;
}


const displayStackBanner = () => {
    stacksWrapperBanner.innerHTML = `<p class = "stackTxt">Stack:</p>`;
    
    for (let stack of selectedStack) {
        const div = document.createElement("div");
        div.classList.add("stackIconBanner")
        div.innerHTML = stack.icon;
        stacksWrapperBanner.appendChild(div);
    }
}

// Funtions to display banner ends here

// Function to change banner background color starts here
const changeBackgroundColor = () => {
    const colorValueOne = colorOne.value;
    const colorValueTwo = colorTwo.value;
    const directionValue = gradientDirection.value;

    colorCodeOne.textContent = colorValueOne;
    colorCodeTwo.textContent = colorValueTwo;
    const gradient = `linear-gradient(${directionValue}, ${colorValueOne}, ${colorValueTwo})`;

    bannerWrapper.style.background = gradient;

}
// Function to change banner background color ends here

// Function to generate Banner starts here
const generateBanner = () => {
    bannerWrapper.style.display = "flex";
    downloadContainer.style.display = "block";
    generateBtn.textContent = "Generate Banner! 👩‍🍳";
    generateBtn.style.cursor = "pointer";
    generatedTxt.textContent = "Banner generated, scroll down to view";
}
// Function to generate Banner ends here

// Function to download banner starts here
const downloadBanner = async () => {
    try {
        if (!bannerWrapper) {
            alert("Banner not found")
            return;
        }
        const dataURL = await htmlToImage.toPng(bannerWrapper);
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "myBanner.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        downloadBtn.textContent = "Download Banner";
        downloadBtn.style.cursor = "pointer";
        generatingTxt.textContent = "";
        bannerWrapper.classList.remove("bannerDownload");

        bannerWrapper.classList.toggle("bannerWrapper");
        bannerWrapper.classList.toggle("containerBanner");

    } catch(error) {
        console.log(error);
        alert("Failed to download banner, please try again!")
    }
}
// Function to download banner ends here

// Local Storage logic starts here
const saveFormToStorage = () => {
    const userName = nameInput.value.trim();
    const userField = fieldInput.value.trim();
    const userTwitter = twitterInput.value.trim();
    const userGitHub = githubInput.value.trim();

    const colorValueOne = colorOne.value;
    const colorValueTwo = colorTwo.value;
    const directionValue = gradientDirection.value;

    const gradient = `linear-gradient(${directionValue}, ${colorValueOne}, ${colorValueTwo})`;
    const rgbaBackground = gradient;

    const bannerFormData = {
        userName: userName,
        userField: userField,
        userTwitter: userTwitter,
        userGitHub: userGitHub,
        rgbaBackground: rgbaBackground,
    }

    console.log(bannerFormData);
    localStorage.setItem("bannerFormData", JSON.stringify(bannerFormData));
}

const loadBannerFormData = () => {
    const savedFormData = JSON.parse(localStorage.getItem("bannerFormData", "{}"));
    console.log(savedFormData);

    // fullNameBanner.value = savedFormData.userName;
    console.log(fullNameBanner.value)
}
// Local Storage logic ends here

// Loading stack array upon page load
document.addEventListener("DOMContentLoaded", () => {
    loadStackArray();
    countSelectedStack();

    bannerWrapper.style.display = "none";
    downloadContainer.style.display = "none";
    loadBannerFormData();
    
});



// Search input event listener

searchInput.addEventListener("input", () => {
    searchStack();
});

searchInput.addEventListener("click", () => {
    stackSelect.style.display = "block";
    // let isBorderColorWhite = searchWrapper.style.borderColor === "rgb(255, 255, 255)";
    searchWrapper.style.borderColor = "rgb(183, 119, 244)";
});

// Adding event listener to listen to selectedStack

stackSelect.addEventListener("change", (e) => {
    e.preventDefault();
    validateStack();
    displayStackBanner();
});


nameInput.addEventListener("input", () => {
    nameValidator();
    displayName();
    saveFormToStorage();
    
});

fieldInput.addEventListener("input", () => {
    fieldValidator();
    displayField();
    saveFormToStorage();

});

twitterInput.addEventListener("input", () => {
    displayTwitter();
    saveFormToStorage();
});

githubInput.addEventListener("input", () => {
    displayGitHub();
    saveFormToStorage();
});

userForm.addEventListener("submit", (e) => {
    if (e) e.preventDefault();
    // formValidator();
});


// DropdownBtn event listener
dropdownBtn.addEventListener("click", () => {
    changeDisplayAndCaret();

});

// bannerWrapper background change event listener
colorOne.addEventListener("input", () => {
    changeBackgroundColor();
    saveFormToStorage();
});

colorTwo.addEventListener("input", () => {
    changeBackgroundColor();
    saveFormToStorage();
});

gradientDirection.addEventListener("input", () => {
    changeBackgroundColor();
    saveFormToStorage();
});

//Generate Banner event listener
generateBtn.addEventListener("click", () => {
    generateBtn.textContent = "Generating...";
    generateBtn.style.cursor = "progress";
    setTimeout(generateBanner, 1000);
});

// Banner Download event listener
downloadBtn.addEventListener("click", () => {
    downloadBtn.textContent = "Generating...";
    generatingTxt.textContent = "Generating..."
    downloadBtn.style.cursor = "progress";

    bannerWrapper.classList.add("bannerDownload");
    bannerWrapper.classList.toggle("bannerWrapper");
    bannerWrapper.classList.toggle("containerBanner");
    setTimeout(downloadBanner, 1000);
    
});



