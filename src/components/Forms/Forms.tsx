import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { fieldsHandler } from './fieldsHandler';
import { sxFormsProps } from './sxFormsProps';

type TProps = {
    actionName: string | null;
};

export const Forms = ({ actionName }: TProps) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {fieldsHandler(actionName)?.map(({ id, label }) => (
                <TextField
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
