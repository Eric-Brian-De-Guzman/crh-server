module.exports = {
  async beforeCreate(booking) {
    booking.params.data.slug = await strapi.service('plugin::content-manager.uid').generateUIDField({
      contentTypeUID: 'api::booking.booking',
      field: 'slug',
      data: booking.params.data
    })
  }
}