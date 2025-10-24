document.addEventListener('DOMContentLoaded', () => {

    // The class we want to add to the active link
    const activeClass = 'active';

    // --- Get all the elements ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#nav-links a');

    // --- The "Observer" ---
    // This watches as you scroll and sees which section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the ID of the section that is in view
                const id = entry.target.getAttribute('id');
                
                // Remove .active class from ALL links
                navLinks.forEach(link => {
                    link.classList.remove(activeClass); 
                });

                // Add .active class to the ONE matching link
                const activeLink = document.querySelector(`#nav-links a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add(activeClass); // <-- CORRECTED: Use the 'activeClass' variable
                }
            }
        });
    }, {
        // This makes the highlighting trigger when the section is 60% in view
        threshold: 0.6,
        // This offsets the "top" of the viewport by 81px to account for the nav
        rootMargin: '-81px 0px 0px 0px' 
    });

    // --- Start observing ---
    // Tell the observer to watch every <section>
    sections.forEach(section => {
        observer.observe(section);
    });

});