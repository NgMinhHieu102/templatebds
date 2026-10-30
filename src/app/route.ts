import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-dynamic";

export async function GET() {
  const sourcePath = join(process.cwd(), "public", "lumiereprimehills.html");
  const html = await readFile(sourcePath, "utf8");
  const normalizedHtml = html
    .replaceAll("/lumiereprimehills/_next/", "/lumiereprimehills/_next/")
    .replaceAll('src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"', "")
    .replace("</body>", `<script>
      (() => {
        const reveal = (element) => {
          element.style.setProperty("opacity", "1", "important");
          element.style.setProperty("transform", "translate3d(0, 0, 0)", "important");
          element.style.setProperty("filter", "none", "important");
          element.style.transition = "opacity 800ms ease, transform 800ms ease, filter 800ms ease";
        };
        window.setTimeout(() => {
          const revealed = new Set();
          const keepVisible = new MutationObserver((records) => {
            records.forEach(({ target }) => {
              if (revealed.has(target)) {
                const style = getComputedStyle(target);
                if (style.opacity !== "1" || style.filter !== "none" || style.transform !== "matrix(1, 0, 0, 1, 0, 0)") {
                  reveal(target);
                }
              }
            });
          });
          const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
              if (isIntersecting) {
                revealed.add(target);
                keepVisible.observe(target, { attributes: true, attributeFilter: ["style"] });
                reveal(target);
              }
            });
          }, { rootMargin: "0px 0px -10% 0px", threshold: 0 });
          document.querySelectorAll("[data-title]").forEach((element) => revealObserver.observe(element));
          window.dispatchEvent(new Event("scroll"));
        }, 1200);
      })();
    </script></body>`);

  return new Response(normalizedHtml, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
