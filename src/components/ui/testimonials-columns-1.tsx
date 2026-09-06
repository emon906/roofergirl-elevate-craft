import { motion } from "motion/react";

import projectMetal from "@/assets/project-metal.jpg";
import projectShingle from "@/assets/project-shingle.jpg";
import aboutRooferGirl from "@/assets/about-roofergirl.jpg";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "From the first inspection to the final clean-up, every detail felt considered. Our new roof looks exceptional—and the entire process was remarkably calm.",
    name: "Claire Reynolds",
    role: "Homeowner · Stonehaven",
    image: projectShingle,
  },
  {
    quote: "RooferGirl saw issues two other contractors missed. The recommendation was clear, honest, and built around what our home actually needed.",
    name: "Marcus Bennett",
    role: "Homeowner · Westfield",
    image: projectMetal,
  },
  {
    quote: "The workmanship is beautiful. Crisp lines, immaculate flashing, and a crew that respected our property from start to finish.",
    name: "Nina Patel",
    role: "Architect · North & Field Studio",
    image: aboutRooferGirl,
  },
  {
    quote: "After the storm, they moved quickly without ever making us feel rushed. We understood every decision and felt protected throughout.",
    name: "Daniel & Erin Cole",
    role: "Homeowners · Brookside",
    image: projectShingle,
  },
  {
    quote: "A rare combination of technical precision and excellent communication. RooferGirl is now the first call I recommend to clients.",
    name: "Sophie Laurent",
    role: "Interior Designer · Laurent House",
    image: projectMetal,
  },
  {
    quote: "They delivered exactly what was promised: a confident plan, a clean site, and a roof that completely elevated the house.",
    name: "James Walker",
    role: "Homeowner · Cedar Ridge",
    image: aboutRooferGirl,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="mb-4 rounded-lg border border-testimonial-border bg-testimonial p-5 shadow-editorial sm:mb-5 sm:p-6">
      <p className="font-display text-lg leading-relaxed text-foreground sm:text-xl">“{testimonial.quote}”</p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={testimonial.image}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          className="size-11 rounded-full object-cover grayscale"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="truncate text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </article>
  );
}

function TestimonialColumn({ items, duration, reverse = false }: { items: Testimonial[]; duration: number; reverse?: boolean }) {
  const repeated = [...items, ...items];
  return (
    <div className="h-[34rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="will-change-transform"
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {repeated.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsColumn() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <TestimonialColumn items={testimonials.slice(0, 3)} duration={26} />
      <div className="hidden sm:block">
        <TestimonialColumn items={testimonials.slice(3)} duration={31} reverse />
      </div>
      <div className="hidden lg:block">
        <TestimonialColumn items={testimonials.slice(1, 4)} duration={28} />
      </div>
    </div>
  );
}