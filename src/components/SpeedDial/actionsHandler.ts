type TActions = {
    icon: JSX.Element;
    name: string;
};

export const actionsHandler = (
    actions: TActions[],
    pathname: string,
    side: 'right' | 'left',
    width: number
) => {
    if (side === 'right') {
        return pathname === '/projects'
            ? actions.filter((action: TActions) => action.name === 'projects')
            : actions.filter((action: TActions) => action.name !== 'projects');
    } else if (side === 'left' && width < 768) {
        switch (pathname) {
            case '/':
                return actions.filter(
                    (action: TActions) => action.name === 'name'
                );
                break;

            case '/projects':
                return actions.filter(
                    (action: TActions) => action.name === 'projects'
                );
                break;

            case '/summary':
                return actions.filter(
                    (action: TActions) => action.name !== 'projects'
                );
                break;

            default:
                break;
        }
    }
};
