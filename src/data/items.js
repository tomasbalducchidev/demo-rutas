export const items = [
    { id: 0, name: 'Pepe', telephone: '1111111111', favorite: false },
    { id: 1, name: 'Pipo', telephone: '2222222222', favorite: true },
];

export function getContact(id) {
    return items.find((item) => item.id == id);
}