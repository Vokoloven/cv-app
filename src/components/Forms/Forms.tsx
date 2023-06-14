import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { fieldsHandler } from './fieldsHandler';
import { sxFormsProps } from './sxFormsProps';
import { TInput } from 'components/Modal/NestedModal';
import { multilineHanlder } from './multilineHandler';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconButton from '@mui/material/IconButton';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';

type TProps = {
    actionName: string | null;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    input: TInput<string>;
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
                        multiline={multilineHanlder(id)}
                        key={id}
                        id={id}
                        label={label}
                        variant="outlined"
                        sx={sxFormsProps({ mt: 1 })}
                        value={input[id] ?? ''}
                    />
                ))}
                {actionName === 'projects' && (
                    <Box sx={{ mt: 1 }}>
                        <IconButton
                            component={'label'}
                            aria-label={'upload picture'}
                            sx={sxIconButtonColor()}
                        >
                            <input hidden type={'file'} accept={'image/*'} />
                            <AddPhotoAlternateIcon />
                        </IconButton>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
