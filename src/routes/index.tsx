import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight, Check, Mail, Menu, Play, ShieldCheck, X } from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/roofergirl-hero.jpg";
import projectMetal from "@/assets/project-metal.jpg";
import projectShingle from "@/assets/project-shingle.jpg";
import aboutImage from "@/assets/about-roofergirl.jpg";
import reelMetal from "@/assets/reel-metal.mp4.asset.json";
import reelCraft from "@/assets/reel-craft.mp4.asset.json";
import reelReveal from "@/assets/reel-reveal.mp4.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RooferGirl | Exceptional Roofing Craftsmanship" },
      { name: "description", content: "Premium roofing, repairs, and storm restoration delivered with confidence, precision, and care by RooferGirl." },
      { property: "og:title", content: "RooferGirl | Exceptional Roofing Craftsmanship" },
      { property: "og:description", content: "Strong roofs, elevated standards, and a distinctly better roofing experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const reveal = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.8 } };

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-x-hidden bg-background">
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-surface">
        <motion.img src={heroImage} alt="RooferGirl on a precision metal roof at dusk" width={1920} height={1088} className="absolute inset-0 size-full object-cover" initial={{ scale: 1.06 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease: "easeOut" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.12_0.03_240/.88)_0%,oklch(0.12_0.03_240/.48)_48%,oklch(0.12_0.03_240/.18)_100%)]" />
        <header className="relative z-20 mx-auto grid max-w-[90rem] grid-cols-[minmax(0,1fr)_auto] items-center px-5 py-6 sm:px-8 lg:px-12">
          <a href="#top" className="font-display text-2xl font-semibold">Roofer<span className="text-highlight italic">Girl</span></a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {['Services','Work','Reels','About'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="eyebrow text-surface/75 transition-colors hover:text-surface">{item}</a>)}
            <Button asChild variant="inverse" size="xl"><a href="#contact">Get a quote</a></Button>
          </nav>
          <Button variant="inverse" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</Button>
          {menuOpen && <nav className="col-span-2 mt-5 grid gap-1 border-t border-surface/20 bg-ink/90 p-4 md:hidden">{['Services','Work','Reels','About','Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="py-3 text-sm font-semibold uppercase tracking-[0.18em]">{item}</a>)}</nav>}
        </header>
        <div id="top" className="relative z-10 mx-auto flex min-h-[calc(100svh-106px)] max-w-[90rem] items-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-5xl">
            <motion.p className="eyebrow mb-6 flex items-center gap-3 text-highlight" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .3 }}><span className="h-px w-10 bg-highlight" /> Female-led. Detail-driven.</motion.p>
            <motion.h1 className="max-w-5xl font-display text-[clamp(3.6rem,8.4vw,8.5rem)] font-medium leading-[.87]" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .15 }}>Strong Roofs.<br /><span className="italic text-highlight">Exceptional</span> Craftsmanship.</motion.h1>
            <motion.div className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }}>
              <Button asChild variant="hero" size="xl"><a href="#contact">Get a Free Quote <ArrowRight /></a></Button>
              <p className="max-w-xs text-sm leading-relaxed text-surface/70">Roofing done with sharper standards, clear communication, and care that shows.</p>
            </motion.div>
          </div>
          <a href="#services" aria-label="Explore services" className="absolute bottom-7 right-6 hidden size-12 place-items-center rounded-full border border-surface/35 sm:grid lg:right-12"><ArrowDown className="size-4" /></a>
        </div>
      </section>

      <section id="services" className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <motion.div {...reveal} className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[.75fr_1.25fr]">
            <p className="eyebrow text-primary">01 / What we do</p>
            <h2 className="font-display text-5xl leading-[.98] sm:text-7xl">Built to protect.<br /><span className="italic text-primary">Made to endure.</span></h2>
          </motion.div>
          <div className="divide-y divide-border">
            {[
              ['01','Roof Replacement','A complete, considered roofing system—selected for your home, climate, and long-term peace of mind.'],
              ['02','Roof Repair','Accurate diagnosis and lasting repairs for leaks, flashing, storm damage, and everyday wear.'],
              ['03','Storm Restoration','Calm, capable support after severe weather—from assessment through a beautifully restored roof.'],
              ['04','Roof Inspections','Thorough, plain-language reporting so you know exactly what is sound, what needs attention, and why.'],
            ].map(([num,title,copy], i) => (
              <motion.article key={title} {...reveal} transition={{ duration: .65, delay: i * .05 }} className="group grid gap-4 py-8 sm:grid-cols-[5rem_1fr_1fr_auto] sm:items-center sm:py-10">
                <span className="eyebrow text-muted-foreground">{num}</span><h3 className="font-display text-3xl sm:text-4xl">{title}</h3><p className="max-w-lg text-sm leading-7 text-muted-foreground">{copy}</p><ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-2" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-ink py-24 text-surface sm:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <motion.div {...reveal} className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow text-highlight">02 / Recent work</p><h2 className="mt-4 font-display text-5xl sm:text-7xl">The proof is <span className="italic text-highlight">overhead.</span></h2></div><p className="max-w-sm text-sm leading-7 text-surface/60">Every line, seam, and edge is an opportunity to do the work exceptionally well.</p></motion.div>
          <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            {[{img:projectMetal,title:'Standing Seam Residence',type:'Metal roofing · Full replacement'}, {img:projectShingle,title:'Cedar Ridge House',type:'Architectural shingles · Restoration'}].map((project, i) => (
              <motion.figure key={project.title} {...reveal} className={`group relative overflow-hidden ${i === 1 ? 'lg:mt-28' : ''}`}>
                <img src={project.img} alt={project.title} width={1408} height={1104} loading="lazy" className="aspect-[4/3] size-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,oklch(0.1_0.02_240/.82))]" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><p className="eyebrow text-highlight">{project.type}</p><h3 className="mt-2 font-display text-3xl sm:text-4xl">{project.title}</h3></figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section id="reels" className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <motion.div {...reveal} className="mb-12 text-center"><p className="eyebrow text-primary">03 / On the roof</p><h2 className="mt-4 font-display text-5xl sm:text-7xl">Craft in <span className="italic text-primary">motion.</span></h2></motion.div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[{src:reelMetal.url,label:'Precision metalwork'}, {src:reelCraft.url,label:'Crafted by hand'}, {src:reelReveal.url,label:'The final reveal'}].map((reel, i) => (
              <motion.figure key={reel.label} {...reveal} transition={{ duration: .8, delay: i * .12 }} className={`relative overflow-hidden rounded-lg bg-ink shadow-editorial ${i === 1 ? 'sm:-translate-y-5' : ''}`}>
                <video src={reel.src} autoPlay muted loop playsInline preload="metadata" aria-label={reel.label} className="aspect-[9/16] w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_68%,oklch(0.1_0.02_240/.75))]" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-surface"><span className="eyebrow">{reel.label}</span><span className="grid size-8 place-items-center rounded-full border border-surface/40"><Play className="size-3 fill-current" /></span></figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <motion.div {...reveal} className="mb-12 grid gap-6 lg:grid-cols-2"><div><p className="eyebrow text-primary">04 / Trusted work</p><h2 className="mt-4 font-display text-5xl sm:text-7xl">What homeowners <span className="italic text-primary">remember.</span></h2></div><p className="max-w-md self-end text-sm leading-7 text-muted-foreground">Not just a stronger roof—a clear, respectful experience from the first conversation to the final walkthrough.</p></motion.div>
          <TestimonialsColumn />
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <motion.p {...reveal} className="eyebrow text-highlight">05 / About RooferGirl</motion.p>
          <motion.h2 {...reveal} className="relative z-10 mt-6 max-w-6xl font-display text-[clamp(3.5rem,8vw,8rem)] leading-[.9]">Changing what<br />strength <span className="italic text-highlight">looks like.</span></motion.h2>
          <div className="relative mt-12 min-h-[44rem] sm:mt-[-2rem] lg:min-h-[51rem]">
            <motion.img src={aboutImage} alt="RooferGirl inspecting copper roof flashing" width={1200} height={1504} loading="lazy" initial={{ opacity: 0, y: 60, rotate: 1.5 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="ml-auto h-[34rem] w-full max-w-2xl rounded-sm object-cover sm:h-[44rem] sm:w-[62%]" />
            <motion.div {...reveal} className="relative -mt-20 max-w-xl bg-ink p-7 shadow-hero sm:absolute sm:bottom-0 sm:left-0 sm:mt-0 sm:p-10">
              <p className="font-display text-2xl leading-relaxed sm:text-3xl">“Confidence isn’t about being the loudest on the jobsite. It’s knowing the work will speak for itself.”</p>
              <div className="mt-8 grid gap-4 text-sm leading-7 text-surface/65 sm:grid-cols-2"><p>RooferGirl was built to raise expectations in an industry ready for a different kind of leadership.</p><p>We pair exacting craftsmanship with honest advice, thoughtful communication, and deep respect for every home.</p></div>
            </motion.div>
            <div className="absolute right-[-3rem] top-1/3 hidden size-36 place-items-center rounded-full border border-highlight/50 text-center lg:grid"><span className="eyebrow text-highlight">Built different<br />by design</span></div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink py-24 text-surface sm:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
          <motion.div {...reveal}><p className="eyebrow text-highlight">06 / Start a conversation</p><h2 className="mt-4 font-display text-5xl leading-none sm:text-7xl">Your home deserves <span className="italic text-highlight">our best.</span></h2><p className="mt-7 max-w-md text-sm leading-7 text-surface/60">Tell us what’s happening overhead. We’ll follow up with clear next steps and a no-pressure quote.</p><a href="mailto:roofergirl.inc@outlook.com" className="mt-10 inline-flex items-center gap-3 border-b border-highlight pb-2 text-sm text-highlight"><Mail className="size-4" /> roofergirl.inc@outlook.com</a></motion.div>
          <motion.form {...reveal} action="mailto:roofergirl.inc@outlook.com" method="post" encType="text/plain" className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2"><span className="eyebrow text-surface/55">Name</span><Input name="name" required placeholder="Your name" className="h-13 rounded-none border-surface/25 text-surface placeholder:text-surface/35 focus-visible:ring-highlight" /></label>
            <label className="grid gap-2"><span className="eyebrow text-surface/55">Email</span><Input name="email" type="email" required placeholder="you@email.com" className="h-13 rounded-none border-surface/25 text-surface placeholder:text-surface/35 focus-visible:ring-highlight" /></label>
            <label className="grid gap-2"><span className="eyebrow text-surface/55">Phone</span><Input name="phone" type="tel" placeholder="Phone number" className="h-13 rounded-none border-surface/25 text-surface placeholder:text-surface/35 focus-visible:ring-highlight" /></label>
            <label className="grid gap-2"><span className="eyebrow text-surface/55">Service</span><select name="service" className="h-13 rounded-none border border-surface/25 bg-transparent px-3 text-sm text-surface focus:outline-none focus:ring-1 focus:ring-highlight"><option className="text-ink">Roof replacement</option><option className="text-ink">Roof repair</option><option className="text-ink">Storm restoration</option><option className="text-ink">Inspection</option></select></label>
            <label className="grid gap-2 sm:col-span-2"><span className="eyebrow text-surface/55">Message</span><Textarea name="message" required placeholder="Tell us a little about your roof..." className="min-h-36 rounded-none border-surface/25 text-surface placeholder:text-surface/35 focus-visible:ring-highlight" /></label>
            <div className="sm:col-span-2"><Button type="submit" variant="hero" size="xl">Request my free quote <ArrowRight /></Button></div>
          </motion.form>
        </div>
      </section>

      <footer className="bg-ink text-surface"><div className="mx-auto flex max-w-[90rem] flex-col gap-7 border-t border-surface/15 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><a href="#top" className="font-display text-2xl font-semibold">Roofer<span className="italic text-highlight">Girl</span></a><div className="flex items-center gap-2 text-xs text-surface/45"><ShieldCheck className="size-4 text-highlight" /> Craftsmanship you can count on.</div><p className="text-xs text-surface/45">© 2026 RooferGirl. All rights reserved.</p></div></footer>
    </main>
  );
}
