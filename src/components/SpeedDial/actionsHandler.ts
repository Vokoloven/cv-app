type TActions = {
    icon: JSX.Element;
    name: string;
};

export const actionsHandler = (
    actions: TActions[],
    pathname: string,
    side: 'right' | 'left'
) => {
    if (side === 'right') {
        return pathname === '/projects'
            ? actions.filter((action: TActions) => action.name === 'Projects')
            : actions.filter((action: TActions) => action.name !== 'Projects');
    } else if (side === 'left') {
        return pathname === '/projects'
            ? actions.filter((action: TActions) => action.name === 'Projects')
            : actions.filter((action: TActions) => action.name !== 'Projects');
    }
};
