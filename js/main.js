
document.addEventListener('DOMContentLoaded', function() {

    const toggleSidebar = document.getElementById('toggle-sidebar')
    const toggleNotifSidebar = document.getElementById('toggle-notif-sidebar')
    const bgOverlay = document.getElementById('bg-overlay')
    const sidebarOverlay = document.getElementById('sidebar-overlay')
    const body = document.getElementsByTagName('body')[0]
    const tooltip = document.querySelector('.tippy')
    const preloader = document.getElementById('preloader')

    // Preloader
    preloader.addEventListener('load', (e) => {
        e.preventDefault();

        preloader.animate({
            top: -200
        }, 1500)
    })

    // Main Sidebar
    toggleSidebar.addEventListener('click', (e) => {
        e.preventDefault();

        const x = document.getElementById('sidebar-wrapper')

        if (x.style.display === "block") {
            x.style.display = "none"
            bgOverlay.classList.remove("notif-bg-overlay")
            body.classList.remove("disable-body-scroll")
        } else {
            x.style.display = "block"
            bgOverlay.classList.add("notif-bg-overlay")
            body.classList.add("disable-body-scroll")
        }
    })

    // Notification Right Sidebar
    toggleNotifSidebar.addEventListener('click', (e) => {
        e.preventDefault();

        const y = document.getElementById('toggle-notif-wrapper')
        
        if (y.style.display === "block") {
            y.style.display = "none"
            bgOverlay.classList.remove("notif-bg-overlay")
            body.classList.remove("disable-body-scroll")
        } else {
            y.style.display = "block"
            bgOverlay.classList.add("notif-bg-overlay")
            body.classList.add("disable-body-scroll")
        }
    })

    // To Remove the Overlay
    bgOverlay.addEventListener('click', (e) => {
        e.preventDefault();

        const y = document.getElementById('toggle-notif-wrapper')
        
        if (y.style.display === "block") {
            y.style.display = "none"
            bgOverlay.classList.remove("notif-bg-overlay")
            body.classList.remove("disable-body-scroll")
        } else {
            y.style.display = "block"
            bgOverlay.classList.add("notif-bg-overlay")
            body.classList.add("disable-body-scroll")
        }
    })

    // To Remove the Overlay
    sidebarOverlay.addEventListener('click', (e) => {
        e.preventDefault();

        const b = document.getElementById('sidebar-wrapper')
        
        if (b.style.display === "block") {
            b.style.display = "none"
            body.classList.remove("disable-body-scroll")
        } else {
            b.style.display = "block"
            body.classList.add("disable-body-scroll")
        }
    })

    // Initialized Tooltip
    tippy(tooltip, {
        theme: 'gray',
    });

})
