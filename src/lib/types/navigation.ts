export interface Navigation {
    id: number;
    items: NavigationItem[]
}

export interface NavigationItem {
    text: string;
    url: string;
    icon: string;
}