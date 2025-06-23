import { House, HistoryIcon, Settings, Sun } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
type AvailableTheme = "dark" | "light";
export function Menu() {
  const [theme, setTheme] = useState<AvailableTheme>("dark");
  const changeThemeInfo = theme === "dark" ? "claro" : "escuro";
  function handleChangeTheme() {
    event?.preventDefault();
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    console.log("useEffect executou");
    return () => {
      console.log("atualizando...");
    };
  }, [theme]);

  return (
    <nav className={styles.navContainer}>
      <a href="#" title="Ir para a home" aria-label="Ir para a home">
        <House size={24} color="var(--text-over-primary)" />
      </a>
      <a href="#" title="Acessar histórico" aria-label="Acessar histórico">
        <HistoryIcon size={24} color="var(--text-over-primary)" />
      </a>
      <a href="#" title="Configurações" aria-label="Configurações">
        <Settings size={24} color="var(--text-over-primary)" />
      </a>
      <a
        href="https://www.google.com"
        title={`alternar para o tema ${changeThemeInfo}`}
        aria-label={`alternar para o tema ${changeThemeInfo}`}
        onClick={handleChangeTheme}
      >
        <Sun size={24} color="var(--text-over-primary)" />
      </a>
    </nav>
  );
}
