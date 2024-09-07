

        document.addEventListener("DOMContentLoaded", () => {
            const hamburger = document.getElementById("hamburger");
            const sidebar = document.getElementById("sidebar");
            const closeBtn = document.getElementById("close-btn");


            function toggleSidebar() {
                if (sidebar.style.width === "300px") {
                    sidebar.style.width = "0";
                }
                else {
                    sidebar.style.width = "300px"
                }
            }

            hamburger.addEventListener("click", (event) => {
                event.stopPropagation;
                toggleSidebar();
            })

            closeBtn.addEventListener("click", () => {
                sidebar.style.width = "0";
            })

            window.addEventListener("click", () => {
                if (!sidebar.contains(event.target) &&
                    !hamburger.contains(event.target)) {
                    sidebar.style.width = "0";
                }
            })

        })
