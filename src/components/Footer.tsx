import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-8 md:px-24">
      <div className="flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <p>{personal.location}</p>
      </div>
    </footer>
  );
}
