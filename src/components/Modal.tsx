import { createUniqueId, JSX, Show } from "solid-js";
import { Portal } from "solid-js/web";
import useOpenModal from "~/hooks/useOpenModal";

type ModalProps = {
  open: boolean;
  title: string;
  titleId: string;
  children: JSX.Element;
  onClose: () => void;
};

function Modal(props: ModalProps) {
  useOpenModal(props.open, props.onClose);

  return (
    <Show when={props.open}>
      <Portal>
        <div
          class="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]/55 px-4 py-8"
          role="presentation"
          onClick={props.onClose}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={props.titleId}
            class="max-h-[88vh] w-full max-w-2xl overflow-y-auto border-2 border-[#1a1a1a] bg-[#f7f5f0] text-[#1a1a1a] shadow-[8px_8px_0_#1a1a1a]"
            onClick={(event) => event.stopPropagation()}
          >
            <header class="flex items-start justify-between gap-4 border-b-2 border-[#1a1a1a] bg-[#8fa3a8] px-5 py-4">
              <h2
                id={props.titleId}
                class="text-[34px] tracking-[2px] [font-family:'Bebas_Neue',sans-serif]"
              >
                {props.title}
              </h2>
              <button
                type="button"
                aria-label="Close modal"
                class="border-2 border-[#1a1a1a] bg-[#f7f5f0] px-3 py-1 text-[14px] font-extrabold uppercase tracking-[2px] shadow-[3px_3px_0_#1a1a1a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#1a1a1a] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0_#1a1a1a]"
                onClick={props.onClose}
              >
                Close
              </button>
            </header>
            <div class="px-5 py-5 [font-family:'Space_Grotesk',sans-serif]">
              {props.children}
            </div>
          </section>
        </div>
      </Portal>
    </Show>
  );
}

export default Modal;
