import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { fieldsHandler } from './fieldsHandler';
import { sxFormsProps } from './sxFormsProps';

type TProps = {
    actionName: string | null;
};

const multiLineHandler = (id: string) => {
    switch (id) {
        case 'description':
            return true;
            break;

        case 'tools':
            return true;
            break;

        default:
            return false;
            break;
    }
};

export const Forms = ({ actionName }: TProps) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {fieldsHandler(actionName)?.map(({ id, label }) => (
                <TextField
                    multiline={multiLineHandler(id)}
                    key={id}
                    id={id}
                    label={label}
                    variant="outlined"
                    sx={sxFormsProps({ mt: 1 })}
                />
            ))}
        </Box>
    );
};
