import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Typography from '@mui/material/Typography';
import { SyntheticEvent } from 'react';
import { ReactNode } from 'react';

type TAccordion = {
    expanded: string | false;
    handleChange: (
        panel: string
    ) => (event: SyntheticEvent, newExpanded: boolean) => void;
    value: 'contacts' | 'tech-skills' | 'soft-skills' | 'languages';
    title: 'Contacts' | 'Tech Skills' | 'Soft Skills' | 'Languages';
    children: ReactNode;
};

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export const CustomizedAccordion = ({
    expanded,
    handleChange,
    value,
    title,
    children,
}: TAccordion) => {
    return (
        <Accordion
            expanded={expanded === `${value}`}
            onChange={handleChange(`${value}`)}
        >
            <AccordionSummary
                aria-controls={`${value}-content`}
                id={`${value}-header`}
                sx={(theme) => ({
                    '& .MuiAccordionSummary-expandIconWrapper': {
                        color: 'primary.button.triadic.primary',
                    },
                    ...(theme.palette.mode === 'light'
                        ? { backgroundColor: 'primary.background.primary' }
                        : {
                              backgroundColor:
                                  'primary.background.triadic.complementary',
                              backgroundImage:
                                  'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
                          }),
                })}
            >
                <Typography sx={{ color: 'primary.typography.text.primary' }}>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
};
