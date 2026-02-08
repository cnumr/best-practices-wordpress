module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [
    '@udecode/plate-dnd',
    '@react-dnd/asap',
    '@react-dnd/invariant',
    '@react-dnd/shallowequal',
    'dnd-core',
    'react-dnd',
    'react-dnd-html5-backend',
  ],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    return [
      { source: '/', destination: '/home' },
      { source: '/admin', destination: '/admin/index.html' },
    ];
  },
};
