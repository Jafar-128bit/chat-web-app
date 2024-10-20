import {useState, useEffect} from 'react';

type HoverDataType = {
    [key: string]: boolean;
};

const useHover = (buttonCount: number) => {
    const [hoverData, setHoverData] = useState<HoverDataType>({});

    // Initialize hoverData with `false` for each button
    useEffect(() => {
        const initialHoverData: HoverDataType = {};
        for (let i = 1; i <= buttonCount; i++) {
            initialHoverData[`button${i}`] = false;
        }
        setHoverData(initialHoverData);
    }, [buttonCount]); // Re-initialize when buttonCount changes

    // Handle hover state changes
    const handleHover = (buttonKey: keyof HoverDataType, isHovering: boolean) => {
        setHoverData(prevState => {
            if (prevState[buttonKey] !== isHovering) {
                return {
                    ...prevState,
                    [buttonKey]: isHovering,
                };
            }
            return prevState; // No state change if hover state is the same
        });
    };

    return {hoverData, handleHover};
};

export default useHover;