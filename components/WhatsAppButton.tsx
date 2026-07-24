import { site } from "@/lib/site";

const WHATSAPP_GREEN = "#25D366";

/**
 * Floating WhatsApp contact button, fixed to the bottom-right on every page.
 * Opens a wa.me chat with a prefilled message. Pure link — no client JS needed.
 */
export default function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(
    site.whatsapp.message,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with MobileMint on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center sm:bottom-6 sm:right-6"
    >
      {/* label that expands leftward on hover (desktop) */}
      <span className="pointer-events-none mr-0 max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold text-ink opacity-0 transition-all duration-300 group-hover:mr-3 group-hover:max-w-[12rem] group-hover:opacity-100 max-sm:hidden">
        <span className="rounded-full bg-paper px-4 py-2 shadow-card ring-1 ring-mint-100">
          Chat on WhatsApp
        </span>
      </span>

      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-[0_14px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
        style={{ backgroundColor: WHATSAPP_GREEN }}
      >
        {/* gentle attention pulse */}
        <span
          className="absolute inset-0 -z-10 animate-ping rounded-full opacity-40"
          style={{ backgroundColor: WHATSAPP_GREEN, animationDuration: "2.4s" }}
        />
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24.044 12.045.044 5.463.044.104 5.4.101 11.986c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.96 11.96 0 005.71 1.447h.006c6.585 0 11.946-5.357 11.949-11.945a11.85 11.85 0 00-3.495-8.4" />
        </svg>
      </span>
    </a>
  );
}
