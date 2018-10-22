'use strict';

/**
 * Activity.js controller
 *
 * @description: A set of functions called "actions" for managing `Activity`.
 */

module.exports = {

  /**
   * Retrieve activity records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.activity.search(ctx.query);
    } else {
      return strapi.services.activity.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a activity record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.activity.fetch(ctx.params);
  },

  /**
   * Count activity records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.activity.count(ctx.query);
  },

  /**
   * Create a/an activity record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.activity.add(ctx.request.body);
  },

  /**
   * Update a/an activity record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.activity.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an activity record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.activity.remove(ctx.params);
  }
};
