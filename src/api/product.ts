
export const productAPI = async (brand: string | null = null) => {
    try {
        const url = brand
            ? `https://be-oceanshop.onrender.com/api/product/${brand}`
            : `https://be-oceanshop.onrender.com/api/product`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // Debug log
        return data;
    } catch (error) {
        console.error("API Error:", error);
        throw error; // Re-throw để component có thể handle
    }
}