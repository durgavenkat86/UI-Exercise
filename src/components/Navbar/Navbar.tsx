// I18N
import "../../i18N/config";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <nav className="flex justify-between items-baseline mb-5 p-10">
      <h1 className="text-4xl">{t("AXIAMATIC")}</h1>
      <Link to="/edit-setup">{t("EXIT_STEP")}</Link>
    </nav>
  );
};

export default Navbar;
