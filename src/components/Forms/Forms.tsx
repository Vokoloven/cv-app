import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { fieldsHandler } from './fieldsHandler';
import { sxFormsProps } from './sxFormsProps';
import { TInput } from 'components/Modal/NestedModal';

type TProps = {
    actionName: string | null;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    input: TInput<string>;
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

export const Forms = ({ actionName, onChangeHandler, input }: TProps) => {
    return (
        <Box
            onChange={onChangeHandler}
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {fieldsHandler(actionName)?.map(({ id, label }) => (
                    <TextField
                        multiline={multiLineHandler(id)}
                        key={id}
                        id={id}
                        label={label}
                        variant="outlined"
                        sx={sxFormsProps({ mt: 1 })}
                        value={input[id] ?? ''}
                    />
                ))}
            </Box>
        </Box>
    );
};
