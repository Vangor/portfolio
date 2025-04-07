# Modern Landing Page

A sleek, internationalized landing page built with Next.js 15, React 19, and TypeScript. Designed for performance, SEO, and a beautiful user experience.

![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)
![Next.js Version](https://img.shields.io/badge/next.js-15.2.4-blue)
![React Version](https://img.shields.io/badge/react-19.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features

- **Modern Stack**: Built with Next.js 15 and React 19
- **Internationalization**: Full i18n support with next-intl
- **Performance Optimized**: Configured for optimal bundle splitting and fast loading
- **Responsive Design**: Beautiful UI that works on all devices
- **Cloudflare Integration**: Optimized for deployment on Cloudflare Pages
- **Component Library**: Utilizes Shadcn UI components
- **Type Safety**: Fully typed with TypeScript
- **Testing**: Jest and React Testing Library setup for reliable testing

## 📋 Prerequisites

- Node.js ≥ 20.0.0
- Yarn ≥ 1.22.19

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/landing.git
   cd landing
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your specific configuration.

## 💻 Development

Start the development server:

```bash
yarn dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production
- `yarn build:analyze` - Build with bundle analyzer to inspect chunk sizes
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn test` - Run Jest tests
- `yarn test:watch` - Run tests in watch mode
- `yarn test:coverage` - Run tests with coverage report

## 🏗️ Project Structure

```
src/
├── app/               # Next.js App Router
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

This project uses `next-intl` for internationalization. Translation files are located in the `src/messages` directory.

To add a new language:

1. Create a new file in `src/messages` named after the language code
2. Add the language to the supported locales in `src/i18n/i18n.ts`

## 🎨 Styling

The project uses a combination of:

- Styled Components
- Tailwind CSS
- Tailwind Styled Components

Components follow the structure:

- `ComponentName.tsx` - Component logic and structure
- `ComponentName.styled.ts` - Styled components for the component

## 🧪 Testing

Tests are written using Jest and React Testing Library:

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Generate coverage report
yarn test:coverage
```

## 🚢 Deployment

This project is configured for deployment to Cloudflare Pages:

1. Push your changes to your git repository
2. Connect your repository to Cloudflare Pages
3. Configure the build settings in Cloudflare:
   - Build command: `yarn build`
   - Build output directory: `.next/standalone`
   - Node.js version: 20+

The configuration is already set up in `wrangler.toml` for Cloudflare deployment.

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

Built with ❤️ using Next.js, React, and TypeScript
