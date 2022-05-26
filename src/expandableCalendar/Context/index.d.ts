import { UpdateSources } from '../commons';
export interface CalendarContextProps {
    date: string;
    prevDate: string;
    setDate: (date: string, source: UpdateSources) => void;
    updateSource: UpdateSources;
    setDisabled: (disable: boolean) => void;
}
declare const CalendarContext: any;
export default CalendarContext;
