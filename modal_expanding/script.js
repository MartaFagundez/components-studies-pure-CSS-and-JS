{
    const modalContainer = document.getElementById("modalContainer");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");

    openBtn?.addEventListener("click", () => {
        if (!modalContainer?.classList.contains("expanding")) {
            modalContainer?.classList.add("expanding");
        }
        if (modalContainer?.classList.contains("out")) {
            modalContainer?.classList.remove("out");
        }
    });

    closeBtn?.addEventListener("click", () => {
        modalContainer?.classList.add("out");
    });
}