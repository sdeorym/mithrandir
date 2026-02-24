import i18n from "i18next";
import Button from "./Button"


function Switcher() {
  return (
    <div className = "langBar">
        <Button className="buttonLang" onClick={() => i18n.changeLanguage("fr")} title="FR" aria="Changer à français" />
        <Button className="buttonLang" onClick={() => i18n.changeLanguage("en")} title="EN" aria="Switch to English" />
    </div>
  );
}

export default Switcher;