import type { CSSProperties } from "react";
import { useNavigate } from "react-router";
import styles from "./directory.module.scss";
import type { ThemeName } from "../../types/story";

interface ThemeCard {
  value: ThemeName;
  label: string;
  icon: string;
  accent: string;
}

const THEME_CARDS: ThemeCard[] = [
  { value: "halloween", label: "Halloween", icon: "🎃", accent: "#FF9A00" },
  { value: "christmas", label: "Christmas", icon: "🎄", accent: "#2E8B57" },
  { value: "easter", label: "Easter", icon: "🐣", accent: "#F2A6B0" },
];

const Directory = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.themeGrid} role="group" aria-label="Choose a story theme">
      {THEME_CARDS.map((card) => (
        <button
          key={card.value}
          type="button"
          className={styles.themeCard}
          style={{ "--accent": card.accent } as CSSProperties}
          onClick={() => navigate(`/story/${card.value}`)}
        >
          <span className={styles.themeIcon} aria-hidden="true">
            {card.icon}
          </span>
          <span className={styles.themeLabel}>{card.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Directory;
