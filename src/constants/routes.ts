// Route constants for better maintainability
export const ROUTES = {
    HOME: "/",
    SNEAKER: "/sneaker",
    PRODUCT: "/product/:title",
    PRODUCT_DETAIL: (title: string) => `/product/${encodeURIComponent(title)}`,
    SIGNIN: "/signin",
    SIGNUP: "/signup",
    CONTACT: "/contact",
    FEATURES: "/features",
    PAYMENT: "/payment",
    PAY: "/pay", // Legacy route
} as const;

// Route groups for easier management
export const PUBLIC_ROUTES = [
    ROUTES.HOME,
    ROUTES.SNEAKER,
    ROUTES.PRODUCT,
    ROUTES.CONTACT,
    ROUTES.FEATURES,
] as const;

export const AUTH_ROUTES = [
    ROUTES.SIGNIN,
    ROUTES.SIGNUP,
] as const;

export const PROTECTED_ROUTES = [
    ROUTES.PAYMENT,
] as const;