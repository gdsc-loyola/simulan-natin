module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fa794fb039121787dfddfdff30f16b5b'),
  },
});
