export type TActionName =
    | 'contacts'
    | 'techSkills'
    | 'softSkills'
    | 'languages';
export type TTitle = 'Contacts' | 'Tech Skills' | 'Soft Skills' | 'Languages';
type TItem = {
    actionName: TActionName;
    title: TTitle;
    ariaLabel: string;
}[];

export const items: TItem = [
    {
        actionName: 'contacts',
        title: 'Contacts',
        ariaLabel: 'Add Contacts Button',
    },
    {
        actionName: 'techSkills',
        title: 'Tech Skills',
        ariaLabel: 'Add Tech Skills Button',
    },
    {
        actionName: 'softSkills',
        title: 'Soft Skills',
        ariaLabel: 'Add Soft Skills Button',
    },
    {
        actionName: 'languages',
        title: 'Languages',
        ariaLabel: 'Add Languages Button',
    },
];
