export default function Footer() {
  return (
    <footer className="bg-primary py-8 border-t border-accent-green/10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-surface/60 text-sm">
          © {new Date().getFullYear()} Linbo Cao. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
} 