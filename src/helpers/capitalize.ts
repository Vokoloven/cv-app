export const capitalize = (str: string) =>
    str.replace(
        /\b([a-zÁ-ú]{3,})/g,
        (w) => w.charAt(0).toUpperCase() + w.slice(1)
    );
