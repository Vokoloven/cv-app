type TFields = {
    [x: string]: string;
}[];

const nameFields: TFields = [
    { id: 'firstName', label: 'First Name' },
    { id: 'secondName', label: 'Second Name' },
    { id: 'position', label: 'Position' },
];

const summaryFields: TFields = [{ id: 'summary', label: 'Summary' }];

const projectsFields: TFields = [
    { id: 'projectName', label: 'Project Name' },
    { id: 'repo', label: 'Repo' },
    { id: 'livePage', label: 'Live Page' },
    { id: 'tools', label: 'Tools' },
    { id: 'description', label: 'Description' },
];

const experienceFields: TFields = [
    { id: 'title', label: 'Title' },
    { id: 'period', label: 'Period' },
];

const educationFields: TFields = [
    { id: 'institution', label: 'Institution' },
    { id: 'period', label: 'Period' },
    { id: 'degree', label: 'Degree' },
];

const phoneFields: TFields = [{ id: 'phone', label: 'Phone' }];

const emailFields: TFields = [{ id: 'email', label: 'Email' }];

const gitHubFields: TFields = [{ id: 'github', label: 'GitHub' }];

const linkedInFields: TFields = [{ id: 'linkedin', label: 'LinkedIn' }];

const telegramFields: TFields = [{ id: 'telegram', label: 'Telegram' }];

const techSkillsFields: TFields = [{ id: 'techSkills', label: 'Tech Skills' }];

const softSkillsFields: TFields = [{ id: 'softSkills', label: 'Soft Skills' }];

const languagesFields: TFields = [{ id: 'languages', label: 'Languages' }];

const cvFields: TFields = [{ id: 'cv', label: 'CV' }];

export const dataFields: { name: string; fields: TFields }[] = [
    { name: 'name', fields: nameFields },
    { name: 'summary', fields: summaryFields },
    { name: 'projects', fields: projectsFields },
    { name: 'experience', fields: experienceFields },
    { name: 'education', fields: educationFields },
    { name: 'phone', fields: phoneFields },
    { name: 'email', fields: emailFields },
    { name: 'github', fields: gitHubFields },
    { name: 'linkedin', fields: linkedInFields },
    { name: 'telegram', fields: telegramFields },
    { name: 'techSkills', fields: techSkillsFields },
    { name: 'softSkills', fields: softSkillsFields },
    { name: 'languages', fields: languagesFields },
    { name: 'cv', fields: cvFields },
];
