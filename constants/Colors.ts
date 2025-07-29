// LottoCoin Brand Colors - Exact Hex Match
export const Colors = {
  // Primary Colors
  primary: "#CAF206", // color-primary (Bright lime green)
  background: "#FFFFFF", // color-background (White for app background)

  // Text Colors
  textPrimary: "#000000", // color-text-primary (Black)
  textSecondary: "#6C6C6C", // color-text-secondary (Gray)

  // Button Colors
  buttonDark: "#000000", // color-button-dark (Black)

  // State Colors
  accent: "#E91E63", // color-accent (Pink)
  error: "#F44336", // color-error (Red)
  success: "#34D399", // color-success (Green)

  // Additional UI Colors
  white: "#FFFFFF",
  cardBackground: "#FFFFFF",
  inputBackground: "#F9FAFB",
  border: "#E5E7EB",
  disabled: "#D1D5DB",
  destructive: "#F44336",
  warning: "#F59E0B",
  gray100: "#F5F5F5",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",

  // Coin Colors
  coinGold: "#FBBF24",
  coinGoldInner: "#FDE047",
  coinText: "#92400E",

  // Illustration Colors
  rocketBlue: "#3B82F6",
  rocketBlueDark: "#1E40AF",
  rocketOrange: "#FB923C",
  rocketOrangeDark: "#EA580C",
  rocketFire: "#EF4444",

  moneyBagGray: "#E5E7EB",
  moneyBagTie: "#EF4444",
  moneyBagGreen: "#16A34A",

  // Status Colors
  online: "#10B981",
  offline: "#EF4444",
  pending: "#F59E0B",

  // Transparent overlays
  blackOverlay: "rgba(0, 0, 0, 0.5)",
  whiteOverlay: "rgba(255, 255, 255, 0.9)",
  primaryOverlay: "rgba(202, 242, 6, 0.1)",
} as const;

export type ColorName = keyof typeof Colors;

// Theme configuration
export const Theme = {
  colors: Colors,
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 999,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 28,
    title: 32,
    hero: 36,
  },
  fontWeight: {
    normal: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
  },
  shadows: {
    small: {
      shadowColor: Colors.textPrimary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: Colors.textPrimary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: Colors.textPrimary,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
  },
} as const;
