type Navlink = {
    href: string;
    label: string;
}

export const links: Navlink[] = [
    { href: '/', label: "Home" },
    { href: '/favorits', label: 'Favorits' },
    { href: '/camp', label: 'Camp' },
    { href: '/profile', label: 'Profile' },
    { href: '/camp/create', label: 'Create Landmark' },
]