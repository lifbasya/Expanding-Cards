const panels = document.querySelectorAll(".panel")


panels.forEach((panel) => {
    panel.addEventListener("click", () => {

        // Langkah pertama adalah kasih tugas jawavascript agar meremove class active
        panels.forEach((panel) => {
            panel.classList.remove("active");
        })

        // Langkah kedua, tambahkan kelas active di pabel yang di klik user

        panel.classList.add("active");
    });
});

