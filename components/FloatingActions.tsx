import PlayStoreButton from "./PlayStoreButton";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Fixed stack of floating contact buttons in the bottom-right corner,
 * shown on every page. Play Store profile on top, WhatsApp below.
 */
export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <PlayStoreButton />
      <WhatsAppButton />
    </div>
  );
}
