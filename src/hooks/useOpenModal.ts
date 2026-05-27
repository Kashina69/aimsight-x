import { createEffect, onCleanup } from "solid-js";

export default function useOpenModal(open: boolean, onClose: () => void) {
    createEffect(() => {
        if (!open || typeof document === "undefined") {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event: KeyboardEvent) => {
            console.log();
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);

        onCleanup(() => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        });
    });
}
