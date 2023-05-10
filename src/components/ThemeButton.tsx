import { useTheme } from '../hooks/useThemeContext';

export default function ThemeButton() {
  const { toggleTheme } = useTheme();

  return (
    <div className="ThemeButton">
      <span className="ThemeButton__label">Toggle Theme</span>
      <button type="button" className="ThemeButton__button" onClick={toggleTheme}>
        <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
          <path
            fill="currentColor"
            d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"
          />
        </svg>
      </button>
    </div>
  );
}
