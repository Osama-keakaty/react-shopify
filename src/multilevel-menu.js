export const menuItems = [
    { label: "Menu 1" },
    {
        label: "Menu 2",
        subMenu: [{ label: "Sub Menu 1" }
            , { label: "Sub Menu 2" }],
    },
    {
        label: "Menu 3",
        subMenu: [
            { label: "Sub Menu 1" },
            { label: "Sub Menu 2" },
            { label: "Sub Menu 3" },
            {
                label: "Sub Menu 4",
                subMenu: [
                    {
                        label: "Sub sub menu 1",
                    },
                    { label: "Sub sub menu 2" },
                ],
            },
        ],
    },
    {
        label: "Menu 4",
        subMenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
    },
];
