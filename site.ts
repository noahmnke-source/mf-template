---
import site from "@/lib/site";
const items = site.testimonials ?? [];
---
{items.length ? (
  <section class="tst">
    <div class="wrap">
      <span class="eyebrow">Stimmen</span>
      <h2>Das sagen Kundinnen und Kunden</h2>
      <div class="grid grid-3" style="margin-top:38px">
        {items.map((t) => (
          <figure class="card q">
            <blockquote>„{t.text}"</blockquote>
            <figcaption>— {t.author}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
) : null}
<style>
  .q blockquote { font-family: var(--font-display); font-size: 1.12rem; line-height: 1.45; color: var(--ink); }
  .q figcaption { margin-top: 16px; color: var(--muted); font-weight: 500; }
</style>
