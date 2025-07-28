# LottoCoin Mobile 🎰

A cryptocurrency lottery mobile application built with React Native and Expo.

## Features

🎯 **Complete Lottery Experience**
- 1-49 number lottery system
- Quick Pick random number generation  
- Weekly draws with guaranteed payouts
- Real-time lottery results

💰 **USDT Wallet Integration**
- TRON (TRC-20) USDT deposits
- Secure withdrawals to external wallets
- Real-time balance tracking
- Transaction history

👤 **User Management**
- Phone verification (SMS)
- Secure account creation
- Profile management
- Notification preferences

🎨 **Beautiful UI/UX**
- Animated onboarding flow
- Custom #CAF206 theme
- Smooth navigation transitions
- Mobile-optimized design

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **React Navigation** for routing
- **React Hook Form + Zod** for validation
- **React Native Reanimated** for animations
- **Expo Linear Gradient** for visual effects

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npx expo start
   ```

3. **Run on device/simulator**
   - iOS: `npx expo start --ios`
   - Android: `npx expo start --android`
   - Web: `npx expo start --web`

## Project Structure

```
screens/                    # All mobile screens
├── OnboardingWalkthrough*.tsx  # 5 onboarding screens
├── LandingScreen.tsx          # Welcome screen
├── CrearCuentaScreen.tsx      # Registration
├── IniciarSesionScreen.tsx    # Login
├── ComencemosScreen.tsx       # Phone verification
├── DashboardScreen.tsx        # Main dashboard
���── ComprarTicketsScreen.tsx   # Buy lottery tickets
├── MiSaldoScreen.tsx         # Wallet management
├── MiPerfilScreen.tsx        # User profile
└── NotificacionesScreen.tsx  # Notifications

constants/
└── Colors.ts               # Theme colors

types/
└── navigation.ts          # Navigation types

App.tsx                    # Main app component
app.json                   # Expo configuration
```

## Build for Production

```bash
# Build for app stores
npx eas build

# Android APK
npx eas build --platform android

# iOS IPA  
npx eas build --platform ios
```

## Key Features Implemented

✅ Complete onboarding flow with animations  
✅ User registration and phone verification  
✅ 1-49 lottery number selection system  
✅ USDT wallet with TRC-20 integration  
✅ Profile management with notifications  
✅ Real-time lottery information display  
✅ Transaction history and balance tracking  
✅ Secure form validation throughout  
✅ Mobile-optimized responsive design  
✅ TypeScript navigation system  

## Color Theme

Primary Color: `#CAF206` (LottoCoin Green)  
Background: `#FFFFFF` (White)  
Text Primary: `#000000` (Black)  
Text Secondary: `#6C6C6C` (Gray)  

## License

Private - LottoCoin Mobile Application
