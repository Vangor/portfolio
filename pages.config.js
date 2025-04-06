module.exports = {
  // Adjust the build output based on your Next.js configuration
  buildCommand: 'yarn build',
  buildOutput: '.next',

  // Configure environment variables
  publicEnvVars: [
    // List any environment variables that should be public
  ],

  // Configure custom headers if needed
  headers: [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ],

  // Enable HTTPS by default
  https: true,
};
