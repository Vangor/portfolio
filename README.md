# Modern Landing Page

A sleek, internationalized landing page built with Bun, Vite, React, and TypeScript.

![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)
![React Version](https://img.shields.io/badge/react-19.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features

- **Modern Stack**: Bun + Vite + React Router
- **Internationalization**: react-i18next
- **Performance Optimized**: Configured for optimal bundle splitting and fast loading
- **Responsive Design**: Beautiful UI that works on all devices
- **Deployment**: Cloudflare Pages
- **Component Library**: Utilizes Shadcn UI components
- **Type Safety**: Fully typed with TypeScript
- **Testing**: Vitest and Testing Library

## 📋 Prerequisites

- Node.js ≥ 20.0.0
- Bun ≥ 1.0.0

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/landing.git
   cd landing
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your specific configuration.

## 💻 Development

Start the development server:

```bash
bun run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint
- `bun run test` - Run Vitest
- `bun run test:coverage` - Run tests with coverage report

## 🏗️ Project Structure

```
src/
├── components/        # Reusable components
│   └── ComponentName/ # Each component in its own folder with
│       ├── ComponentName.tsx
│       ├── ComponentName.styled.ts
│       └── ComponentName.utils.ts (if needed)
├── i18n/              # Internationalization configuration
├── lib/               # Utility libraries and configurations
├── messages/          # Translation messages
├── providers/         # React context providers
└── utils/             # Utility functions
```

## 🌐 Internationalization

This project uses `react-i18next`. Translation files are located in the `src/messages` directory.

To add a new language:

1. Create a new file in `src/messages` named after the language code
2. Add the language to the supported locales in `src/i18n/client.ts`

## 🎨 Styling

The project uses a combination of:

- Styled Components
- Tailwind CSS
- Tailwind Styled Components

Components follow the structure:

- `ComponentName.tsx` - Component logic and structure
- `ComponentName.styled.ts` - Styled components for the component

## 🧪 Testing

Tests are written using Vitest and Testing Library:

```bash
# Run all tests
bun run test

# Generate coverage report
bun run test:coverage
```

## 🚢 Deployment

This project is deployed to Cloudflare Pages.

## 🔍 Performance Optimization

The project includes webpack optimizations to ensure fast loading and compliance with Cloudflare's size limits:

- Optimized chunk splitting
- Separate vendor chunks for large dependencies
- Bundle analyzer for monitoring asset sizes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ using Bun, Vite, React, and TypeScript
