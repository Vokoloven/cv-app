type TFields = {
    [x: string]: string;
}[];

const nameFields: TFields = [
    { id: 'firstName', label: 'First Name' },
    { id: 'secondName', label: 'Second Name' },
    { id: 'position', label: 'Position' },
];

const summaryFields: TFields = [{ id: 'description', label: 'Description' }];

const projectsFields: TFields = [
    { id: 'repo', label: 'Repo' },
    { id: 'link', label: 'Link' },
    { id: 'tools', label: 'Tools' },
    { id: 'description', label: 'Description' },
];

const experienceFields: TFields = [
    { id: 'title', label: 'Title' },
    { id: 'period', label: 'Period' },
];

const experienceFieldsItems: TFields = [{ id: 'item', label: 'Item' }];

const educationFields: TFields = [
    { id: 'institution ', label: 'Institution' },
    { id: 'period ', label: 'Period' },
    { id: 'degree ', label: 'Degree' },
];

const phoneFields: TFields = [{ id: 'phone', label: 'Phone' }];

const emailFields: TFields = [{ id: 'email', label: 'Email' }];

const gitHubFields: TFields = [{ id: 'github', label: 'GitHub' }];

const linkedInFields: TFields = [{ id: 'linkedin', label: 'LinkedIn' }];

const telegramFields: TFields = [{ id: 'telegram', label: 'Telegram' }];

const techSkillsFields: TFields = [{ id: 'techSkills', label: 'Tech Skills' }];

const softSkillsFields: TFields = [{ id: 'softSkills ', label: 'Soft Skills' }];

const languagesFields: TFields = [{ id: 'languages', label: 'Languages' }];

export const dataFields: { name: string; fields: TFields }[] = [
    { name: 'Name', fields: nameFields },
    { name: 'Summary', fields: summaryFields },
    { name: 'Projects', fields: projectsFields },
    { name: 'Experience', fields: experienceFields },
    { name: 'Education', fields: educationFields },
    { name: 'phone', fields: phoneFields },
    { name: 'email', fields: emailFields },
    { name: 'github', fields: gitHubFields },
    { name: 'linkedin', fields: linkedInFields },
    { name: 'telegram', fields: telegramFields },
    { name: 'techSkills', fields: techSkillsFields },
    { name: 'softSkills', fields: softSkillsFields },
    { name: 'languages', fields: languagesFields },
];
