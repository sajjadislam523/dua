export function mergeDuas(duas) {
    return duas.reduce((acc, current) => {
        const existingDua = acc.find((item) => item.dua_id === current.dua_id);
        if (existingDua) {
            existingDua.dua_name_en = [
                existingDua.dua_name_en,
                current.dua_name_en,
            ]
                .filter(Boolean)
                .join(" ");
            existingDua.top_en = [existingDua.top_en, current.top_en]
                .filter(Boolean)
                .join(" ");
            existingDua.dua_arabic = [
                existingDua.dua_arabic,
                current.dua_arabic,
            ]
                .filter(Boolean)
                .join(" ");
            existingDua.transliteration_en = [
                existingDua.transliteration_en,
                current.transliteration_en,
            ]
                .filter(Boolean)
                .join(" ");
            existingDua.translation_en = [
                existingDua.translation_en,
                current.translation_en,
            ]
                .filter(Boolean)
                .join(" ");
            // For reference, check both keys and merge if necessary:
            existingDua.reference_en = [
                existingDua.reference_en || existingDua.refference_en,
                current.reference_en || current.refference_en,
            ]
                .filter(Boolean)
                .join(" ");
        } else {
            acc.push({ ...current });
        }
        return acc;
    }, []);
}
