import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';
import { TSkeleton } from 'types/globalTypes';

export const CustomSkeleton = ({
    loading,
    spacing,
    skeletonProps,
}: TSkeleton) => {
    if (loading === 'pending') {
        return (
            <Stack spacing={spacing} sx={{ my: 2 }}>
                {skeletonProps.map(({ variant, height, width, id }) => (
                    <Skeleton
                        key={id}
                        variant={variant}
                        width={width}
                        height={height}
                    />
                ))}
            </Stack>
        );
    } else {
        return null;
    }
};
