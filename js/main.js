
document.addEventListener('DOMContentLoaded', function() {

    const toggleSidebar = document.getElementById('toggle-sidebar')
    const toggleNotifSidebar = document.getElementById('toggle-notif-sidebar')
    const bgOverlay = document.getElementById('bg-overlay')
    const sidebarOverlay = document.getElementById('sidebar-overlay')
    const body = document.getElementsByTagName('body')[0]
    const tooltip = document.querySelectorAll('.tippy')
    const preloader = document.getElementById('preloader')

    preloader.addEventListener('load', (e) => {
        e.preventDefault();

        preloader.animate({
            top: -200
        }, 1500)
    })

    // Main Sidebar
    toggleSidebar.addEventListener('click', () => {
        const x = document.getElementById('sidebar-wrapper')

        if (x.style.display === "none") {
            x.style.display = "block"
            sidebarOverlay.classList.add("sidebar-bg-overlay")
            body.classList.add("disable-body-scroll")
        } else {
            x.style.display = "none"
            bgOverlay.classList.remove("sidebar-bg-overlay")
            body.classList.remove("disable-body-scroll")
        }
    })

    // Notification Right Sidebar
    toggleNotifSidebar.addEventListener('click', () => {
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
    bgOverlay.addEventListener('click', () => {
        const y = document.getElementById('toggle-notif-wrapper')
        
        if (y.style.display === "block") {
            y.style.display = "none"
            bgOverlay.classList.remove("notif-bg-overlay")
            body.classList.remove("disable-body-scroll")
        } else {
            y.style.display = "block"
            bgOverlay.classList.add("notif-bg-overlay")
            bgOverlay.classList.add("slide-out-right")
            body.classList.add("disable-body-scroll")
        }
    })

    // To Remove the Overlay
    sidebarOverlay.addEventListener('click', () => {
        const b = document.getElementById('sidebar-wrapper')
        
        if (b.style.display === "block") {
            b.style.display = "none"
            sidebarOverlay.classList.remove("sidebar-bg-overlay")
            body.classList.remove("disable-body-scroll")
        } else {
            b.style.display = "block"
            sidebarOverlay.classList.add("sidebar-bg-overlay")
            body.classList.add("disable-body-scroll")
        }
    })

    // Initialized Tooltip
    tippy(tooltip, {
        theme: 'gray',
        animation: 'scale',
        arrow: false
    });
})

