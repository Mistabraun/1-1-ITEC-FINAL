const sidebar = document.getElementById("sidebar") 

var opened = false

const setActive = (active) => { 
    if (active) {
        document.getElementById("sidebar-bg").classList.add("active")
        document.getElementById("sidebar").classList.add("active")
    } else { 
        document.getElementById("sidebar-bg").classList.remove("active")
    document.getElementById("sidebar").classList.remove("active")
    }
    
}

const sidebarOpen = document.getElementById("sidebar-open")
const sidebarClose = document.getElementById("sidebar-close")
const sidebarBg = document.getElementById("sidebar-bg")
if (sidebarOpen) {
    sidebarOpen.addEventListener("click", function () {
        setActive(true)
    })
}

if (sidebarBg) { 
    sidebarBg.addEventListener("click", function () {
        setActive(false)
    })
}

if (sidebarClose) {
    sidebarClose.addEventListener("click", function () {
        setActive(false)
    })
}

const loader = document.getElementById("loader")

if (loader) {
    if (document.readyState !== "complete" || document.readyState !== "interactive") {
        loader.classList.add("active")
    }
    const loading = () => {
        setTimeout(() => {
            loader.classList.add("hide")
        }, 1000);
        setTimeout(() => {
            loader.classList.remove("active")
        }, 1200);
    }
    window.addEventListener("load", loading)
}

// FROM THE WEB
const debounce = (fn) => {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
            cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
            // Call our function and pass any params we received
            fn(...params);
        });
    };
};

// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
    
    if (window.scrollY > 100) {
        document.getElementById("navigation").classList.add("active")
    } else { 
        document.getElementById("navigation").classList.remove("active")
    }
};


document.addEventListener('scroll', debounce(storeScroll));

// Update scroll position for first time
storeScroll();
