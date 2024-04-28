function removeShortSection() {
    const checkAndRemove = () => {
        // Select the element we want to remove
        const select = document.querySelectorAll("ytd-rich-section-renderer")[1];
        // If element exists, remove it; otherwise, check again after a delay
        select ? select.remove() : setTimeout(checkAndRemove, 1500);
    };
    checkAndRemove();
    // Listen for scroll event to continuously check and remove element
    document.addEventListener("scroll", checkAndRemove);
}

removeShortSection();