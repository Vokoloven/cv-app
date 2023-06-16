import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { fieldsHandler } from './fieldsHandler';
import { sxFormsProps } from './sxFormsProps';
import { TInput } from 'components/Modal/NestedModal';
import { multilineHanlder } from './multilineHandler';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconButton from '@mui/material/IconButton';
import { sxIconButtonColor } from 'theme/sxIconButtonColor';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';

type TProps = {
    actionName: string | null;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    input: TInput<string>;
    activeButton: boolean;
    loadingImageProgress: boolean;
};

export const Forms = ({
    actionName,
    onChangeHandler,
    input,
    activeButton,
    loadingImageProgress,
}: TProps) => {
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
                    <Box sx={{ mt: 1, position: 'relative' }}>
                        <IconButton
                            component={'label'}
                            aria-label={'upload picture'}
                            sx={sxIconButtonColor({
                                '&.Mui-disabled': {
                                    color: 'primary.button.triadic.primary',
                                    bgcolor: green[500],
                                },
                            })}
                            disabled={!activeButton}
                        >
                            <input hidden type={'file'} accept={'image/*'} />
                            {activeButton ? (
                                <AddPhotoAlternateIcon />
                            ) : (
                                <CheckIcon />
                            )}
                        </IconButton>
                        {loadingImageProgress && (
                            <CircularProgress
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 1,
                                    color: 'primary.button.secondary',
                                }}
                            />
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    );
};
