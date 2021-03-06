import DateLocale from 'date-fns/locale/pt-BR';
import { format } from "date-fns";

export function formatDatetime(date) {
    return format(new Date(date), "dd '/' MM '/' yyyy 'ás' HH:mm", { locale: DateLocale });
};
