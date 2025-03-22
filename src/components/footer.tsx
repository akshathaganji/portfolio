export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-secondary text-white flex justify-center items-center">
      <p className="text-sm">
        © {currentYear} - Portfolio Website by Akshatha Ganji
      </p>
    </footer>
  );
}
