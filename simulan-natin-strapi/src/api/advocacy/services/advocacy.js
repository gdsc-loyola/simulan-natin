'use strict';

/**
 * advocacy service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::advocacy.advocacy');
