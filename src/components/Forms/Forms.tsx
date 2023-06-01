import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { fieldsHandler } from './fieldsHandler';
import { sxFormsProps } from './sxFormsProps';
import { useState } from 'react';

type TProps = {
    actionName: string | null;
};

type TInput<T> = {
    [x: string]: T;
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
    const [input, setInput] = useState<TInput<string>>({});

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = {
            [e.target.id]: e.target.value,
        };

        setInput((prevState: TInput<string>) => ({ ...prevState, ...value }));
    };

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
