import { useRouter } from "next/router";
import { i18n } from "../../../i18n";
const useTranslationUtils = () => {
  const { query } = useRouter();
  const direction = i18n.dir(query?.lang as string);
  


  return { direction };
};

export default useTranslationUtils;
