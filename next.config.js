module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/',
          permanent: true,
        },
        {
          source: '/dashboard',
          destination: '/dashboard',
          permanent: true,
        }
      ];
    },
  };