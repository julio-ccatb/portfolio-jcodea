"use client";
import Script from "next/script";
import { useTheme } from "next-themes";
import { useEffect, useMemo } from "react";

declare global {
  interface Window {
    chatwootSDK?: {
      run: (opts: { websiteToken: string; baseUrl: string }) => void;
    };
    chatwootSettings?: Record<string, any>;
    $chatwoot?: any;
  }
}

export default function ChatwootWidget() {
  const { resolvedTheme } = useTheme(); // "light" | "dark" | "system"
  const baseUrl = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL!;
  const token = process.env.NEXT_PUBLIC_CHATWOOT_TOKEN!;

  // Chatwoot solo soporta "light" o "auto" (auto = sigue el sistema/OS).
  // Si tu app está en "dark", usamos "auto" (para que el widget use el modo oscuro del SO).
  // Si tu app está en "light", forzamos "light".
  const cwMode = useMemo(
    () => (resolvedTheme === "light" ? "light" : "auto"),
    [resolvedTheme],
  );

  // Inyecta settings ANTES del SDK
  const settingsScript = `
    window.chatwootSettings = {
      darkMode: "${cwMode}",
      locale: "es"
    };
  `;

  useEffect(() => {
    // (Opcional) Si quieres re-sincronizar al cambiar el tema:
    // 1) actualiza el setting
    if (window.chatwootSettings) {
      window.chatwootSettings.darkMode = cwMode;
    }
    // 2) recarga el iframe del widget para aplicar (no hay API oficial para forzar "dark")
    const iframe = document.getElementById(
      "chatwoot_livechat_widget",
    ) as HTMLIFrameElement | null;
    if (iframe?.contentWindow) {
      // “Soft reload”: ocultar/mostrar para forzar re-render
      window.$chatwoot?.hide?.();
      setTimeout(() => window.$chatwoot?.toggle?.(), 50);
    }
  }, [cwMode]);

  return (
    <>
      <Script id="chatwoot-settings" strategy="afterInteractive">
        {settingsScript}
      </Script>
      <Script
        id="chatwoot-sdk"
        strategy="afterInteractive"
        src={`${baseUrl}/packs/js/sdk.js`}
        onLoad={() => {
          window.chatwootSDK?.run({ websiteToken: token, baseUrl });
        }}
      />
    </>
  );
}
